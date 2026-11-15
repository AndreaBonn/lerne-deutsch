/* German word-form candidates, strings only. The dictionary verdict lives
   in lemma.js. Classic script, loaded before lemma.js. */
(function (global) {
  "use strict";

  // Compound forms omit auxiliaries; lone forms still index their own verb.
  var POSILKOWE = ("habe hast hat haben habt hatte hattest hatten hattet " +
    "hätte hättest hätten hättet habest habet " +
    "bin bist ist sind seid war warst waren wart sei seist seien seiet " +
    "wäre wärest wären wäret wärst " +
    "werde wirst wird werden werdet wurde wurdest wurden wurdet " +
    "würde würdest würden würdet werdest").split(/\s+/);

  function posilkowy(w) {
    return POSILKOWE.indexOf(String(w).toLowerCase()) >= 0;
  }

  function slowa(forma) {
    var words = String(forma).toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length < 2) return words;
    return words.filter(function (word) { return !posilkowy(word); });
  }

  // Infinitive-shaped nouns are deliberately left for the dictionary to reject.
  function czasownikowe(haslo) {
    return /^(sich )?[a-zäöüß]+(en|ern|eln)$/i.test(haslo);
  }

  // Specific endings precede their shorter alternatives. Each is a hypothesis:
  // -er can be a noun plural, a strong adjective ending or a comparative.
  var REGULY = [/esten$/i, /sten$/i, /est(e|em|er|es)$/i, /st(e|em|er|es)$/i,
    /est$/i, /st$/i, /ern$/i,
    /er(e|en|em|er|es)$/i, /es$/i, /en$/i, /em$/i, /er$/i, /e$/i, /n$/i, /s$/i];
  var UMLAUT = { "ä": "a", "ö": "o", "ü": "u", "Ä": "A", "Ö": "O", "Ü": "U" };
  var CLASSICAL_SINGULAR_ENDINGS = ["um", "a", "o", "on"];

  function reverseUmlaut(word) {
    return word.replace(/[äöüÄÖÜ]/g, function (letter) { return UMLAUT[letter]; });
  }

  var IRREGULAR_DEGREES = Object.assign(Object.create(null), {
    besser: "gut", best: "gut", höher: "hoch", höchst: "hoch",
    mehr: "viel", meist: "viel", lieber: "gern", liebst: "gern", nächst: "nah"
  });

  function odmienne(slowo) {
    var out = [slowo];
    var word = slowo.replace(/^am\s+([a-zäöüß]+(?:sten|ßten))$/i, "$1");
    if (/\s/.test(word)) return out;
    function add(candidate) {
      if (candidate && out.indexOf(candidate) < 0) out.push(candidate);
    }
    var degreeStem = word.toLowerCase().replace(/(en|em|er|es|e)$/, "");
    add(IRREGULAR_DEGREES[word.toLowerCase()]);
    add(IRREGULAR_DEGREES[degreeStem]);
    if (/innen$/i.test(word)) add(word.slice(0, -3));
    if (/en$/i.test(word)) CLASSICAL_SINGULAR_ENDINGS.forEach(function (ending) {
      add(word.slice(0, -2) + ending);
    });
    // Groß has -t rather than -st in its superlative: größte -> größ.
    if (/ßt(e|en|em|er|es)?$/i.test(word)) {
      var superlativeStem = word.replace(/t(e|en|em|er|es)?$/i, "");
      add(superlativeStem);
      add(reverseUmlaut(superlativeStem));
    }
    REGULY.forEach(function (ending) {
      if (!ending.test(word)) return;
      var stem = word.replace(ending, "");
      add(stem);
      add(reverseUmlaut(stem));
    });
    add(reverseUmlaut(word));
    return out;
  }

  var FUNKCYJNE = ("der die das den dem des ein eine einen einem einer eines " +
    "kein keine keinen keinem keiner keines " +
    "in an auf mit ohne für gegen durch über unter vor hinter neben zwischen " +
    "nach zu aus bei von seit bis um entlang gegenüber wegen trotz während " +
    "im am zum zur vom beim ins ans aufs fürs durchs übers unters " +
    "und oder aber denn sondern weil dass wenn als ob obwohl bevor nachdem " +
    "ich du er sie es wir ihr mich dich sich uns euch mir dir ihnen Ihnen " +
    "mein meine dein deine sein seine ihr ihre unser unsere euer eure " +
    "dies dieser diese dieses diesen diesem wer wen wem was welcher welche welches " +
    "wo wohin woher wann wie warum nicht doch nur auch schon noch ja nein " +
    "sehr so zu immer nie oft hier dort da dann mal wohl etwa eben halt").split(/\s+/);

  var LICZEBNIKI = ("null eins zwei drei vier fünf sechs sieben acht neun zehn " +
    "elf zwölf dreizehn vierzehn fünfzehn sechzehn siebzehn achtzehn neunzehn " +
    "zwanzig dreißig vierzig fünfzig sechzig siebzig achtzig neunzig hundert tausend " +
    "million millionen milliarde milliarden " +
    "erste zweite dritte vierte fünfte sechste siebte achte neunte zehnte " +
    "elfte zwölfte dreizehnte vierzehnte fünfzehnte sechzehnte siebzehnte " +
    "achtzehnte neunzehnte zwanzigste dreißigste hundertste tausendste").split(/\s+/);

  var functionWords = Object.create(null);
  FUNKCYJNE.concat(LICZEBNIKI).forEach(function (word) { functionWords[word.toLowerCase()] = true; });

  function funkcyjny(w) {
    return !!functionWords[String(w).toLowerCase()];
  }

  global.LemmaMorf = {
    slowa: slowa,
    posilkowy: posilkowy,
    czasownikowe: czasownikowe,
    odmienne: odmienne,
    funkcyjny: funkcyjny
  };

})(window);
