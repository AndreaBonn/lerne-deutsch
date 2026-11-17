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
