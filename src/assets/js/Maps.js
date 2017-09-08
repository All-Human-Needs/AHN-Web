function initMap() {
    var CapeTown = {
        lat:-33.9217137,
        lng:18.429583
    }
    var map = new google.maps.Map(document.getElementById('map-GM'), {
        zoom: 13,
        center: CapeTown
    });
}