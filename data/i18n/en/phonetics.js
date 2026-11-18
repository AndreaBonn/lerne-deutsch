/* ============================================================
   Minimal pairs - English text.

   The contrastive notes are written for an English speaker, not
   translated. English already contrasts tense and lax vowels (beat and
   bit), so the ear has the categories; what it does not expect is that
   German keeps its long vowels pure, with no glide at the end.
   ============================================================ */
LINGUAI.addStrings("en", {

  "ph:ph-lang-kurz": {
    title: "Long and short vowels",
    note: "In German the length of a vowel changes the word: long vowels last longer than short ones. In many pairs the quality differs too (the long vowel is tenser and closer), but not in all: in Staat and Stadt it is mainly the duration. Spelling helps: after a short vowel you usually find two consonants (Bett, Mitte, offen).",
    contrast: "For bieten/bitten and Miete/Mitte you can lean on the English contrast between beat and bit, so the two sounds are not new; do not assume the same for Höhle and Hölle, because the front rounded vowels ö and ü have no English counterpart (say ee with rounded lips for ü; for ö, Höhle has a long, close vowel [øː] and Hölle a short, more open one [œ], so say eh with rounded lips for Hölle and keep the tongue higher for Höhle). If your accent lets long vowels glide, as beat may, keep the German ones flat from start to finish, like a held note. The double letter in Bett and Mitte does not lead to a long consonant: it only tells you the vowel before it is short.",
    pairs: [
      { glossA: "state, country", glossB: "city, town" },
      { glossA: "to offer", glossB: "to ask, to request" },
      { glossA: "cave", glossB: "hell" },
      { glossA: "rent", glossB: "middle, centre" },
      { glossA: "oven, stove", glossB: "open" },
      { glossA: "flower bed", glossB: "bed" }
    ]
  },

  "ph:ph-ue-i": {
    title: "ü and i",
    note: "German ü is a front rounded vowel: the tongue sits where it sits for i, and the lips round as for u. In each pair only the lips change; the length stays the same: short in Kissen and küssen, Kiste and Küste, long in vier and für, spielen and spülen, Ziege and Züge, liegen and lügen.",
    contrast: "English has no front rounded vowels, so ü tends to come out either as ee (küssen sounds like Kissen) or as oo (für sounds like an English \"foor\"). Say a long ee, keep your tongue where it is and round your lips as for oo. If the tongue slides back you get oo, which is the other mistake. When you listen, ü sounds darker than i. The short pairs also rest on the bit/beat contrast you already have: Kissen has the vowel of bit, not of beat.",
    pairs: [
      { glossA: "pillow, cushion", glossB: "to kiss" },
      { glossA: "box, crate", glossB: "coast" },
      { glossA: "four", glossB: "for" },
      { glossA: "to play", glossB: "to rinse, to wash up" },
      { glossA: "goat", glossB: "trains" },
      { glossA: "to lie (be lying down)", glossB: "to lie (tell lies)" }
    ]
  },

  "ph:ph-oe-e": {
    title: "ö and e",
    note: "ö is the rounded partner of e: the tongue sits as for e, and the lips round as for o. It can be long and close (lesen and lösen, Sehne and Söhne, Hefe and Höfe) or short and more open (kennen and können, helle and Hölle). In each pair the length does not change: only the lips do.",
    contrast: "English has no ö either, and the usual substitute is e: können ends up sounding like kennen, Söhne like Sehne. Say e, keep your tongue still and round your lips as for o; the tongue stays forward, so do not let it turn into an o. For the long ö keep the vowel steady: an English long vowel often glides at the end (the vowel of say), and the German one does not. Note the gloss below: German hell means bright, and it is Hölle that means hell.",
    pairs: [
      { glossA: "to know (be acquainted with)", glossB: "can, to be able to" },
      { glossA: "to read", glossB: "to solve, to loosen" },
      { glossA: "tendon", glossB: "sons" },
      { glossA: "yeast", glossB: "courtyards" },
      { glossA: "bright, light (form of hell)", glossB: "hell" }
    ]
  },

  "ph:ph-s-z": {
    title: "s and z at the start of a word",
    note: "In the German of Germany, s at the start of a word before a vowel is voiced [z], with the vocal cords buzzing, and z is always [ts]. So Saal starts with a buzz and Zahl with a t followed by an s. In Austria, Switzerland and southern Germany initial s is often voiceless; the course recordings follow the northern standard.",
    contrast: "The trap is the letter z: English reads it as the buzzing sound of zoo, and that sound is exactly the German s. Read Zahl the English way and you have said Saal. German z is the ts at the end of cats, or the zz in pizza, also at the start of a word. For Saal, Sinn, seit start with the z of zoo, not the s of sun.",
    pairs: [
      { glossA: "since", glossB: "time" },
      { glossA: "ropes", glossB: "line (of text)" },
      { glossA: "hall", glossB: "number" },
      { glossA: "sense", glossB: "tin (the metal)" }
    ]
  }

});
