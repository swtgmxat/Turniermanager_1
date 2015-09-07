
function changetoHome() {
        $.mobile.changePage( "index.html", { transition: "slideup", changeHash: false });
        }

function changetoUebersicht() {


        $.mobile.changePage( "uebersicht.html", { transition: "slideup", changeHash: false });
        document.getElementById("Turnier").innerHTML = "Turniername: " + fTurnierName1;
        document.getElementById("AnzahlTeams").innerHTML ="Anzahl Teams: " + AnzTeams;
        }