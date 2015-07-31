/**
 * Webseite auslesen Start
 */
				function URLAuslesen() {
					var BesetzungsURL = "http://www.steiermark.schiri.at/besetzung.php/vwl2?schiri=";
					var Schiri = $('#combo :selected').text();
					var AufrufURL = BesetzungsURL + Schiri;
					window.location.href = AufrufURL;
				}

