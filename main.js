// Initalize and add the map
function initMap() {
    //Your location
    const loc = {
        lat: 41.385063,
        lng: 2.173404
    }

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    })
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
}