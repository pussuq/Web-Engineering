<h1>1. HTTP, URI, HTML und CSS</h1>
<h2>1.1. Fachliche Argumentation über Erfolgsprinzipien des WWW</h2>

<h3>Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?</h3>
<p>Der Chef von Tim Bernes-Lee fand sein Konzept interessant, aber zu vage. Sein Konzept ermöglichte Broken Links, d.h. Links, die ins Leere führen.</p>

<h3>Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?</h3>
<p>Evolvierbarkeit, d.h. Offenheit für Weiterentwicklung</p>

<h3>Was wäre der Preis für die garantierte Verhinderung von “broken links”?</h3>
<p>Der Nachteil von referentiellen Integrität ist höherer Rechenaufwand (besonders Rechenzeit) der durch zusätzliche Prüfungen entsteht.</p>

<h2>1.2. HTTP</h2>

<h3>Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?</h3>
<p>Der HTTP-Statuscode 200 OK gibt an, dass eine Anfrage erfolgreich verlaufen ist</p>

<h3>Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten? </h3>
<p>Der HyperText Transfer Protocol (HTTP)-Antwortcode 301 Moved Permanently zeigt an, dass die angeforderte Ressource endgültig an die in den Location-Headern angegebene URL verschoben wurde.</p>

<h3>Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?</h3>
<p>Der Status Code 400 (Bad Request) gibt an, dass der Server nicht in der Lage ist, Ihre Anfrage zu bearbeiten. Ein Neuladen der Seite sollte in den meisten Fällen den Fehler schon beheben. Mögliche Ursachen (Lösungsvorschläge):
Webadresse falsch eingegeben (Adresse neu eingeben), Probleme mit Cookies (Cookies löschen), zu lange URLs / Header-Lines(Anfrage möglicherweise kürzen),  Veraltete DNS-Einträge (DNS-Cache löschen), zu große Dateien;</p>

<h3>Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?</h3>
<p>Der Antwortcode des HTTP-Fehlerstatus 403 Forbidden zeigt an, dass der Server die Anfrage verstanden hat, sich aber weigert, sie zu autorisieren.</p>
<p> Dieser Status ist ähnlich wie 401, aber in diesem Fall macht eine erneute Authentifizierung keinen Unterschied. Der Zugriff ist dauerhaft verboten und an die Anwendungslogik gebunden, z. B. an unzureichende Rechte für eine Ressource. Mögliche Abhilfe: korrekte Zugangsdaten beschaffen.</p>

<h3>In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?</h3>
<p>Man kann die Zwischenspeicherung im Zusammenhang mit der OPTIONS-Anfrage nicht steuern. Der Browser steuert die Zwischenspeicherung für diese Anforderung selbst. Die einzige Möglichkeit, die Zwischenspeicherung zu beeinflussen, ist die Verwendung des Access-Control-Max-Age-Antwort-Headers.</p>
