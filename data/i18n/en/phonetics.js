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
    contrast: "For bieten/bitten and Miete/Mitte you can lean on the English contrast between beat and bit, so the two sounds are not new; do not assume the same for Höhle and Hölle, because the front rounded vowels ö and ü have no English counterpart (say ee with rounded lips for ü, and eh with rounded lips for ö). If your accent lets long vowels glide, as beat may, keep the German ones flat from start to finish, like a held note. The double letter in Bett and Mitte does not lead to a long consonant: it only tells you the vowel before it is short.",
    pairs: [
      { glossA: "state, country", glossB: "city, town" },
      { glossA: "to offer", glossB: "to ask, to request" },
      { glossA: "cave", glossB: "hell" },
      { glossA: "rent", glossB: "middle, centre" },
      { glossA: "oven, stove", glossB: "open" },
      { glossA: "flower bed", glossB: "bed" }
    ]
  }

});
