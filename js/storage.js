/**
 * 
 */

    

    function saveContentsVar() {
    	var fTurnierName1 = document.getElementById('Turniername1').value;
    	var AnzTeams = document.getElementById('AnzTeams').value;

        if (fTurnierName1 != "") {
            localStorage.setItem("Turniername1", fTurnierName1);
           // localStorage['AnzTeams'] = AnzTeams;
            localStorage.setItem("AnzTeams", AnzTeams);
           // alert(1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length);

        //document.getElementById("MyEdit").innerHTML = "My new text!";​

        document.getElementById("Turnier").innerHTML = "Turniername: " + fTurnierName1;
        document.getElementById("AnzahlTeams").innerHTML ="Anzahl Teams: " + AnzTeams;

        } else
            alert('Turnierbezeichnung fehlt!');

//        var AnzTeams = document.getElementById('AnzTeams').value;
//        if (AnzTeams != "") {
//                    localStorage['AnzTeams'] = AnzTeams;
//                    //alert(1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length);
//                } else
//                    alert('Anzahl der Teams fehlt!');


    //    window.location.reload();
    //    Läd die Seite nochmal
    }

    
    function saveContents() {i
        var storeBesetzungstore = $('#storeBesetzung').html();
        localStorage['storeBesetzung'] = storeBesetzungstore;
        window.location.reload();
    }
    
    function restoreContents() {
        var mystoreBesetzung = localStorage['storeBesetzung'];
        if (mystoreBesetzung != undefined) {
            $('#storeBesetzung').html(mystoreBesetzung);
        }
    }

    function restoreContents() {
        var myTodoList = localStorage['turnierliste'];
        if (turnierliste != undefined) {
            $('#turnierliste').html(turnierliste);
        }
    }
    
    function toggleEditContent(e) {
        if ($('#storeBesetzung').attr('contenteditable') == 'false') {
            $('#storeBesetzung').attr('contenteditable', 'true');
            $('#edit').val('Speichern');
            $('#storeBesetzung').focus();
        } else {
            $('#storeBesetzung').attr('contenteditable', 'false');
            $('#edit').val('Bearbeiten');
            saveContents();
        }
    }
    
    function resetContent(e) {
        localStorage.clear();
        window.location.reload();
    }
    