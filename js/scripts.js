function geoFindMe() {
    var output = document.getElementById('out'),
        link = document.getElementById('link');


    if (!navigator.geolocation){
        output.innerHTML = '<p>Twoja przeglądarka nie wspiera geolokalizacji</p>';
        return;
    }    

    function success(position) {

        var latitude  = position.coords.latitude,
            longitude = position.coords.longitude,
            hotText = 'Bing Maps',
            URL = 'http://bing.com/maps/default.aspx?cp=' + latitude + '~' + longitude + '&lvl=17&rtp=pos.' + latitude + '_' + longitude;

            // URL = 'http://bing.com/maps/default.aspx?cp=' + latitude + '~' + longitude + '&pp=' + latitude + ',' + longitude + ';113&lvl=17'; - z pushpin (nie działa)

        output.innerHTML = '<p>Szerokość geograficzna: <b>' + latitude + '°</b> <br>Długość geograficzna: <b>' + longitude + '°</b></p>';

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
        output.innerHTML = "Brak zgody na lokalizację";
    }

    output.innerHTML = "<p>Lokalizuję…</p>";

    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
    });
}