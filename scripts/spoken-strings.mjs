/* ============================================================
   Which strings of a unit the course SPEAKS. One rule, two users:
   extract_strings.mjs (what gets recorded) and check_porting.mjs
   (whether the unit has its recordings). Kept apart so the two cannot
   disagree on what "spoken" means.
   ============================================================ */

/** Normalization identical to Recordings.norm in assets/js/recordings.js. */
export function norm(s) {
  return String(s == null ? "" : s).replace(/\s+/g, " ").trim();
}

/** primary: main voice · other: the second speaker. */
export function collectExercise(ex, addP, addO) {
  if (!ex || typeof ex !== "object") return;
  if (ex.say) addP(ex.say);
  if (ex.t === "listen" || ex.t === "speak") {
    addP(ex.it);
    (ex.alt || []).forEach(addP);
  }
  if (ex.t === "dialogue") {
    (ex.lines || []).forEach(l => {
      if (l.it) (l.sp === "TY" ? addP : addO)(l.it);
      // the variants of the student's answer are played after a hit
      (l.choices || []).forEach(addP);
    });
  }
}

export function collectLesson(l, addP, addO) {
  if (!l) return;
  (l.vocab || []).forEach(v => addP(v.it));
  if (l.grammar && l.grammar.examples) l.grammar.examples.forEach(e => addP(e.it));
  if (l.dialogue && l.dialogue.lines) {
    // in a lesson the lines alternate: even = the other speaker, odd = the student
    l.dialogue.lines.forEach((ln, i) => (i % 2 ? addP : addO)(ln.it));
  }
  (l.exercises || []).forEach(ex => collectExercise(ex, addP, addO));
}

/** Spoken strings of one unit, normalized; a string in the main voice is not repeated in the other. */
export function spokenStrings(unit) {
  const primary = new Set();
  const other = new Set();
  const addP = s => { const t = norm(s); if (t.length > 1) primary.add(t); };
  const addO = s => { const t = norm(s); if (t.length > 1) other.add(t); };
  (unit.lessons || []).forEach(l => collectLesson(l, addP, addO));
  if (unit.test) collectLesson(unit.test, addP, addO);
  primary.forEach(s => other.delete(s));
  return { primary: [...primary], other: [...other] };
}

export function collectSecondary(sandbox, addP, addO) {
(sandbox.CONVERSATIONS || []).forEach(function (c) {
  (c.turns || []).forEach(function (t) {
    if (t.sp === "TY") {
      // the model answer, played by the "Show the answer" button.
      // At a branch EVERY branch has its own model and its own button:
      // recording only the first leaves the second branch mute.
      const wzory = t.opts
        ? t.opts.map(function (o) { return (o.accept || [])[0]; })
        : [(t.accept || (t.it ? [t.it] : []))[0]];
      wzory.forEach(function (w) { if (w) addP(w); });
    } else {
      addO(t.it);
    }
  });
});

/* Minimal pairs: EVERY word separately, in the main voice. The exercise is
   about hearing the difference, so system synthesis — which confuses exactly
   those sounds — is not a fallback here but the end of the exercise. */
(sandbox.PHONETICS || []).forEach(function (zbior) {
  (zbior.pairs || []).forEach(function (para) { addP(para.a); addP(para.b); });
});

/* Readings: EVERY sentence separately. A recording of a whole text would
   weigh more than all the sentences together and could not be used for
   dictation; continuous listening stitches the same files together through
   Audio2.speakSequence. */
(sandbox.READINGS || []).forEach(function (r) {
  (r.sentences || []).forEach(addP);
  /* The words of a reading: the author's glosses and the vocabulary for
     tapping in the text. The word card has a 🔊 button, so those strings ARE
     spoken — and this script only walked the sentences, so all of them fell
     back to the system voice. Spoken fields without a collector do not
     report themselves: the course simply speaks worse and nobody knows why. */
  (r.glossIt || []).forEach(addP);
  (r.lexIt || []).forEach(addP);
});

/* The exam simulation: only the listening texts are SPOKEN. The questions,
   the instructions and the reading texts are read by the student, as at the
   exam, so recording them would be three hundred files nobody will ever play.
   The second speaker gets the second voice, as in the course dialogues. */
(sandbox.CILS || []).forEach(function (sim) {
  (sim.sezioni || []).forEach(function (sez) {
    if (sez.id !== "ascolto") return;
    (sez.prove || []).forEach(function (p) {
      (p.brani || []).forEach(function (brano) {
        (brano || []).forEach(function (r) {
          if (r.it) (r.sp === "B" ? addO : addP)(r.it);
        });
      });
    });
  });
});

/* False friends: the word itself and a sentence containing it. The exercise
   is about the student HEARING the Italian meaning instead of reading about
   it in their own language, so without a recording it is born mute — and
   that is the only reason this file lives in data/core/ rather than in an
   overlay. */
(sandbox.INTERFERENCE || []).forEach(function (v) {
  addP(v.it);
  addP(v.ex);
});

}
