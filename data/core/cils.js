/* ============================================================
   Language-neutral layer: exam simulation in the style of Goethe-Zertifikat B1.

   THE WHOLE FILE IS IN GERMAN AND HAS NO OVERLAY. Tasks, instructions and
   reading texts are what the learner meets in the room, so translating them
   would change the task. Adding an explanation language costs nothing here,
   and `parity.mjs` has nothing to compare.

   Two complete mock exams (Modelltest 1 and 2), all four modules. The file
   keeps its old name and its Italian field names (`sezioni`, `prove`,
   `lettura`, `titoloIt`) by design, because the engine reads them. The
   content is original; no official exam material is reproduced. The screen
   calls it unofficial.

   CILS_FORMATO declares module order, duration and target task counts;
   Cils.conforme checks every simulation against it.

   Every module keeps its Teile in sezioni[].prove (the engine still reads the
   legacy tracce, presentazione and argomenti shapes).
   Closed tasks carry puntiPerItem; their weighted item sums set the maximum.
   - vf: items [{q, a:0|1}], testo[] or brani[][] of {it} lines.
   - mc: items [{q, opts:[], a:index}], optional testo[] or brani[][].
   - abbina: annunci [{titolo, testo}], items [{q, a:index}]; annunci.length
     denotes option "0", no suitable advertisement.
   - jn: testo[] reader letters and items [{q, a:0|1}] for Ja/Nein.
   - lueckeAbbina: testo[] chunks around gaps, opts[] shared choices,
     items [{a:index}] with more choices than gaps.
   - lueckeMc: testo[] chunks around gaps, items [{opts:[a,b,c], a:index}].
   - schreiben: {t, consegna, punti:[], parole:{min,max}}, never scored.
   - telc schreiben: {t, scelta:[{titolo, consegna, modulo:{intestazione,
     righe:[[campo,valore], ...]}, richiede:[], parole:{min,max}}, ...]};
     exactly two choices, never scored.
   - sprechen: {t, consegna, punti:[]}, never scored.
   - telc sprechen: three tasks (Teil 1-3), each {t:"sprechen", parti:[...]}; the
     parts in order 1A {consegna, bild:{alt, beschreibung}} (the picture as text),
     1B {fragen:[]}, 2A {scelta:[{thema, stichworte:[]}, {...}]} (exactly two
     topics), 2B {fragen:[]}, 3 {thema, aussagen:[]}. Preparation minutes come from
     the format (`preparazione`); never scored.
   ============================================================ */
window.CILS_FORMATO = {
  official: false,
  soglia: 0.6,
  moduli: [
    { id: "lettura", modulo: "Lesen", minuti: 65, teile: 5, punteggio: true },
    { id: "ascolto", modulo: "Hören", minuti: 40, teile: 4, punteggio: true },
    { id: "scritta", modulo: "Schreiben", minuti: 60, teile: 3, punteggio: false },
    { id: "orale", modulo: "Sprechen", minuti: 15, teile: 3, punteggio: false }
  ]
};
Object.defineProperty(window.CILS_FORMATO, "punteggio", { value: "perModulo" });
Object.defineProperty(window.CILS_FORMATO, "nome", { value: "Goethe-Zertifikat B1" });
window.EXAM_FORMATS = {
  "goethe-b1": window.CILS_FORMATO,
  "telc-pflege": {
    official: false, nome: "telc Deutsch B1·B2 Pflege", punteggio: "fasceRicettive",
    fasce: [
      { min: 0, max: 26, etichetta: "unter B1" },
      { min: 27, max: 42, etichetta: "B1" },
      { min: 43, max: 59, etichetta: "B2" }
    ],
    moduli: [
      { id: "ascolto", modulo: "Hören", minuti: 25, teile: 4, punteggio: true, items: [4, 10, 6, 3] },
      { id: "lettura", modulo: "Lesen", minuti: 60, teile: 4, punteggio: true, items: [4, 5, 6, 3] },
      { id: "sprachbausteine", modulo: "Sprachbausteine", minuti: 60, tempoCondiviso: "lettura", teile: 2, punteggio: true, items: [8, 10] },
      { id: "scritta", modulo: "Schreiben", minuti: 30, teile: 1, punteggio: false },
      { id: "orale", modulo: "Sprechen", minuti: 16, preparazione: 20, teile: 3, punteggio: false }
    ]
  }
};
window.CILS = [
  {
    id: "sim-1",
    titoloIt: "Modelltest 1",
    official: false,
    sezioni: [
      {
        id: "lettura",
        modulo: "Lesen",
        minuti: 65,
        prove: [
          {
            t: "vf",
            puntiPerItem: 1,
            consegna: "Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch?",
            titolo: "Jonas' Blog: Ein Wochenende im Gemeinschaftsgarten",
            testo: [
              "Schon lange wollte ich in meiner Freizeit etwas Sinnvolles machen. Als ich im Supermarkt einen Zettel vom Gemeinschaftsgarten „Grüne Ecke“ gesehen habe, habe ich sofort angerufen. Von diesem Garten hatte ich vorher noch nie gehört. Die Frau am Telefon hat mich gleich für das nächste Wochenende eingeladen, denn im Frühling gibt es dort besonders viel zu tun.",
              "Der Garten liegt hinter dem alten Bahnhof und gehört der Stadt. Früher war dort nur ein leerer Parkplatz. Heute kümmern sich etwa vierzig Freiwillige um Gemüsebeete, Obstbäume und einen kleinen Teich. Am Samstag haben wir uns um neun Uhr getroffen. Zuerst hat uns Petra, die Leiterin, alles gezeigt und erklärt, welche Pflanzen wir nicht anfassen dürfen.",
              "Am Vormittag habe ich mit zwei Studentinnen ein neues Beet für Kartoffeln vorbereitet. Das war anstrengender, als ich gedacht hatte, und nach drei Stunden tat mir der Rücken weh. Zum Mittagessen gab es eine Suppe aus dem Gemüse vom letzten Herbst, die ein Rentner aus der Gruppe gekocht hatte. Jeder hat etwas mitgebracht, ich zum Beispiel einen Kuchen.",
              "Am Sonntag hat es leider den ganzen Vormittag geregnet. Deshalb haben wir nicht draußen gearbeitet, sondern im Gartenhaus Samen sortiert und Schilder für die Beete gemalt. Erst am Nachmittag konnten wir die Tomatenpflanzen gießen.",
              "Geld bekommt man für die Arbeit natürlich nicht. Dafür darf jeder Helfer im Sommer Gemüse aus dem Garten mitnehmen. Mir ist aber etwas anderes wichtiger: Ich habe an einem Wochenende mehr Leute aus meinem Viertel kennengelernt als in den zwei Jahren davor. Nächsten Samstag bin ich wieder dabei, und meine Schwester kommt auch mit."
            ],
            items: [
              {
                q: "Jonas hat im Supermarkt zum ersten Mal von dem Garten gelesen.",
                a: 0
              },
              {
                q: "Der Garten gehört einem privaten Verein.",
                a: 1
              },
              {
                q: "Jonas fand die Arbeit am Kartoffelbeet leichter als erwartet.",
                a: 1
              },
              {
                q: "Das Mittagessen hat ein älterer Mann aus der Gruppe gekocht.",
                a: 0
              },
              {
                q: "Wegen des Regens haben die Helfer am Sonntag gar nicht gearbeitet.",
                a: 1
              },
              {
                q: "Für Jonas sind die neuen Kontakte wichtiger als das Gemüse.",
                a: 0
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Texte und die Aufgaben 7 bis 12. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
            testo: [
              "Text A: Leihräder für alle in Birkenfeld",
              "Seit dem 1. Mai können Einwohner und Touristen in Birkenfeld an zwölf Stationen in der Stadt Fahrräder ausleihen. Die Räder bucht man über eine App oder an einem Automaten direkt an der Station. Die erste halbe Stunde kostet einen Euro, danach zahlt man für jede weitere halbe Stunde 50 Cent. Wer eine Monatskarte für Bus und Bahn hat, kann die Räder jeden Tag eine Stunde kostenlos nutzen.",
              "Die Idee kam von einer Schülergruppe, die im letzten Jahr Unterschriften gesammelt hatte. Der Gemeinderat war zuerst skeptisch, weil er hohe Kosten befürchtete. Nun bezahlt die Stadt nur die Stationen, die Räder selbst stellt ein Unternehmen aus der Region zur Verfügung. Bürgermeisterin Anke Lorenz hofft, dass dadurch weniger Autos in der Innenstadt fahren. Im Herbst will die Stadt prüfen, wie oft die Räder benutzt werden, und dann über weitere Stationen in den Dörfern rund um Birkenfeld entscheiden.",
              "Text B: Jugendliche und Bildschirme",
              "Wie viel Zeit verbringen Jugendliche vor Bildschirmen? Eine Forschergruppe einer Hochschule in Norddeutschland hat dazu 1.200 Schülerinnen und Schüler zwischen 13 und 17 Jahren befragt. Das Ergebnis: An Schultagen sitzen sie im Durchschnitt fast fünf Stunden vor Handy, Computer oder Fernseher, am Wochenende sogar sieben Stunden. Überraschend war für die Forscher, dass Mädchen und Jungen ungefähr gleich viel Zeit vor Bildschirmen verbringen, allerdings auf unterschiedliche Weise: Jungen spielen öfter, Mädchen nutzen häufiger soziale Netzwerke.",
              "Viele Jugendliche sind selbst nicht zufrieden mit ihrem Verhalten. Fast die Hälfte sagt, dass sie wegen des Handys abends zu spät einschläft. Die Forscher raten den Eltern aber nicht zu strengen Verboten. Besser sei es, gemeinsam mit den Kindern Regeln zu finden, zum Beispiel kein Handy beim Essen. Wichtig sei außerdem, dass die Eltern selbst ein gutes Vorbild sind."
            ],
            items: [
              {
                q: "Text A: Die Fahrräder kann man ...",
                opts: [
                  "nur mit dem Smartphone buchen.",
                  "auch ohne App ausleihen.",
                  "nur im Rathaus reservieren."
                ],
                a: 1
              },
              {
                q: "Text A: Wer eine Monatskarte für Bus und Bahn hat, ...",
                opts: [
                  "kann jeden Tag eine Stunde gratis fahren.",
                  "zahlt für die erste halbe Stunde einen Euro.",
                  "darf die Räder den ganzen Tag kostenlos benutzen."
                ],
                a: 0
              },
              {
                q: "Text A: Die Stadt Birkenfeld ...",
                opts: [
                  "kauft die Fahrräder selbst.",
                  "hat das Projekt von Anfang an unterstützt.",
                  "will im Herbst über neue Stationen entscheiden."
                ],
                a: 2
              },
              {
                q: "Text B: Die Studie zeigt, dass Jugendliche ...",
                opts: [
                  "an Schultagen sieben Stunden vor Bildschirmen sitzen.",
                  "an Schultagen mehr Zeit vor Bildschirmen verbringen als am Wochenende.",
                  "am Wochenende mehr Zeit vor Bildschirmen verbringen als an Schultagen."
                ],
                a: 2
              },
              {
                q: "Text B: Mädchen und Jungen ...",
                opts: [
                  "nutzen Bildschirme ungefähr gleich lange, aber für verschiedene Dinge.",
                  "spielen gleich oft am Computer.",
                  "verbringen sehr unterschiedlich viel Zeit vor Bildschirmen."
                ],
                a: 0
              },
              {
                q: "Text B: Die Forscher empfehlen den Eltern, ...",
                opts: [
                  "das Handy am Abend zu verbieten.",
                  "zusammen mit den Kindern Regeln zu machen.",
                  "seltener gemeinsam mit den Kindern zu essen."
                ],
                a: 1
              }
            ]
          },
          {
            t: "abbina",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
            annunci: [
              {
                titolo: "Spanisch am Abend",
                testo: "Volkshochschule: Spanisch für Anfänger ohne Vorkenntnisse. Dienstags von 19:00 bis 20:30 Uhr, 10 Termine, 85 Euro. Anmeldung online oder im Büro der Volkshochschule."
              },
              {
                titolo: "Spanisch für die Reise",
                testo: "Intensivkurs für Fortgeschrittene mit guten Grundkenntnissen. Samstag und Sonntag, jeweils 10 bis 16 Uhr. Wir üben Gespräche im Hotel, im Restaurant und am Bahnhof."
              },
              {
                titolo: "Fit in den Tag",
                testo: "Unsere Laufgruppe trifft sich montags, mittwochs und freitags um 6:30 Uhr am Eingang des Stadtparks. Nach 45 Minuten sind alle rechtzeitig bei der Arbeit. Mitmachen ist kostenlos, Anfänger sind willkommen."
              },
              {
                titolo: "Schwimmen lernen mit 30, 40 oder 50",
                testo: "Kurs für erwachsene Nichtschwimmer im Hallenbad Nord. Donnerstags um 20 Uhr, kleine Gruppen mit höchstens sechs Personen. 120 Euro für 8 Abende."
              },
              {
                titolo: "Kinderbasar im Gemeindesaal",
                testo: "Am Samstag, 14. März, von 9 bis 13 Uhr: Kinderkleidung, Spielzeug und Kinderbücher aus zweiter Hand. Sie möchten selbst verkaufen? Reservieren Sie einen Tisch für 5 Euro unter 0761 44 82 19."
              },
              {
                titolo: "Fahrradwerkstatt Speiche",
                testo: "Wir verkaufen gebrauchte Fahrräder ab 80 Euro. Jedes Rad wird vorher von unseren Mechanikern genau überprüft. Mit sechs Monaten Garantie. Mo bis Fr 10 bis 18 Uhr."
              },
              {
                titolo: "Umzug? Wir packen mit an!",
                testo: "Zwei kräftige Studenten helfen Ihnen beim Umzug, mit eigenem Transporter. Vor allem an Wochenenden. 25 Euro pro Stunde, kurze Wege in der Stadt kosten nichts extra."
              },
              {
                titolo: "Computerhilfe zu Hause",
                testo: "Ich bin Rentner und war 40 Jahre Informatiker. Ich komme zu Ihnen nach Hause und erkläre Ihnen in Ruhe Laptop, Tablet oder Smartphone. Besonders für ältere Menschen. 15 Euro pro Stunde."
              },
              {
                titolo: "Salsa für Paare",
                testo: "Tanzen Sie gern? Unser Salsakurs für Paare beginnt am 6. März, freitags um 19 Uhr in der Tanzschule am Markt. Bitte nur zu zweit anmelden."
              },
              {
                titolo: "Nachhilfe in Mathematik",
                testo: "Lehramtsstudentin gibt Nachhilfe für Schülerinnen und Schüler der Klassen 5 bis 10. Auch Vorbereitung auf Klassenarbeiten. 18 Euro pro Stunde."
              }
            ],
            items: [
              {
                q: "Herr Brandt ist 78 Jahre alt. Er hat ein neues Smartphone bekommen und weiß nicht, wie es funktioniert.",
                a: 7
              },
              {
                q: "Frau Weber möchte Spanisch lernen. Sie kann noch kein Wort Spanisch und arbeitet tagsüber.",
                a: 0
              },
              {
                q: "Lea zieht nächsten Monat in eine andere Wohnung in der Stadt. Sie hat kein Auto.",
                a: 6
              },
              {
                q: "Sabine möchte schon lange Klavier spielen lernen und sucht einen Lehrer.",
                a: 10
              },
              {
                q: "Tobias möchte vor der Arbeit Sport machen, aber dafür kein Geld ausgeben.",
                a: 2
              },
              {
                q: "Marco sucht ein günstiges Fahrrad. Es muss nicht neu sein, aber es soll sicher sein.",
                a: 5
              },
              {
                q: "Familie Kaya möchte die Kleidung verkaufen, die ihren Kindern nicht mehr passt.",
                a: 4
              }
            ]
          },
          {
            t: "jn",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Texte 20 bis 26. In einer Zeitung lesen Sie Kommentare zu einem Artikel über die Frage: Sollen Supermärkte sonntags öffnen? Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für Sonntagsöffnung?",
            testo: [
              "Petra: Ich arbeite als Krankenschwester im Schichtdienst und habe unter der Woche oft keine Zeit zum Einkaufen. Wenn ich auch am Samstag arbeiten muss, stehe ich am Sonntag vor einem leeren Kühlschrank. Für Leute wie mich wäre es eine große Hilfe, wenn wenigstens einige Supermärkte am Sonntag ein paar Stunden geöffnet hätten.",
              "Hakan: Ich arbeite seit zehn Jahren als Verkäufer in einem Supermarkt. Der Sonntag ist der einzige Tag, an dem meine ganze Familie zu Hause ist. Wenn die Geschäfte öffnen, muss ich bestimmt auch an diesem Tag arbeiten. Ein bisschen mehr Geld ist mir das nicht wert. Man kann doch am Samstag einkaufen.",
              "Julia: Früher habe ich in Spanien gelebt, und dort konnte man auch sonntags einkaufen. Das war bequem, aber ich habe am Sonntag nie etwas gebraucht, was nicht bis Montag warten konnte. Hier genieße ich die ruhigen Sonntage. Die Städte sind leiser, und man trifft sich im Park statt im Geschäft. So soll es bleiben.",
              "Stefan: Ich bin Student, wohne allein und plane nicht gern. Oft merke ich erst am Sonntagmittag, dass ich nichts zu essen im Haus habe. Dann muss ich teuer an der Tankstelle einkaufen. Wenn die Supermärkte geöffnet hätten, wäre das viel einfacher. Und wer am Sonntag nicht einkaufen will, muss ja nicht hingehen.",
              "Mira: Ich habe einen kleinen Bioladen. Die großen Supermärkte haben genug Personal, um an sieben Tagen pro Woche zu öffnen, ich aber nicht. Wenn sie sonntags Kunden bekommen, fehlen mir diese Kunden am Montag. Am Ende verlieren die kleinen Geschäfte, und das finde ich ungerecht. Deshalb sollte der Sonntag frei bleiben.",
              "Klaus: Ich verstehe die Sorgen der Angestellten. Trotzdem bin ich der Meinung, dass sich die Zeiten geändert haben. Viele Menschen arbeiten heute am Wochenende oder abends. Die Arbeit am Sonntag könnte freiwillig sein und besser bezahlt werden. Dann hätten alle etwas davon, und die Kunden könnten einkaufen, wann sie wollen.",
              "Anja: Mit drei kleinen Kindern ist Einkaufen für mich immer Stress. Trotzdem möchte ich nicht, dass die Supermärkte am Sonntag öffnen. Dann würden wir als Familie sicher auch sonntags in vollen Geschäften stehen, statt zusammen etwas zu unternehmen. Ein Tag pro Woche ohne Einkaufen tut allen gut."
            ],
            items: [
              {
                q: "Ist Petra für Sonntagsöffnung?",
                a: 0
              },
              {
                q: "Ist Hakan für Sonntagsöffnung?",
                a: 1
              },
              {
                q: "Ist Julia für Sonntagsöffnung?",
                a: 1
              },
              {
                q: "Ist Stefan für Sonntagsöffnung?",
                a: 0
              },
              {
                q: "Ist Mira für Sonntagsöffnung?",
                a: 1
              },
              {
                q: "Ist Klaus für Sonntagsöffnung?",
                a: 0
              },
              {
                q: "Ist Anja für Sonntagsöffnung?",
                a: 1
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie informieren sich über die Regeln der Stadtbibliothek.",
            titolo: "Benutzungsordnung der Stadtbibliothek Lindenau (Auszug)",
            testo: [
              "1. Bibliotheksausweis: Für die Ausleihe brauchen Sie einen Bibliotheksausweis. Sie bekommen ihn an der Information, wenn Sie Ihren Personalausweis zeigen. Für Kinder und Jugendliche unter 18 Jahren ist der Ausweis kostenlos, Erwachsene zahlen 15 Euro im Jahr. Wenn Sie Ihren Ausweis verlieren, kostet ein neuer 3 Euro.",
              "2. Ausleihe: Bücher können Sie vier Wochen ausleihen, DVDs und Zeitschriften eine Woche. Sie können die Leihfrist bis zu zweimal verlängern, online oder an der Information. Das ist aber nur möglich, wenn keine andere Person das Medium vorbestellt hat.",
              "3. Rückgabe: Während der Öffnungszeiten geben Sie alle Medien an den Automaten im Eingangsbereich zurück. Außerhalb der Öffnungszeiten können Sie Bücher in den Rückgabekasten neben der Tür werfen. DVDs geben Sie bitte nur am Automaten zurück, weil sie im Kasten kaputtgehen können.",
              "4. Gebühren: Wenn Sie die Leihfrist überschreiten, zahlen Sie pro Medium und Tag 20 Cent.",
              "5. Im Haus: Essen ist in den Lesesälen nicht erlaubt. Getränke in verschlossenen Flaschen dürfen Sie mitnehmen. Bitte schalten Sie Ihr Handy auf lautlos. Telefonieren können Sie im Foyer. Taschen und Jacken lassen Sie bitte in den Schließfächern im Erdgeschoss."
            ],
            items: [
              {
                q: "Der Bibliotheksausweis ...",
                opts: [
                  "ist für Jugendliche unter 18 Jahren kostenlos.",
                  "kostet für alle Benutzer 15 Euro im Jahr.",
                  "kann nur online beantragt werden."
                ],
                a: 0
              },
              {
                q: "Man kann die Leihfrist nicht verlängern, wenn ...",
                opts: [
                  "man an der Information fragt.",
                  "eine andere Person das Medium vorbestellt hat.",
                  "man ein Buch länger als eine Woche hat."
                ],
                a: 1
              },
              {
                q: "DVDs ...",
                opts: [
                  "kann man vier Wochen behalten.",
                  "darf man in den Rückgabekasten werfen.",
                  "gibt man am Automaten zurück."
                ],
                a: 2
              },
              {
                q: "In den Lesesälen ...",
                opts: [
                  "darf man eine geschlossene Flasche Wasser dabeihaben.",
                  "darf man ein kleines Brötchen essen.",
                  "darf man leise telefonieren."
                ],
                a: 0
              }
            ]
          }
        ]
      },
      {
        id: "ascolto",
        modulo: "Hören",
        minuti: 40,
        prove: [
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören fünf kurze Texte. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
            brani: [
              [
                {
                  it: "Achtung an Gleis 7: Der Regionalexpress nach Salzburg, planmäßige Abfahrt 14:25 Uhr, hat heute etwa zwanzig Minuten Verspätung."
                },
                {
                  it: "Grund dafür ist eine Störung an einem Signal."
                },
                {
                  it: "Reisende nach Rosenheim können auch den Zug um 14:40 Uhr von Gleis 3 nehmen."
                },
                {
                  it: "Wir bitten um Entschuldigung."
                }
              ],
              [
                {
                  it: "Guten Tag, Herr Brunner, hier ist die Praxis Dr. Lehner, Sie sprechen mit Frau Kaiser."
                },
                {
                  it: "Leider ist Frau Doktor Lehner am Donnerstag krank. Deshalb müssen wir Ihren Termin um 9 Uhr absagen."
                },
                {
                  it: "Wir können Ihnen einen neuen Termin am Montag um 10:30 Uhr anbieten. Bitte bringen Sie dann auch Ihre Versicherungskarte mit."
                },
                {
                  it: "Rufen Sie uns bitte bis Freitagmittag zurück, damit wir den neuen Termin bestätigen können."
                },
                {
                  it: "Vielen Dank und auf Wiederhören."
                }
              ],
              [
                {
                  it: "Und jetzt das Wetter für das Wochenende."
                },
                {
                  it: "Am Samstag bleibt es trocken, und am Nachmittag scheint oft die Sonne bei bis zu 24 Grad."
                },
                {
                  it: "Am Sonntag kommen von Westen Wolken. Der Vormittag ist noch freundlich, aber ab Mittag regnet es kräftig."
                },
                {
                  it: "Nun zum Verkehr: Auf der A8 zwischen München und Salzburg gibt es wegen einer Baustelle drei Kilometer Stau."
                },
                {
                  it: "Nehmen Sie, wenn möglich, die Umleitung über die Landstraße."
                }
              ],
              [
                {
                  it: "Liebe Kundinnen und Kunden, herzlich willkommen in unserem Markt."
                },
                {
                  it: "Nur heute bis 18 Uhr kosten alle Erdbeeren aus der Region nur 1,99 Euro pro Schale."
                },
                {
                  it: "In unserer Bäckerei bekommen Sie ab 17 Uhr alle Brötchen zum halben Preis."
                },
                {
                  it: "Bitte beachten Sie: Kasse 4 ist heute geschlossen. Nutzen Sie gern auch unsere Selbstbedienungskassen am Ausgang."
                },
                {
                  it: "Wir wünschen Ihnen einen schönen Einkauf."
                }
              ],
              [
                {
                  it: "Hallo Lena, hier ist Tobias.",
                  sp: "B"
                },
                {
                  it: "Du, wegen Samstag: Das Konzert im Park fällt leider aus, weil die Sängerin krank ist.",
                  sp: "B"
                },
                {
                  it: "Wollen wir stattdessen ins Kino gehen? Der Film fängt um acht an, und ich kann dich um halb acht mit dem Auto abholen.",
                  sp: "B"
                },
                {
                  it: "Schreib mir einfach eine Nachricht, ob das für dich passt. Tschüss!",
                  sp: "B"
                }
              ]
            ],
            items: [
              {
                q: "Der Regionalexpress nach Salzburg fährt heute von Gleis 3 ab.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 1
              },
              {
                q: "Warum hat der Zug Verspätung?",
                opts: [
                  "wegen eines Unfalls",
                  "wegen eines technischen Problems",
                  "wegen des schlechten Wetters"
                ],
                a: 1
              },
              {
                q: "Die Ärztin kann am Donnerstag nicht arbeiten.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 0
              },
              {
                q: "Was soll Herr Brunner tun?",
                opts: [
                  "die Praxis bis Freitagmittag anrufen",
                  "am Montag ohne Termin in die Praxis kommen",
                  "eine neue Versicherungskarte bestellen"
                ],
                a: 0
              },
              {
                q: "Am Samstag wird es warm und trocken.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 0
              },
              {
                q: "Warum gibt es auf der A8 Stau?",
                opts: [
                  "wegen eines Unfalls",
                  "wegen Bauarbeiten",
                  "wegen des Ferienverkehrs"
                ],
                a: 1
              },
              {
                q: "Kasse 4 ist heute nicht geöffnet.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 0
              },
              {
                q: "Welche Waren werden erst ab 17 Uhr günstiger?",
                opts: [
                  "die Brötchen aus der Bäckerei",
                  "die Erdbeeren aus der Region",
                  "alle Waren an Kasse 4"
                ],
                a: 0
              },
              {
                q: "Tobias und Lena gehen am Samstag ins Konzert.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 1
              },
              {
                q: "Wie soll Lena antworten?",
                opts: [
                  "mit einer Nachricht",
                  "mit einem Anruf",
                  "am Samstag persönlich"
                ],
                a: 0
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören eine Führung durch ein Museum. Zu dem Text lösen Sie fünf Aufgaben. Wählen Sie die richtige Lösung.",
            titolo: "Im Schokoladenmuseum",
            brani: [
              [
                {
                  it: "Herzlich willkommen im Schokoladenmuseum Bergental! Mein Name ist Sabine Moser, und ich begleite Sie heute durch unser Haus."
                },
                {
                  it: "Die Führung dauert ungefähr eine Stunde. Am Ende dürfen Sie in unserer Werkstatt selbst eine kleine Tafel Schokolade machen."
                },
                {
                  it: "In den Ausstellungsräumen dürfen Sie gern fotografieren, aber bitte ohne Blitz. In der Werkstatt ist Fotografieren aus hygienischen Gründen leider nicht erlaubt."
                },
                {
                  it: "Unser Museum gibt es seit 1998. Vorher war in diesem Gebäude eine Schokoladenfabrik, die hier fast hundert Jahre lang produziert hat."
                },
                {
                  it: "Im ersten Raum sehen Sie, woher der Kakao kommt. Die Kakaobohnen wachsen nicht in Europa, sondern in warmen Ländern in der Nähe des Äquators."
                },
                {
                  it: "Die Bohnen werden dort geerntet, getrocknet und dann mit dem Schiff nach Europa gebracht."
                },
                {
                  it: "Erst hier in Europa macht man aus den Bohnen Schokolade. Dafür braucht man außerdem Zucker und oft auch Milch."
                },
                {
                  it: "Im zweiten Raum zeigen wir alte Maschinen aus der Fabrik. Die älteste Maschine ist über hundertzwanzig Jahre alt und funktioniert immer noch."
                },
                {
                  it: "Jeden Tag um 15 Uhr schalten wir sie für unsere Besucher ein."
                },
                {
                  it: "Danach kommen wir in den Raum mit der Geschichte der Verpackung. Viele Besucher finden hier Bilder, die sie aus ihrer Kindheit kennen."
                },
                {
                  it: "Noch ein Hinweis: Unser Café im Erdgeschoss ist heute nur bis 16 Uhr geöffnet, weil am Abend eine private Feier stattfindet."
                },
                {
                  it: "Im Museumsladen bekommen Sie mit Ihrer Eintrittskarte zehn Prozent Rabatt. Heben Sie die Karte also bitte gut auf."
                },
                {
                  it: "Gut, haben Sie noch Fragen? Nein? Dann folgen Sie mir bitte in den ersten Raum."
                }
              ]
            ],
            items: [
              {
                q: "Was dürfen die Besucher am Ende der Führung machen?",
                opts: [
                  "selbst Schokolade herstellen",
                  "die alten Maschinen benutzen",
                  "im Café kostenlos Kakao trinken"
                ],
                a: 0
              },
              {
                q: "Was gilt für das Fotografieren?",
                opts: [
                  "Im ganzen Museum ist es verboten.",
                  "In der Werkstatt ist es nicht erlaubt.",
                  "Mit Blitz ist es überall erlaubt."
                ],
                a: 1
              },
              {
                q: "Was war früher in dem Gebäude?",
                opts: [
                  "ein Museum für Maschinen",
                  "eine Schokoladenfabrik",
                  "ein Café"
                ],
                a: 1
              },
              {
                q: "Was passiert jeden Tag um 15 Uhr?",
                opts: [
                  "Eine alte Maschine läuft.",
                  "Das Café schließt.",
                  "Die Führung beginnt."
                ],
                a: 0
              },
              {
                q: "Warum sollen die Besucher ihre Eintrittskarte aufheben?",
                opts: [
                  "Sie bezahlen damit im Laden weniger.",
                  "Sie brauchen sie für die Werkstatt.",
                  "Sie brauchen sie am Abend für die Feier."
                ],
                a: 0
              }
            ]
          },
          {
            t: "vf",
            puntiPerItem: 1,
            consegna: "Sie hören ein Gespräch zwischen zwei Kollegen. Sind die Aussagen richtig oder falsch?",
            titolo: "Eine Feier im Büro",
            brani: [
              [
                {
                  it: "Markus, hast du kurz Zeit? Es geht um die Abschiedsfeier für Frau Hartmann."
                },
                {
                  it: "Klar, Julia. Sie geht ja Ende des Monats in Rente, oder?",
                  sp: "B"
                },
                {
                  it: "Genau, ihr letzter Arbeitstag ist der 28. Ich dachte, wir feiern am Donnerstag davor, also am 26."
                },
                {
                  it: "Donnerstag ist schlecht, da haben wir nachmittags die große Besprechung mit den Kunden aus Graz. Wie wäre es mit Freitag, dem 27.?",
                  sp: "B"
                },
                {
                  it: "Freitag geht auch. Dann machen wir es um halb vier, da sind die meisten noch im Büro."
                },
                {
                  it: "Gut. Und wo? Im Besprechungsraum ist es ein bisschen eng, wir sind ja fast dreißig Leute.",
                  sp: "B"
                },
                {
                  it: "Ich habe schon mit dem Chef gesprochen. Wir dürfen die Kantine benutzen, die ist am Nachmittag sowieso leer."
                },
                {
                  it: "Super. Sollen wir das Essen bestellen, oder bringt jeder etwas mit?",
                  sp: "B"
                },
                {
                  it: "Ich finde, jeder bringt etwas mit. Das ist persönlicher, und Frau Hartmann mag selbst gemachte Sachen."
                },
                {
                  it: "Einverstanden. Ich mache eine Liste, damit wir nicht zehn Nudelsalate haben.",
                  sp: "B"
                },
                {
                  it: "Gute Idee. Getränke kaufen wir aber zusammen, das ist einfacher. Kannst du am Freitagmittag mit dem Auto fahren?"
                },
                {
                  it: "Ja, das geht. Ich habe am Freitag sowieso früher Mittagspause.",
                  sp: "B"
                },
                {
                  it: "Sehr gut. Und das Geschenk? Ich habe an einen Gutschein für eine Ballonfahrt gedacht. Sie hat einmal erzählt, dass sie das schon immer machen wollte."
                },
                {
                  it: "Tolle Idee, aber das ist bestimmt teuer. Reicht es, wenn jeder zehn Euro gibt?",
                  sp: "B"
                },
                {
                  it: "Ich habe nachgeschaut, die Fahrt kostet 250 Euro. Mit dreißig Leuten reicht das also gut."
                },
                {
                  it: "Dann sammle ich das Geld ein. Ich sehe sowieso jeden Tag fast alle Kollegen.",
                  sp: "B"
                },
                {
                  it: "Danke. Und ich kaufe eine Karte, die alle unterschreiben. Die Einladung schicke ich heute noch per E-Mail."
                },
                {
                  it: "Aber nicht an Frau Hartmann! Die Feier soll doch eine Überraschung sein.",
                  sp: "B"
                },
                {
                  it: "Keine Sorge, sie bekommt die Mail natürlich nicht."
                }
              ]
            ],
            items: [
              {
                q: "Frau Hartmann hört Ende des Monats auf zu arbeiten.",
                a: 0
              },
              {
                q: "Die Feier findet am Donnerstag statt.",
                a: 1
              },
              {
                q: "Die Kolleginnen und Kollegen feiern im Besprechungsraum.",
                a: 1
              },
              {
                q: "Das Essen wird in einem Restaurant bestellt.",
                a: 1
              },
              {
                q: "Frau Hartmann wollte schon lange einmal mit einem Ballon fahren.",
                a: 0
              },
              {
                q: "Julia sammelt das Geld für das Geschenk ein.",
                a: 1
              },
              {
                q: "Frau Hartmann soll vorher nichts von der Feier erfahren.",
                a: 0
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören eine Diskussion im Radio. Wer sagt was? Wählen Sie bei jeder Aussage die richtige Person.",
            titolo: "Homeoffice: Fluch oder Segen?",
            brani: [
              [
                {
                  it: "Moderatorin: Guten Abend und willkommen zu unserer Sendung. Heute geht es um die Frage: Homeoffice, Fluch oder Segen?"
                },
                {
                  it: "Moderatorin: Bei mir im Studio sind Lukas Berger, Programmierer, und Petra Wagner. Sie leitet die Personalabteilung einer Versicherung."
                },
                {
                  it: "Moderatorin: Herr Berger, Sie arbeiten fast nur noch zu Hause, oder?"
                },
                {
                  it: "Lukas Berger: Ja, seit drei Jahren bin ich nur noch einmal pro Woche im Büro. Früher war ich jeden Tag fast zwei Stunden unterwegs, diese Zeit habe ich jetzt für meine Familie.",
                  sp: "B"
                },
                {
                  it: "Moderatorin: Frau Wagner, Sie sehen das etwas kritischer."
                },
                {
                  it: "Petra Wagner: Ja. Ich merke, dass neue Mitarbeiter es im Homeoffice schwer haben. Sie lernen die Kollegen kaum kennen und trauen sich nicht, Fragen zu stellen."
                },
                {
                  it: "Lukas Berger: Bei uns gibt es dafür eine einfache Lösung. Neue Kollegen kommen in den ersten drei Monaten jeden Tag ins Büro.",
                  sp: "B"
                },
                {
                  it: "Moderatorin: Ich selbst arbeite übrigens nie zu Hause. Hier im Studio habe ich die ganze Technik, die ich für meine Sendung brauche."
                },
                {
                  it: "Petra Wagner: Ein anderes Problem ist, dass viele Leute zu Hause nicht aufhören können. Der Laptop steht im Wohnzimmer, und abends schreibt man noch schnell eine E-Mail."
                },
                {
                  it: "Lukas Berger: Am Anfang ging es mir genauso. Inzwischen mache ich um sechs Uhr den Computer aus und gehe in ein anderes Zimmer.",
                  sp: "B"
                },
                {
                  it: "Moderatorin: Eine Hörerin hat uns geschrieben, dass sie sich im Homeoffice oft allein fühlt. Kennen Sie das?"
                },
                {
                  it: "Lukas Berger: Manchmal schon. Deshalb arbeite ich einmal pro Woche in einem Café, da sind wenigstens andere Menschen um mich herum.",
                  sp: "B"
                },
                {
                  it: "Petra Wagner: Genau das meine ich. Für viele Menschen ist die Arbeit auch ein Ort, an dem sie Freunde finden."
                },
                {
                  it: "Moderatorin: Und wie sieht es mit den Kosten aus? Spart eine Firma Geld, wenn alle zu Hause arbeiten?"
                },
                {
                  it: "Petra Wagner: Wir brauchen weniger Büros, das stimmt. Aber wir haben auch viel Geld für Laptops und gute Stühle für zu Hause ausgegeben."
                },
                {
                  it: "Lukas Berger: Und ich bezahle jetzt mehr für Strom und Heizung. Darüber spricht kaum jemand.",
                  sp: "B"
                },
                {
                  it: "Moderatorin: Zum Schluss: Wie sieht für Sie die Zukunft aus?"
                },
                {
                  it: "Petra Wagner: Ich glaube, die meisten Firmen werden eine Mischung anbieten: zwei oder drei Tage zu Hause, der Rest im Büro."
                },
                {
                  it: "Lukas Berger: Da bin ich ausnahmsweise Ihrer Meinung. Ganz ohne Büro geht es auch für mich nicht.",
                  sp: "B"
                },
                {
                  it: "Moderatorin: Vielen Dank an Sie beide für das interessante Gespräch."
                }
              ]
            ],
            items: [
              {
                q: "Ich habe jetzt mehr Zeit, weil ich seltener zur Arbeit fahre.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 1
              },
              {
                q: "Neue Mitarbeiter lernen im Homeoffice ihre Kollegen nur schwer kennen.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 2
              },
              {
                q: "Für meine Arbeit brauche ich Geräte, die ich nur am Arbeitsplatz habe.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 0
              },
              {
                q: "Ich beende meinen Arbeitstag jetzt zu einer festen Uhrzeit.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 1
              },
              {
                q: "Am Arbeitsplatz entstehen oft Freundschaften.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 2
              },
              {
                q: "Eine Person hat der Sendung von ihrer Einsamkeit im Homeoffice berichtet.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 0
              },
              {
                q: "Die Firma hat für die Ausstattung der Arbeitsplätze zu Hause bezahlt.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 2
              },
              {
                q: "Zu Hause habe ich jetzt höhere Kosten für Energie.",
                opts: [
                  "Moderatorin",
                  "Lukas Berger",
                  "Petra Wagner"
                ],
                a: 1
              }
            ]
          }
        ]
      },
      {
        id: "scritta",
        modulo: "Schreiben",
        minuti: 60,
        prove: [
          {
            t: "schreiben",
            consegna: "Sie haben letzte Woche an einem Kochkurs teilgenommen. Ihr Freund / Ihre Freundin konnte nicht mitkommen. Schreiben Sie ihm / ihr eine E-Mail. Gehen Sie auf alle drei Punkte ein und denken Sie an Anrede, Einleitung und Gruß.",
            punti: [
              "Beschreiben Sie: Was haben Sie gekocht, und wie war der Kurs?",
              "Was hat Ihnen besonders gut gefallen und warum?",
              "Machen Sie einen Vorschlag für ein gemeinsames Essen."
            ],
            parole: {
              min: 80,
              max: 100
            }
          },
          {
            t: "schreiben",
            consegna: "In einem Online-Forum für Eltern wird über folgende Frage diskutiert. Schreiben Sie Ihre Meinung zu diesem Thema und begründen Sie sie.",
            punti: [
              "Brauchen Kinder ein Smartphone?"
            ],
            parole: {
              min: 80,
              max: 100
            }
          },
          {
            t: "schreiben",
            consegna: "Sie besuchen einen Deutschkurs bei Frau Albrecht. Sie können zur nächsten Kursstunde nicht kommen. Schreiben Sie Ihrer Kursleiterin eine höfliche E-Mail. Denken Sie an Anrede und Gruß.",
            punti: [
              "Entschuldigen Sie sich und nennen Sie den Grund.",
              "Fragen Sie nach den Hausaufgaben.",
              "Schlagen Sie vor, wie Sie den Stoff nachholen können."
            ],
            parole: {
              min: 40,
              max: 60
            }
          }
        ]
      },
      {
        id: "orale",
        modulo: "Sprechen",
        minuti: 15,
        prove: [
          {
            t: "sprechen",
            consegna: "Eine Kurskollegin von Ihnen hat bald Geburtstag. Sie möchten zusammen mit Ihrem Gesprächspartner / Ihrer Gesprächspartnerin eine Überraschungsparty für sie organisieren. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge Ihres Partners / Ihrer Partnerin und planen Sie gemeinsam.",
            punti: [
              "Wann und wo soll die Party stattfinden?",
              "Wer wird eingeladen?",
              "Was gibt es zu essen und zu trinken?",
              "Welches Geschenk kaufen Sie?",
              "Wie sorgen Sie dafür, dass die Party eine Überraschung bleibt?"
            ]
          },
          {
            t: "sprechen",
            consegna: "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Ihr Thema ist: Online einkaufen. Gehen Sie auf alle fünf Punkte ein.",
            punti: [
              "Stellen Sie das Thema vor und erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
              "Berichten Sie von Ihren eigenen Erfahrungen mit dem Online-Einkauf.",
              "Beschreiben Sie, wie die Situation in Ihrem Heimatland ist.",
              "Nennen Sie Vor- und Nachteile und sagen Sie Ihre Meinung dazu.",
              "Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern."
            ]
          },
          {
            t: "sprechen",
            consegna: "Ihr Partner / Ihre Partnerin hat ein Thema präsentiert. Reagieren Sie auf die Präsentation.",
            punti: [
              "Geben Sie eine Rückmeldung: Was war für Sie interessant oder neu?",
              "Stellen Sie Ihrem Partner / Ihrer Partnerin eine Frage zur Präsentation.",
              "Beantworten Sie auch die Fragen Ihres Partners / Ihrer Partnerin zu Ihrer eigenen Präsentation."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sim-2",
    titoloIt: "Modelltest 2",
    official: false,
    sezioni: [
      {
        id: "lettura",
        modulo: "Lesen",
        minuti: 65,
        prove: [
          {
            t: "vf",
            puntiPerItem: 1,
            consegna: "Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch?",
            titolo: "Lenas Blog: Neue Stadt, neues Leben",
            testo: [
              "Hallo zusammen! Seit drei Wochen wohne ich jetzt in Freiburg, und heute habe ich endlich Zeit, euch zu erzählen, wie es mir geht. Wie ihr wisst, habe ich im Sommer meinen Schulabschluss gemacht und danach lange eine Ausbildungsstelle gesucht. In meiner Heimatstadt gab es leider nichts Passendes. Im Juli kam dann die Zusage von einer Tischlerei hier in Freiburg, und ich musste mich sehr schnell entscheiden.",
              "Der Umzug war anstrengend. Meine Eltern haben mir geholfen, aber ihr Auto war so klein, dass wir zweimal fahren mussten. Ein Zimmer zu finden, war noch schwieriger. Am Ende hatte ich Glück: Ich wohne jetzt in einer WG mit zwei Studentinnen, nur zehn Minuten mit dem Fahrrad von der Werkstatt entfernt. Die Miete ist nicht billig, aber dafür ist mein Zimmer hell und groß.",
              "In der Werkstatt fängt die Arbeit schon um sieben Uhr an. Am Anfang war das hart für mich, denn ich bin eigentlich kein Morgenmensch. Inzwischen habe ich mich daran gewöhnt. Meine Kollegen sind sehr nett und erklären mir alles geduldig. Letzte Woche durfte ich zum ersten Mal allein ein kleines Regal bauen. Zweimal pro Woche gehe ich außerdem in die Berufsschule. Dort habe ich schon zwei Leute kennengelernt, die auch neu in der Stadt sind.",
              "Was mir am meisten fehlt? Ehrlich gesagt meine Freunde und das Meer. Freiburg ist schön, aber am Wochenende fühle ich mich manchmal ein bisschen allein. Deshalb habe ich mich bei einem Volleyballverein angemeldet. Das erste Training ist am Donnerstag, und ich bin schon gespannt. Nächsten Monat kommt meine beste Freundin Merle zu Besuch. Dann zeige ich ihr die Altstadt und den Schwarzwald. Ich melde mich bald wieder!"
            ],
            items: [
              {
                q: "Lena hat in ihrer Heimatstadt keine passende Ausbildungsstelle gefunden.",
                a: 0
              },
              {
                q: "Für den Umzug mussten Lena und ihre Eltern zweimal fahren.",
                a: 0
              },
              {
                q: "Lena wohnt allein in einer kleinen Wohnung.",
                a: 1
              },
              {
                q: "Es fiel Lena von Anfang an leicht, um sieben Uhr mit der Arbeit anzufangen.",
                a: 1
              },
              {
                q: "In der Berufsschule hat Lena schon neue Leute kennengelernt.",
                a: 0
              },
              {
                q: "Lena hat schon einmal beim Volleyballverein trainiert.",
                a: 1
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Texte und die Aufgaben 7 bis 12. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
            testo: [
              "Text A: Ein Dorf rettet seine Bäckerei",
              "Als die Bäckerei Hollmann in Altenbrück im vergangenen Frühjahr schließen sollte, wollten die rund 900 Einwohnerinnen und Einwohner das nicht einfach akzeptieren. Bäckermeister Peter Hollmann ist 67 Jahre alt und hatte niemanden gefunden, der den Betrieb übernehmen wollte. Ohne die Bäckerei hätte es im Ort kein einziges Geschäft mehr gegeben. Der nächste Supermarkt liegt zwölf Kilometer entfernt.",
              "Auf einer Versammlung im Gemeindehaus entstand die Idee, eine Genossenschaft zu gründen. Inzwischen haben 240 Menschen Anteile für je 100 Euro gekauft. Mit dem Geld wurde ein neuer Ofen bezahlt, und eine junge Bäckerin aus der Nachbarstadt wurde fest angestellt. Hollmann selbst hilft noch zweimal pro Woche in der Backstube und zeigt seiner Nachfolgerin seine alten Rezepte. Die Bäckerei ist jetzt auch ein Treffpunkt: Seit dem Sommer gibt es drei Tische, an denen man Kaffee trinken kann. „Früher hat man sich nur auf der Straße gegrüßt, jetzt sitzt man zusammen“, sagt eine Kundin.",
              "Text B: Mittagspause am Schreibtisch",
              "Wie verbringen Berufstätige ihre Mittagspause? Das wollte eine Krankenkasse wissen und hat dazu 2000 Angestellte befragt. Das Ergebnis: Fast die Hälfte isst mittags am Arbeitsplatz und arbeitet dabei weiter. Nur jeder Fünfte geht regelmäßig in eine Kantine oder ein Restaurant. Als Hauptgrund nennen die Befragten zu viel Arbeit. Viele sagen außerdem, dass sie die Pause kurz halten, weil sie dann früher nach Hause gehen können.",
              "Interessant ist der Unterschied zwischen den Generationen: Beschäftigte unter 30 machen häufiger eine richtige Pause als ältere Kolleginnen und Kollegen. Sie gehen zum Beispiel spazieren oder treffen sich mit Freunden. Fachleute raten, den Schreibtisch mittags zu verlassen. Schon zwanzig Minuten an der frischen Luft helfen, am Nachmittag konzentrierter zu arbeiten. Wer im Homeoffice arbeitet, sollte sich die Pause sogar in den Kalender eintragen, denn zu Hause vergisst man sie besonders leicht."
            ],
            items: [
              {
                q: "Text A: Die Bäckerei sollte schließen, weil ...",
                opts: [
                  "der Bäcker keinen Nachfolger gefunden hatte.",
                  "zu wenige Leute dort eingekauft haben.",
                  "es im Ort einen billigeren Supermarkt gibt."
                ],
                a: 0
              },
              {
                q: "Text A: Mit dem Geld der Genossenschaft ...",
                opts: [
                  "wurde ein Supermarkt im Dorf eröffnet.",
                  "wurde ein neuer Ofen gekauft.",
                  "bekommen alle Mitglieder kostenlos Brot."
                ],
                a: 1
              },
              {
                q: "Text A: Peter Hollmann ...",
                opts: [
                  "ist in die Nachbarstadt gezogen.",
                  "arbeitet weiter jeden Tag in der Backstube.",
                  "gibt der neuen Bäckerin seine Rezepte weiter."
                ],
                a: 2
              },
              {
                q: "Text B: Laut der Umfrage ...",
                opts: [
                  "geht die Mehrheit mittags in die Kantine.",
                  "isst fast die Hälfte der Befragten am Arbeitsplatz.",
                  "machen ältere Angestellte längere Pausen als jüngere."
                ],
                a: 1
              },
              {
                q: "Text B: Viele Befragte machen nur eine kurze Pause, weil sie ...",
                opts: [
                  "früher Feierabend machen wollen.",
                  "das Essen in der Kantine zu teuer finden.",
                  "keine Kolleginnen und Kollegen treffen möchten."
                ],
                a: 0
              },
              {
                q: "Text B: Die Fachleute empfehlen, ...",
                opts: [
                  "im Homeoffice ohne Pause durchzuarbeiten.",
                  "mittags eine Weile nach draußen zu gehen.",
                  "die Pause zusammen am Schreibtisch zu verbringen."
                ],
                a: 1
              }
            ]
          },
          {
            t: "abbina",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. Wählen Sie in diesem Fall 0.",
            annunci: [
              {
                titolo: "Zimmer frei in Dreier-WG",
                testo: "Ab 1. April: 16 m² großes Zimmer in einer ruhigen WG, fünf Minuten zu Fuß bis zur Universität. 380 Euro warm, Internet inklusive. Wir sind zwei Studentinnen und suchen eine Mitbewohnerin oder einen Mitbewohner. Nur Nichtraucher. Tel. 0761 448213"
              },
              {
                titolo: "Kinderflohmarkt im Gemeindezentrum",
                testo: "Samstag, 9 bis 13 Uhr: Kinderkleidung von Größe 50 bis 152, Spielzeug, Bücher, Kinderwagen und Autositze. Für Verkäuferinnen und Verkäufer: Standgebühr 5 Euro, Anmeldung bis Mittwoch."
              },
              {
                titolo: "Hofflohmarkt in der Weststadt",
                testo: "Am Sonntag öffnen über 40 Höfe ihre Tore! Stöbern Sie zwischen gebrauchten Möbeln, Lampen, Schallplatten und Geschirr. 10 bis 16 Uhr, Eintritt frei. Einen Plan mit allen Adressen gibt es online."
              },
              {
                titolo: "Tandem Spanisch-Deutsch",
                testo: "Ich heiße Carmen, bin 28 und komme aus Valencia. Ich suche jemanden, der mit mir Deutsch spricht. Dafür helfe ich gern beim Spanischlernen. Am liebsten treffen wir uns abends in einem Café. carmen.tandem@mailbox.de"
              },
              {
                titolo: "Sprachcafé International",
                testo: "Jeden Dienstag ab 19 Uhr in der Stadtbibliothek: Üben Sie Englisch, Französisch, Italienisch oder Türkisch mit Muttersprachlerinnen und Muttersprachlern. Kostenlos und ohne Anmeldung. Für Getränke ist gesorgt."
              },
              {
                titolo: "Repair-Café",
                testo: "Wegwerfen? Nein danke! Jeden ersten Samstag im Monat reparieren Ehrenamtliche kaputte Elektrogeräte wie Lampen, Toaster oder Kaffeemaschinen. Die Reparatur kostet nichts, über eine kleine Spende freuen wir uns. Ort: Nachbarschaftshaus, Gartenstraße 12."
              },
              {
                titolo: "Handy-Doktor",
                testo: "Display kaputt? Akku leer? Wir reparieren Smartphones und Tablets aller Art. Neues Display in nur einer Stunde. Montag bis Samstag, 10 bis 19 Uhr, Bahnhofstraße 3."
              },
              {
                titolo: "Fahrradwerkstatt Speiche",
                testo: "Reparaturen und Inspektion für alle Fahrräder, schnell und zuverlässig. Während der Reparatur können Sie bei uns günstig ein Fahrrad leihen. Dienstag bis Samstag geöffnet."
              },
              {
                titolo: "Tagesausflug an den Bodensee",
                testo: "Samstag, 14. Juni: Busfahrt nach Konstanz, danach Schifffahrt nach Lindau mit Zeit für einen Stadtbummel. 49 Euro pro Person, Mittagessen inklusive. Anmeldung im Reisebüro am Marktplatz."
              },
              {
                titolo: "Familienwanderung im Wald",
                testo: "Sonntag, 10 Uhr: leichte Wanderung von 8 Kilometern, geeignet für Kinder ab 6 Jahren. Unterwegs erklärt eine Försterin Pflanzen und Tiere. Treffpunkt: Bahnhof Kirchzarten. Teilnahme kostenlos, bitte anmelden."
              }
            ],
            items: [
              {
                q: "Ihre Kaffeemaschine funktioniert nicht mehr. Sie möchten sie reparieren lassen, aber nicht viel Geld bezahlen.",
                a: 5
              },
              {
                q: "Ein Student, der nicht raucht, sucht für das Sommersemester ein Zimmer in der Nähe der Universität.",
                a: 0
              },
              {
                q: "Eine junge Mutter möchte gebrauchte Kleidung und Spielzeug für ihr Baby kaufen.",
                a: 1
              },
              {
                q: "Herr Yilmaz möchte sein Englisch verbessern. Er hat wenig Geld und nur am Dienstagabend Zeit.",
                a: 4
              },
              {
                q: "Ein Ehepaar möchte am Wochenende einen Ausflug machen und dabei auch mit dem Schiff fahren.",
                a: 8
              },
              {
                q: "Ein Kollege von Ihnen möchte Japanisch lernen und sucht jemanden zum Üben.",
                a: 10
              },
              {
                q: "Sie möchten am Sonntag mit Ihren Kindern (7 und 9 Jahre) in der Natur unterwegs sein.",
                a: 9
              }
            ]
          },
          {
            t: "jn",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot von Autos in der Innenstadt?",
            titolo: "In einer Zeitung lesen Sie Kommentare zu einem Artikel über Verkehr in den Städten. Sollen Autos aus den Innenstädten verschwinden?",
            testo: [
              "Martina: Ich wohne direkt in der Innenstadt und kann nachts wegen des Verkehrs oft nicht schlafen. Seit unsere Straße am Wochenende gesperrt ist, spielen dort Kinder, und die Leute sitzen draußen vor den Cafés. So sollte es jeden Tag sein. Wer in die Stadt will, kann doch Bus und Bahn nehmen.",
              "Hubert: Ich bin nicht mehr gut zu Fuß und brauche mein Auto, um zu meinem Arzt in der Altstadt zu kommen. Mit dem Bus muss ich zweimal umsteigen, und das schaffe ich nicht. Wer Autos ganz verbieten will, denkt nur an junge und gesunde Menschen. Für Leute wie mich wäre das eine Katastrophe.",
              "Selin: In Basel ist ein großer Teil der Innenstadt schon lange autofrei, und ich finde das wunderbar. Man kann in Ruhe einkaufen, es ist leiser, und die Luft ist viel besser. Ich erledige alles mit dem Fahrrad. Ich verstehe nicht, warum andere Städte so lange warten. Weg mit den Autos!",
              "Ana: Als Mutter von zwei kleinen Kindern habe ich jeden Morgen Angst, wenn wir zur Schule gehen. Die Autos fahren zu schnell, und auf den Gehwegen wird geparkt. Eine Innenstadt ohne Autos wäre viel sicherer. Lieferwagen und Krankenwagen müssen natürlich weiter fahren dürfen, aber private Autos haben dort nichts zu suchen.",
              "Frank: Ich habe ein Schuhgeschäft in der Fußgängerzone. Schon jetzt kommen weniger Kunden als früher, weil viele lieber im Internet bestellen. Wenn auch noch die letzten Parkplätze in der Nähe wegfallen, fahren die Leute ins Einkaufszentrum am Stadtrand. Dann kann ich meinen Laden zumachen.",
              "Jonas: Ich arbeite nachts in einem Hotel im Zentrum. Wenn ich um drei Uhr morgens fertig bin, fährt kein Bus und keine Straßenbahn mehr. Ohne Auto komme ich nicht nach Hause. Solange es nachts keine besseren Verbindungen gibt, halte ich ein Autoverbot in der Innenstadt für völlig falsch.",
              "Renate: Vor zehn Jahren war ich gegen die Pläne unserer Stadt, das Zentrum für Autos zu sperren. Ich dachte, die Geschäfte würden alle schließen. Heute weiß ich, dass ich mich geirrt habe: Die Altstadt ist voller Menschen, und es gibt sogar neue Cafés und Läden. Ich möchte die Autos dort nie wieder haben."
            ],
            items: [
              {
                q: "Ist Martina für ein Autoverbot in der Innenstadt?",
                a: 0
              },
              {
                q: "Ist Hubert für ein Autoverbot in der Innenstadt?",
                a: 1
              },
              {
                q: "Ist Selin für ein Autoverbot in der Innenstadt?",
                a: 0
              },
              {
                q: "Ist Ana für ein Autoverbot in der Innenstadt?",
                a: 0
              },
              {
                q: "Ist Frank für ein Autoverbot in der Innenstadt?",
                a: 1
              },
              {
                q: "Ist Jonas für ein Autoverbot in der Innenstadt?",
                a: 1
              },
              {
                q: "Ist Renate für ein Autoverbot in der Innenstadt?",
                a: 0
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie möchten Mitglied in einem Fitnessstudio werden und lesen die Bedingungen.",
            titolo: "Fitnessstudio Kraftwerk Mitte: Bedingungen für die Mitgliedschaft",
            testo: [
              "1. Laufzeit: Die Mitgliedschaft beginnt am Tag der Anmeldung und läuft mindestens zwölf Monate. Danach verlängert sie sich jeweils um einen Monat, wenn sie nicht gekündigt wird.",
              "2. Beiträge: Der Monatsbeitrag beträgt 34 Euro und wird am Anfang jedes Monats vom Konto abgebucht. Schülerinnen und Schüler, Studierende und Auszubildende zahlen mit einem gültigen Ausweis 24 Euro. Bei der Anmeldung zahlen alle Mitglieder einmal 20 Euro für die Mitgliedskarte.",
              "3. Kündigung: Nach den ersten zwölf Monaten kann die Mitgliedschaft mit einer Frist von vier Wochen gekündigt werden. Die Kündigung muss schriftlich erfolgen, per Brief oder per E-Mail. Eine Kündigung am Telefon ist nicht möglich.",
              "4. Pause: Bei Krankheit, Schwangerschaft oder einem Aufenthalt im Ausland von mehr als vier Wochen kann die Mitgliedschaft ruhen. In dieser Zeit zahlen Sie keinen Beitrag, die Mindestlaufzeit verlängert sich aber um diese Zeit. Bitte bringen Sie einen Nachweis mit, zum Beispiel ein ärztliches Attest.",
              "5. Kurse und Sauna: Alle Kurse sind im Monatsbeitrag enthalten. Für die Kurse müssen Sie sich vorher in der App oder an der Theke anmelden. Die Sauna können Sie für 8 Euro im Monat zusätzlich buchen.",
              "6. Öffnungszeiten: Montag bis Freitag von 6 bis 23 Uhr, am Wochenende und an Feiertagen von 8 bis 20 Uhr."
            ],
            items: [
              {
                q: "Eine Studentin mit gültigem Ausweis zahlt jeden Monat ...",
                opts: [
                  "20 Euro.",
                  "24 Euro.",
                  "34 Euro."
                ],
                a: 1
              },
              {
                q: "Wer seine Mitgliedschaft kündigen möchte, ...",
                opts: [
                  "kann einfach im Studio anrufen.",
                  "kann das schon im ersten Monat ohne Frist tun.",
                  "muss einen Brief oder eine E-Mail schicken."
                ],
                a: 2
              },
              {
                q: "Ein Mitglied arbeitet zwei Monate im Ausland. In dieser Zeit ...",
                opts: [
                  "kann es die Mitgliedschaft ohne Beitrag ruhen lassen.",
                  "muss es trotzdem den vollen Beitrag zahlen.",
                  "endet die Mitgliedschaft automatisch."
                ],
                a: 0
              },
              {
                q: "Die Sauna ...",
                opts: [
                  "ist im Monatsbeitrag enthalten.",
                  "kostet extra.",
                  "ist nur am Wochenende geöffnet."
                ],
                a: 1
              }
            ]
          }
        ]
      },
      {
        id: "ascolto",
        modulo: "Hören",
        minuti: 40,
        prove: [
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören fünf kurze Texte. Sie können jeden Text höchstens zweimal hören. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie die richtige Lösung.",
            brani: [
              [
                {
                  it: "Eine Durchsage für alle Passagiere des Fluges 418 nach Wien.",
                  sp: "A"
                },
                {
                  it: "Wegen eines technischen Problems verschiebt sich der Abflug um etwa eine Stunde. Die neue Abflugzeit ist 14:40 Uhr.",
                  sp: "A"
                },
                {
                  it: "Bitte beachten Sie: Ihr Flug startet nicht mehr von Gate B12, sondern von Gate C7.",
                  sp: "A"
                },
                {
                  it: "Fluggäste mit kleinen Kindern dürfen zuerst einsteigen.",
                  sp: "A"
                },
                {
                  it: "Als Entschuldigung bekommen alle Passagiere an der Information einen Gutschein für ein Getränk.",
                  sp: "A"
                }
              ],
              [
                {
                  it: "Guten Tag, Herr Hoffmann, hier ist Bauer von der Autowerkstatt in der Lindenstraße.",
                  sp: "B"
                },
                {
                  it: "Wir haben Ihr Auto heute Vormittag kontrolliert. Die Bremsen sind in Ordnung, aber die Batterie ist alt und muss gewechselt werden.",
                  sp: "B"
                },
                {
                  it: "Das kostet ungefähr 150 Euro.",
                  sp: "B"
                },
                {
                  it: "Wenn Sie einverstanden sind, rufen Sie mich bitte bis 16 Uhr zurück. Dann ist das Auto morgen früh ab acht Uhr fertig.",
                  sp: "B"
                },
                {
                  it: "Sie können es aber auch erst am Samstag abholen. Da haben wir bis zwölf Uhr geöffnet.",
                  sp: "B"
                }
              ],
              [
                {
                  it: "Und hier sind unsere Veranstaltungstipps fürs Wochenende.",
                  sp: "A"
                },
                {
                  it: "Am Samstag gibt es im Stadtpark wieder das große Kinderfest mit Theater, Musik und Spielen. Der Eintritt ist frei.",
                  sp: "A"
                },
                {
                  it: "Wer lieber Kultur mag: Das Stadtmuseum zeigt ab Sonntag eine neue Ausstellung über die Geschichte der Eisenbahn.",
                  sp: "A"
                },
                {
                  it: "Die erste Führung beginnt am Sonntag um elf Uhr.",
                  sp: "A"
                },
                {
                  it: "Und für alle Sportlichen: Am Sonntagnachmittag startet am Rathaus der Stadtlauf über fünf Kilometer.",
                  sp: "A"
                },
                {
                  it: "Anmelden können Sie sich noch bis Freitagabend im Internet.",
                  sp: "A"
                }
              ],
              [
                {
                  it: "Liebe Kundinnen und Kunden, herzlich willkommen in unserem Kaufhaus.",
                  sp: "A"
                },
                {
                  it: "Nur heute bekommen Sie in der Sportabteilung im dritten Stock zwanzig Prozent auf alle Jacken und Schuhe.",
                  sp: "A"
                },
                {
                  it: "In der Lebensmittelabteilung im Erdgeschoss können Sie bis 15 Uhr verschiedene Käsesorten aus der Schweiz probieren.",
                  sp: "A"
                },
                {
                  it: "Außerdem möchten wir Sie informieren: Unser Restaurant im fünften Stock bleibt heute wegen Renovierung geschlossen.",
                  sp: "A"
                },
                {
                  it: "Kaffee und Kuchen bekommen Sie aber in der Cafeteria im Erdgeschoss.",
                  sp: "A"
                }
              ],
              [
                {
                  it: "Hallo, Frau Schulz, hier spricht Werner Kling, Ihr Vermieter. Es geht um die Heizung in Ihrer Wohnung.",
                  sp: "B"
                },
                {
                  it: "Der Techniker kommt am Mittwoch zwischen neun und zwölf Uhr.",
                  sp: "B"
                },
                {
                  it: "Wenn Sie an diesem Tag arbeiten müssen, ist das kein Problem. Geben Sie den Schlüssel bitte am Dienstagabend Ihrer Nachbarin, Frau Ott, im ersten Stock.",
                  sp: "B"
                },
                {
                  it: "Ich habe schon mit ihr gesprochen.",
                  sp: "B"
                },
                {
                  it: "Und noch etwas: Nächste Woche wird das Treppenhaus gestrichen. Bitte stellen Sie deshalb keine Schuhe vor die Tür.",
                  sp: "B"
                }
              ]
            ],
            items: [
              {
                q: "Der Flug nach Wien startet später.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 0
              },
              {
                q: "Wo startet der Flug jetzt?",
                opts: [
                  "an Gate B12",
                  "an Gate C7",
                  "an Gate C12"
                ],
                a: 1
              },
              {
                q: "Mit den Bremsen gibt es ein Problem.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 1
              },
              {
                q: "Was soll Herr Hoffmann tun, wenn er einverstanden ist?",
                opts: [
                  "bis 16 Uhr in der Werkstatt anrufen",
                  "morgen um acht Uhr die Batterie bringen",
                  "am Samstag vor zwölf Uhr bezahlen"
                ],
                a: 0
              },
              {
                q: "Für das Kinderfest muss man keinen Eintritt bezahlen.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 0
              },
              {
                q: "Was kann man am Sonntag machen?",
                opts: [
                  "im Stadtpark Theater sehen",
                  "an einer Führung im Museum teilnehmen",
                  "sich am Rathaus für den Stadtlauf anmelden"
                ],
                a: 1
              },
              {
                q: "Die Sportabteilung ist im Erdgeschoss.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 1
              },
              {
                q: "Was ist heute im Kaufhaus nicht möglich?",
                opts: [
                  "Käse probieren",
                  "im Restaurant essen",
                  "Kuchen essen"
                ],
                a: 1
              },
              {
                q: "Der Techniker kommt am Dienstag.",
                opts: [
                  "richtig",
                  "falsch"
                ],
                a: 1
              },
              {
                q: "Was soll Frau Schulz tun, wenn sie am Mittwoch arbeiten muss?",
                opts: [
                  "den Vermieter zurückrufen",
                  "der Nachbarin den Schlüssel geben",
                  "einen neuen Termin vereinbaren"
                ],
                a: 1
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören einen Text. Sie können den Text höchstens zweimal hören. Dazu lösen Sie fünf Aufgaben. Wählen Sie die richtige Lösung.",
            titolo: "Einführungstag in der Sprachschule",
            brani: [
              [
                {
                  it: "Guten Morgen und herzlich willkommen zu unserem Einführungstag! Mein Name ist Martina Frey, und ich leite die Sprachschule seit drei Jahren.",
                  sp: "A"
                },
                {
                  it: "Zuerst ein paar Informationen zum Ablauf. Heute Vormittag machen Sie einen kurzen Test, damit wir Sie in den richtigen Kurs einteilen können.",
                  sp: "A"
                },
                {
                  it: "Keine Angst, für den Test gibt es keine Note. Er dauert ungefähr vierzig Minuten.",
                  sp: "A"
                },
                {
                  it: "Danach gibt es in Raum 12 ein kleines Frühstück. Dort können Sie die anderen Teilnehmenden kennenlernen.",
                  sp: "A"
                },
                {
                  it: "Ihre Kursgruppe und Ihren Kursraum erfahren Sie am Nachmittag. Die Listen hängen ab 14 Uhr am Schwarzen Brett im Eingangsbereich.",
                  sp: "A"
                },
                {
                  it: "Der Unterricht beginnt am Montag. Die Kurse finden von Montag bis Donnerstag statt, immer von neun bis halb eins.",
                  sp: "A"
                },
                {
                  it: "Am Freitag haben Sie keinen Unterricht. Dann bieten wir ein Freizeitprogramm an, zum Beispiel Ausflüge, Kochabende oder einen Filmnachmittag.",
                  sp: "A"
                },
                {
                  it: "Das Programm ist freiwillig. Für die Ausflüge bezahlen Sie nur die Fahrkarte, alles andere ist im Kurspreis enthalten.",
                  sp: "A"
                },
                {
                  it: "Noch ein wichtiger Punkt: Unsere Bibliothek im zweiten Stock können alle Teilnehmenden kostenlos benutzen. Dort gibt es auch Computer.",
                  sp: "A"
                },
                {
                  it: "Bücher dürfen Sie zwei Wochen ausleihen. Bitte bringen Sie dafür Ihren Teilnehmerausweis mit.",
                  sp: "A"
                },
                {
                  it: "Den Ausweis bekommen Sie heute im Sekretariat. Dafür brauchen Sie nur ein Foto.",
                  sp: "A"
                },
                {
                  it: "Wenn Sie ein Problem haben, zum Beispiel mit Ihrer Unterkunft, kommen Sie einfach zu uns. Das Sekretariat ist täglich bis 17 Uhr geöffnet.",
                  sp: "A"
                },
                {
                  it: "So, jetzt wünsche ich Ihnen viel Erfolg beim Test und eine schöne Zeit bei uns!",
                  sp: "A"
                }
              ]
            ],
            items: [
              {
                q: "Der Test am Vormittag ...",
                opts: [
                  "entscheidet, in welchen Kurs man kommt.",
                  "ist wichtig für die Note am Kursende.",
                  "dauert den ganzen Vormittag."
                ],
                a: 0
              },
              {
                q: "Wo erfährt man seine Kursgruppe?",
                opts: [
                  "in Raum 12",
                  "im Sekretariat",
                  "am Schwarzen Brett im Eingangsbereich"
                ],
                a: 2
              },
              {
                q: "Am Freitag ...",
                opts: [
                  "gibt es nur am Vormittag Unterricht.",
                  "kann man an einem Freizeitprogramm teilnehmen.",
                  "müssen alle an einem Ausflug teilnehmen."
                ],
                a: 1
              },
              {
                q: "In der Bibliothek ...",
                opts: [
                  "muss man für die Computer extra bezahlen.",
                  "braucht man zum Ausleihen einen Teilnehmerausweis.",
                  "darf man Bücher vier Wochen ausleihen."
                ],
                a: 1
              },
              {
                q: "Was braucht man für den Teilnehmerausweis?",
                opts: [
                  "ein Foto",
                  "das Testergebnis",
                  "die Adresse der Unterkunft"
                ],
                a: 0
              }
            ]
          },
          {
            t: "vf",
            puntiPerItem: 1,
            consegna: "Sie hören ein Gespräch. Sie können das Gespräch höchstens zweimal hören. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
            titolo: "Ein Flohmarkt im Hof",
            brani: [
              [
                {
                  it: "Hallo, Paul! Hast du kurz Zeit? Ich möchte mit dir über den Flohmarkt im Hof sprechen.",
                  sp: "A"
                },
                {
                  it: "Hallo, Katrin! Klar. Hast du schon mit der Hausverwaltung gesprochen?",
                  sp: "B"
                },
                {
                  it: "Ja, gestern. Wir dürfen den Hof benutzen, aber nur am Samstag und nur bis 16 Uhr.",
                  sp: "A"
                },
                {
                  it: "Gut. Ich hatte eigentlich an einen Sonntag gedacht, aber Samstag ist auch in Ordnung. Am Sonntag sind sowieso viele Leute nicht da.",
                  sp: "B"
                },
                {
                  it: "Genau. Ich würde sagen, am 14. Juni. Da sind noch keine Ferien.",
                  sp: "A"
                },
                {
                  it: "Passt. Wie viele Leute aus dem Haus machen denn mit?",
                  sp: "B"
                },
                {
                  it: "Bis jetzt acht Familien. Frau Berger aus dem Erdgeschoss will außerdem Kuchen backen und verkaufen.",
                  sp: "A"
                },
                {
                  it: "Super. Das Geld vom Kuchen könnten wir dem Kindergarten in unserer Straße geben, oder?",
                  sp: "B"
                },
                {
                  it: "Gute Idee! Ich frage Frau Berger, aber ich glaube, sie findet das auch gut.",
                  sp: "A"
                },
                {
                  it: "Und die Tische? Ich habe zwei Klapptische im Keller. Die bringe ich mit.",
                  sp: "B"
                },
                {
                  it: "Das reicht aber nicht für alle. Jeder muss seinen eigenen Tisch mitbringen. Das schreibe ich auf den Zettel.",
                  sp: "A"
                },
                {
                  it: "Welchen Zettel?",
                  sp: "B"
                },
                {
                  it: "Ich mache einen Aushang für das Treppenhaus, damit auch die anderen Nachbarn Bescheid wissen.",
                  sp: "A"
                },
                {
                  it: "Sollen wir auch Leute von außen einladen? Dann kommen mehr Käufer.",
                  sp: "B"
                },
                {
                  it: "Hm, ich weiß nicht. Der Hof ist ja nicht so groß. Vielleicht nur die Leute aus den Häusern in unserer Straße.",
                  sp: "A"
                },
                {
                  it: "Okay, dann werfe ich am Wochenende kleine Zettel in die Briefkästen der Nachbarhäuser.",
                  sp: "B"
                },
                {
                  it: "Prima. Und was machen wir, wenn es regnet?",
                  sp: "A"
                },
                {
                  it: "Dann verschieben wir den Flohmarkt einfach um eine Woche. Im Keller ist zu wenig Platz.",
                  sp: "B"
                },
                {
                  it: "Einverstanden. Das schreibe ich dann gleich mit auf den Aushang.",
                  sp: "A"
                }
              ]
            ],
            items: [
              {
                q: "Der Flohmarkt darf nur an einem Samstag stattfinden.",
                a: 0
              },
              {
                q: "Paul wollte den Flohmarkt zuerst an einem Samstag machen.",
                a: 1
              },
              {
                q: "Frau Berger möchte beim Flohmarkt Kuchen verkaufen.",
                a: 0
              },
              {
                q: "Paul schlägt vor, das Geld vom Kuchen der Hausverwaltung zu geben.",
                a: 1
              },
              {
                q: "Paul bringt Tische für alle Nachbarn mit.",
                a: 1
              },
              {
                q: "Katrin findet den Hof für sehr viele Besucher zu klein.",
                a: 0
              },
              {
                q: "Wenn es regnet, findet der Flohmarkt im Keller statt.",
                a: 1
              }
            ]
          },
          {
            t: "mc",
            puntiPerItem: 1,
            consegna: "Sie hören eine Diskussion im Radio. Sie können die Diskussion höchstens zweimal hören. Dazu lösen Sie acht Aufgaben. Wer sagt das? Wählen Sie die richtige Person.",
            titolo: "Sollen Schulen um neun Uhr beginnen?",
            brani: [
              [
                {
                  it: "Moderator: Guten Abend und willkommen bei „Thema am Abend“. Heute fragen wir: Sollen Schulen erst um neun Uhr beginnen?",
                  sp: "B"
                },
                {
                  it: "Moderator: In vielen Schulen fängt der Unterricht schon um acht Uhr an, in manchen sogar schon um Viertel vor acht.",
                  sp: "B"
                },
                {
                  it: "Moderator: Bei mir im Studio sind Frau Kraus, Kinderärztin aus Leipzig, und Herr Demir, Vater von zwei Kindern. Frau Kraus, was sagen Sie?",
                  sp: "B"
                },
                {
                  it: "Frau Kraus: Ich bin klar dafür. Jugendliche werden abends später müde als Erwachsene. Das ist ganz normal und hat mit dem Körper zu tun, nicht mit dem Handy.",
                  sp: "A"
                },
                {
                  it: "Frau Kraus: Wenn sie dann um sechs Uhr aufstehen müssen, schlafen sie zu wenig. In meiner Praxis sehe ich viele Schüler, die deshalb Kopfschmerzen haben.",
                  sp: "A"
                },
                {
                  it: "Moderator: Herr Demir, das klingt doch überzeugend, oder?",
                  sp: "B"
                },
                {
                  it: "Herr Demir: Für die Gesundheit vielleicht schon. Aber viele Eltern fangen um acht Uhr mit der Arbeit an. Wer bringt dann die kleineren Kinder zur Schule?",
                  sp: "B"
                },
                {
                  it: "Herr Demir: Außerdem würde der Unterricht am Nachmittag länger dauern. Dann bleibt weniger Zeit für Sport, Musik oder Freunde.",
                  sp: "B"
                },
                {
                  it: "Moderator: Wir haben vor der Sendung unsere Hörerinnen und Hörer gefragt. Ungefähr zwei Drittel finden einen späteren Beginn gut, vor allem die, die selbst keine Kinder haben.",
                  sp: "B"
                },
                {
                  it: "Frau Kraus: Das wundert mich nicht. Aber man muss ja nicht alles auf einmal ändern. Man könnte zum Beispiel nur für die älteren Schüler später anfangen.",
                  sp: "A"
                },
                {
                  it: "Herr Demir: Das wäre ein Kompromiss, ja. Die Grundschulkinder könnten weiter um acht beginnen, weil die Eltern sie auf dem Weg zur Arbeit bringen.",
                  sp: "B"
                },
                {
                  it: "Moderator: Gibt es denn schon Schulen, die das ausprobiert haben?",
                  sp: "B"
                },
                {
                  it: "Frau Kraus: Ja, in einigen Städten gibt es solche Projekte. Dort sagen die Lehrer, dass die Schüler in der ersten Stunde viel aufmerksamer sind.",
                  sp: "A"
                },
                {
                  it: "Herr Demir: Ich habe gelesen, dass das am Anfang gut funktioniert. Aber nach ein paar Monaten gehen viele Jugendliche einfach später ins Bett.",
                  sp: "B"
                },
                {
                  it: "Frau Kraus: Das stimmt nur zum Teil. Die meisten schlafen trotzdem länger als vorher.",
                  sp: "A"
                },
                {
                  it: "Moderator: Zum Schluss: Was wünschen Sie sich?",
                  sp: "B"
                },
                {
                  it: "Herr Demir: Dass die Schulen nicht allein entscheiden. Eltern und Schüler sollten mitreden dürfen.",
                  sp: "B"
                },
                {
                  it: "Frau Kraus: Und ich wünsche mir, dass man es einfach mal ein Jahr lang an mehr Schulen testet.",
                  sp: "A"
                },
                {
                  it: "Moderator: Vielen Dank Ihnen beiden für das interessante Gespräch.",
                  sp: "B"
                }
              ]
            ],
            items: [
              {
                q: "In manchen Schulen beginnt der Unterricht noch vor acht Uhr.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 0
              },
              {
                q: "Dass Jugendliche abends spät müde werden, liegt nicht am Handy.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 1
              },
              {
                q: "Ein späterer Schulbeginn ist schwierig für Eltern, die früh arbeiten.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 2
              },
              {
                q: "Bei einem späteren Beginn hätten Schüler nachmittags weniger Freizeit.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 2
              },
              {
                q: "Vor allem Menschen ohne Kinder sind für einen späteren Beginn.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 0
              },
              {
                q: "Wenn die Schule später beginnt, passen die Schüler in der ersten Stunde besser auf.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 1
              },
              {
                q: "Nach einiger Zeit gehen viele Jugendliche später schlafen.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 2
              },
              {
                q: "Man sollte den späteren Beginn an mehr Schulen ausprobieren.",
                opts: [
                  "Moderator",
                  "Frau Kraus",
                  "Herr Demir"
                ],
                a: 1
              }
            ]
          }
        ]
      },
      {
        id: "scritta",
        modulo: "Schreiben",
        minuti: 60,
        prove: [
          {
            t: "schreiben",
            consegna: "Sie sind vor zwei Wochen in eine neue Wohnung umgezogen. Ihr Freund Tobias wohnt in einer anderen Stadt und hat die Wohnung noch nicht gesehen. Schreiben Sie ihm eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf eine passende Reihenfolge der Punkte, auf eine Anrede und einen Gruß am Schluss.",
            punti: [
              "Beschreiben Sie: Wie ist Ihre neue Wohnung?",
              "Begründen Sie: Warum sind Sie umgezogen?",
              "Machen Sie einen Vorschlag für einen Besuch bei Ihnen."
            ],
            parole: {
              min: 80,
              max: 100
            }
          },
          {
            t: "schreiben",
            consegna: "Sie haben in einem Online-Forum eine Diskussion zum Thema „Ein Jahr im Ausland nach der Schule“ gelesen. Dort schreibt Lena: „Nach der Schule sollte man sofort studieren oder eine Ausbildung machen. Ein Jahr im Ausland ist doch nur ein teurer Urlaub.“ Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
            punti: [
              "Ist ein Jahr im Ausland nach der Schule sinnvoll?"
            ],
            parole: {
              min: 80,
              max: 100
            }
          },
          {
            t: "schreiben",
            consegna: "In der Küche Ihrer Wohnung tropft der Wasserhahn seit einigen Tagen, und Sie können ihn nicht mehr richtig zumachen. Schreiben Sie Ihrer Vermieterin, Frau Haas, eine E-Mail (circa 40 Wörter). Vergessen Sie die Anrede und den Gruß am Schluss nicht.",
            punti: [
              "Beschreiben Sie das Problem.",
              "Bitten Sie um eine schnelle Reparatur.",
              "Nennen Sie Zeiten, zu denen Sie zu Hause sind."
            ],
            parole: {
              min: 40,
              max: 60
            }
          }
        ]
      },
      {
        id: "orale",
        modulo: "Sprechen",
        minuti: 15,
        prove: [
          {
            t: "sprechen",
            consegna: "Ihr Deutschkurs möchte am Ende des Kurses einen Tagesausflug machen. Sie und Ihr Gesprächspartner oder Ihre Gesprächspartnerin sollen den Ausflug organisieren. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners oder Ihrer Partnerin. Entscheiden Sie am Ende gemeinsam.",
            punti: [
              "Wohin fahren Sie?",
              "Wann treffen Sie sich, und wann kommen Sie zurück?",
              "Wie fahren Sie dorthin?",
              "Wie organisieren Sie das Essen und die Getränke?",
              "Wer kümmert sich um was?"
            ]
          },
          {
            t: "sprechen",
            consegna: "Halten Sie eine kurze Präsentation zum Thema „Ehrenamt: freiwillig helfen, ohne Geld dafür zu bekommen“. Sprechen Sie etwa drei Minuten. Gehen Sie dabei auf alle fünf Punkte ein.",
            punti: [
              "Nennen Sie das Thema und sagen Sie, worüber Sie sprechen werden.",
              "Erzählen Sie von eigenen Erfahrungen mit dem Ehrenamt, zum Beispiel in einem Verein oder in der Nachbarschaft.",
              "Wie ist das Ehrenamt in Ihrem Heimatland? Geben Sie Beispiele.",
              "Welche Vorteile und Nachteile hat ein Ehrenamt? Was ist Ihre Meinung?",
              "Kommen Sie zum Schluss und bedanken Sie sich bei Ihren Zuhörern."
            ]
          },
          {
            t: "sprechen",
            consegna: "Ihr Partner oder Ihre Partnerin hat eine Präsentation gehalten. Reagieren Sie darauf: Geben Sie eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie nach Ihrer eigenen Präsentation auch die Fragen der anderen.",
            punti: [
              "Sagen Sie, was Ihnen an der Präsentation gefallen hat.",
              "Nennen Sie einen Punkt, der für Sie neu oder besonders interessant war.",
              "Stellen Sie eine Frage zum Thema der Präsentation.",
              "Antworten Sie auf Fragen zu Ihrer eigenen Präsentation."
            ]
          }
        ]
      }
    ]
  }
];
