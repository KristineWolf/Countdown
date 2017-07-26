# Übungsaufgabe: Countdown

![Screenshot der finalen Anwendung](/docs/cover.png)

*Countdown* ist eine [TV-Sendung](https://en.wikipedia.org/wiki/Countdown_(game_show)), die seit 1982 im britischen Fernsehen ausgestrahlt wird. In dieser Spielshow treten zwei Spieler in verschiedenen Runden gegeneinander an. Eine der gespielten Runden ist das sogenannten *Letters Game*, in dem die Teilnehmer in 30 Sekunden ein möglichst langes Wort aus neun, zufällig ausgewählten Buchstaben bilden müssen. In dieser Aufgabe sollen Sie dieses Spiel als Javascript-Anwendung für einen Spieler im Browser umsetzen. 

## Inhalt dieses Dokuments
* [Bewertungskriterien](#bewertungskriterien)
* [Allgemeine Informationen](#allgemeine-informationen)
* [Spielbeschreibung und -regeln](#spielbeschreibung-und--regeln)
* [Vorgegebener Code und gewünschte Modulstruktur](#vorgegebener-code-und-gewünschte-modulstruktur)
* [Animation der Uhr](#animation-der-uhr)
* [Validierung der erstellten Wörter](#validierung-der-erstellten-wörter)

## Allgemeine Informationen
**Die Aufgabe beschränkt sich auf die Implementierung der Programmlogik mit Javascript. Sie müssen keine Änderungen am vorgegebenen CSS-Dokument oder der HTML-Datei vornehmen. Erweitern Sie den bereits vorhanden Javascript-Code und ergänzen Sie neue Module zur sinnvollen Gestaltung und Strukturierung der Anwendung.**

Bei Fragen zur Übungsaufgabe können Sie in das [GRIPS-Forum](https://elearning.uni-regensburg.de/mod/forum/view.php?id=731537) *posten* oder Ihre Fragen per Mail (mi.mme@mailman.uni-regensburg.de) stellen.

**Abgabetermin ist der 21. Dezember 2016. Wir bewerten den letzten Commit, der an diesem Abgabetag in das Repository *gepusht* wird.** Informationen zur Nutzung von *Github* finden Sie in den Folien vom 26. Oktober bzw. 2. November. 

**Formatierung und ESLint:** 
Sie finden im Starterprojekt bereits Dateien mit Formatvorgaben für [JS-Beautify](https://github.com/beautify-web/js-beautify) bzw. Regeldateien für [ESLint](http://eslint.org/). Ihr eingereichter Programmcode darf bei Überprüfung gegen die ESLint-Datei keine Fehler erzeugen. 

**Screenshot des Menübildschirms**
![Screenshot der finalen Anwendung](/docs/screenshot-start.png)

## Bewertungskriterien
Wir werden Ihre Abgabe hinsichtlich der folgenden Kriterien bewerten:

* Ist die Aufgabenstellung vollständig erfüllt worden? Sind Spielbeschreibung und Regelwerk vollständig umgesetzt worden?
* Ist die Aufgabe fehler- und bugfrei implementiert worden?
* Sind die Komponenten der Anwendung sinnvoll voneinander getrennt und in nachvollziehbar gewählten Modulen organisiert?
* Wird die Verwendung eines MVC-basierten Ansatzes zur Strukturierung der Anwendung deutlich?
* Lässt sich eine ausreichend hohe Codequalität feststellen?
* Ist der Code gemäß den vorliegenden ESLint-Regeln formatiert bzw. erstellt worden?
* Wurde (im Rahmen der Aufgabenstellung) auf eine gute Bedienbarkeit der Anwendung geachtet?

Sie müssen die Aufgabenstellung nicht erweitern. Es reicht völlig, wenn Sie die geforderten Anforderungen implementieren. Unabhängig davon können Sie gerne weitere Features, Verbesserungsvorschläge oder andere Inhalte ergänzen.
 
## Spielbeschreibung und -regeln
Zu Beginn des Spiels wird der Menübildschirm (`#menu-screen`) eingeblendet. Ein Klick auf den Button mit der Beschriftung *Start Game* schließt den Menübildschirm und startet das eigentliche Spiel:

1. Über die beiden Buttons (`.add-vowel` und `.add-consonant`) kann der Spieler neun zufällige Buchstaben auswählen. Dabei wird beim Betätigen des *Vowel*-Buttons ein Vokal und beim Betätigen des *Consonant*-Buttons ein Konsonant ausgewählt.
2. Die ausgewählten Buchstaben werden im entsprechenden Element (`#letters`) angezeigt. Verwenden Sie für die einzelnen Buchstaben die bereits angelegten `<span>`-Elemente in diesem Elternelement. Entfernen Sie die CSS-Klasse `empty` aus den Elementen sobald ein Buchstabe eingetragen wird. Die Buchstabenanzeige wird von links nach rechts befüllt.
3. Sobald neun Buchstaben ausgewählt wurden, startet ein *Timeout* von 30 Sekunden. In dieser Zeit soll der Sekundenzeiger der Uhr animiert werden.
4. Der Spieler versucht ein Wort aus den neun Buchstaben zu erstellen und gibt seinen Vorschlag in das Eingabefeld (`.word-input`) ein. Es dürfen nur die neun ausgewählten Buchstaben verwendet werden. Jeder der ausgewählten Buchstaben darf nur einmal verwendet werden. Nach Ablauf der 30 Sekunden ist keine Eingabe mehr möglich.
5. Nach den 30 Sekunden wird das vom Spieler eingegebene Wort überprüft. Wurde ein korrektes Wort der englischen Sprache eingegeben erhält der Spieler einen Punkt für jedes Zeichen in seinem Lösungswort. Für ein Wort mit allen neun Zeichen erhält der Spieler 18 Punkte. Wurde kein valides Wort eingegeben erhält der Spieler keine Punkte.
6. Die Punkte werden zusammen mit etwaigen Hinweisen angezeigt (siehe unten).
7. Nach 3 Sekunden wird erneut der Menübildschirm eingeblendet, über den das Starten eines weiteren Spiels möglich ist. Beim Neustart wird das Spiel auf den initialen Zustand zurückgesetzt.

**Hinweis:** In der TV-Vorlage wird der Stapel an Buchstaben, aus denen die zufälligen neun Buchstaben gewählt werden, unter Berücksichtigung der [Vorkommenshäufigkeit der Zeichen in der englischen Sprache](https://en.wikipedia.org/wiki/Letter_frequency#Relative_frequencies_of_letters_in_the_English_language) zusammensetzt und gemischt. Das heißt, dass im Ausgangsstapel ein `e` z.B. wesentlich häufiger vorkommt als ein `x` oder ein `z`. Beim Lösen der Aufgabe müssen Sie diesen Teil des Originalspiels nicht beachten und können von einer statistischen Gleichverteilung der Wahrscheinlichkeiten ausgehen. Wenn Sie die Vorkommenshäufigkeit trotzdem berücksichtigen wollen, können Sie sich an dem oben verlinkten Wikipediaartikel orientieren. Als zusätzliche, nicht bewertete, Erweiterung können Sie einmal *gezogene* Buchstaben für die aktuelle Runde aus dem fiktiven Stapel entfernen.

**Screenshot der finalen Anwendung während der Auswahl der Buchstaben**
![Screenshot der finalen Anwendung](/docs/screenshot-letter-input.png)

## Vorgegebener Code und gewünschte Modulstruktur
Die `init`-Methode im `Countdown`-Modul stellt den Einstiegspunkt in die Anwendung dar. Erstellen Sie selbstständig weitere Module für die notwendigen Komponenten der Anwendung. Achten Sie dabei darauf, die unterschiedlichen Aufgaben dieser Komponenten klar voneinander abzugrenzen. Nutzen Sie wenn möglich *Event*-basierte Kommunikationswege und verwenden Sie das `Countdown`-Modul als zentrale Schnittstelle zwischen den übrigen Modulen. Eine funktionierende Implementierung eines *Event Publishers* zur Verwendung in Ihren Modulen finden Sie bereits im Code in der Datei `vendors/event-publisher/EventPublisher.js` (Siehe Folien vom 7. Dezember).

Erstellen Sie für jedes neue Modul eine eigene Datei im Ordner `resources/js`. Denken Sie daran, die neu erstellten Dateien in der HTML-Datei einzubinden.

## Animation der Uhr
Die durch HTML-Elemente dargestellte und über CSS gestaltete Uhr kann animiert werden. Dabei wird der Sekundenzeiger kontinuierlich innerhalb von jeweils einer Minute einmal um dessen eigene Achse rotiert (0° bis 360°). In der mitgelieferten CSS-Datei finden Sie eine definierte CSS-Regel `.hand-animated` mit allen benötigten Eigenschaften. Durch Hinzufügen dieser Regel zum `class`-Attribut des Sekundenzeiger-Elements (`.clock .hand`) starten Sie die Animation des Uhrzeigers. Wenn die Klasse wieder entfernt wird, setzen Sie damit die Position des Uhrzeigers zurück und beenden die Animation.

**Screenshot der finalen Anwendung während des Spiels**
![Screenshot der finalen Anwendung](/docs/screenshot-in-game.png)

## Validierung der erstellten Wörter
Sie müssen die - englischsprachige - Eingabe des Spieler validieren, um festzustellen, wie viele Punkte der Nutzer in der aktuellen Runde erhält:

1. Es muss festgestellt werden, ob das eingegeben Wort aus den ausgewählten Buchstaben zusammengesetzt ist und ob jeder Buchstabe nur einmal verwendet wurde. Ist dies nicht der Fall, erhält der Spieler keine Punkte und es wird ein entsprechender Hinweis im *User Interface* (`.results .hint`s) angezeigt.
2. Es muss festgestellt werden, ob es sich bei dem eingegeben Wort um ein existierendes Wort der englischen Sprache handelt. Verwenden Sie dazu die *REST API* des [Wiktionary-Projekts](https://en.wiktionary.org/wiki/Wiktionary:Main_Page).

**Meldung bei Eingabe eines nicht existierenden Wortes**
![Screenshot der finalen Anwendung](/docs/screenshot-word-does-not-exist.png)

**Meldung bei Eingabe eines nicht-regelkonformen Wortes**
![Screenshot der finalen Anwendung](/docs/screenshot-invalid-combination.png)

**Meldung bei Eingabe eines validen Wortes**
![Screenshot der finalen Anwendung](/docs/screenshot-valid-result.png)

### Wiktionary-API
Das [Wiktionary-Projekt](https://www.wiktionary.org/) stellt nutzergenerierte Wörterbücher für unterschiedliche Sprachen bereit. Über die [API-Schnittstelle](https://en.wiktionary.org/w/api.php) des verwendeten Media-Wikis können Sie auf die Inhalte der Wörterbücher zugreifen um z.B. den Eintrag zu einem bestimmten Wort zu erfragen. In dieser Aufgabe gilt ein Wort als existent, wenn sich bei der Suche im englischsprachigen *Wiktionary*-Wörterbuch ein entsprechender Eintrag findet. Für die Implementierung der Validierungskomponente können Sie das AJAX-Modul verwenden, die Sie bereits aus dem Kurs kennen und das Sie im Starterpaket in der Datei `vendors/request/request.js` finden.

Um den Eintrag für das Wort *student* im englischsprachige *Wiktionary* zu erhalten wird folgende URL verwendet:
`https://en.wiktionary.org/w/api.php?action=query&origin=*&format=json&titles=student`. Diese *Query*-URL enthält dabei mehrere Parameter:

* `action=query`: Hier wird spezifiziert, dass eine Suchanfrage gestellt wird
* `origin=*`: Dieser Parameter ist notwendig, um von externen URLs auf die API zuzugreifen (siehe [HTTP access control (CORS), MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS))
* `format=json`: Hier wird das Antwortformat spezifziert
* `title=student`: Hier wird die eigentliche Suchanfrage spezifiziert

Als Antwort erhalten Sie über diese API-Schnittstelle ein JSON-formatiertes Objekt mit unterschiedlichen Informationen:

**Positive Antwort der API-Schnittstelle: Das Wort `student` existiert**
```
{
    "batchcomplete":"",
    "query":{
        "pages":{
            "104352":{
                "pageid":104352,
                "ns":0,
                "title":"student"
            }
        }
    }
}
```

Anhand der `pages`-Eigenschaft können Sie feststellen, ob ein Eintrag zu Ihrem Suchbegriff existiert. Die API berücksichtigt hier auch verschiedene Formen des Suchbegriffs. Ist unter `pages` mindestens ein Eintrag mit einer validen *ID* als Eigenschaftsname (hier: `"104352"`) vorhanden, existiert ein Eintrag im Wörterbuch. Wird stattdessen nur ein Antwortobjekt mit dem Eigenschaftsname `"-1"` zurückgeben, konnte kein Eintrag gefunden werden.

**Negative Antwort des API-Schnittstelle: Das Wort `studentx` existiert**
```
{
    "batchcomplete":"",
    "query":{
        "pages":{
            "-1":{
                "ns":0,
                "title":"studentx",
                "missing":""
            }
        }
    }
}
```
