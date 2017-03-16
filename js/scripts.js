function geoFindMe() {
    var output = document.getElementById('out');
    var link = document.getElementById('link');


    if (!navigator.geolocation){
        output.innerHTML = '<p>Twoja przeglądarka nie wspiera geolokalizacji</p>';
        return;
    }    

    function success(position) {

        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Szerokość geograficzna: <b>' + latitude + '°</b> <br>Długość geograficzna: <b>' + longitude + '°</b></p>';

        var hotText="Bing Maps";
        var URL='http://bing.com/maps/default.aspx?cp=' + latitude + '~' + longitude + '&lvl=16' ;

        link.innerHTML = 'Pokaż lokalizację w ' + hotText;
        link.href = URL;
        link.target = '_blank';

        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': false,
            'cancelable': true
        });
        
        link.dispatchEvent(event);

    }

    function error() {
        output.innerHTML = "Wystąpił błąd. Odśwież stronę i spróbuj ponownie";
    }

    output.innerHTML = "<p>Lokalizuję…</p>";

    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
    });
}