
// Ajax Funktion zum Auslesen externer Webseite

function LoadSchiri(){
					var LoadSchiriURL="http://www.steiermark.schiri.at/besetzung.php?vlw=2&schiri=strommer";
					$.ajax ({
					async: false, //thats the trick
					url: LoadSchiriURL,
					jsonpCallback: 'jsonCallback',
					dataType: 'jsonp',
					success: function(json){
					$('#ausgelesen').html (json);
							}
					})
					 //window.location.reload();
					}

function LoadSchiri2(){
var jqxhr = $.ajax({
    url: "http://www.steiermark.schiri.at/besetzung.php?vlw=2&schiri=strommer",
    dataType: 'jsonp',
    global: false,
    async:false,
    jsonpCallback: 'jsonCallback',
    success: function(jsonp) {
        alert jsonp;
    }
}).responseText;
alert (jsonp)
///alert(hhh);
}



