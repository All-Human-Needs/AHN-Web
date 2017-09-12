//import * as mapIcons from "map-icons.js";

function initMap() {

    var locations = [
        {
            lat: -33.9217137,
            lng: 18.46171849999996,
            name: 'Groote Schuur Hospital',
        }, {
            lat: -33.9423756,
            lng: 18.463247300000035,
            name: 'Netcare UCT Private Academic Hospital',
        }, {
            lat: -33.9443605,
            lng: 18.49009860000001,
            name: 'Life Vincent Pallotti Hospital',
        }, {
            lat: -33.931401,
            lng: 18.45506899999998,
            name: 'Nedbank Salt River Cape',
        }, {
            lat: -33.923951,
            lng: 18.422884000000067,
            name: 'Nedbank Grand Central',
        },
        {
            lat: -33.91724,
            lng: 18.42728599999998,
            name: 'Nedbank Foreshore',
        }, {
            lat: -33.92765,
            lng: 18.4221,
            name: 'Department of Home Affairs Cape Town',
        }, {
            lat: -33.9012178,
            lng: 18.63154910000003,
            name: 'Department of Home Affairs Office',
        }, {
            lat: -34.0032484,
            lng: 18.4700239,
            name: 'Home Affairs Wynberg District',
        }

    ];
    var capeTown = {
        lat: -33.9231502, lng: 18.4472879

    };

    var map = new google.maps.Map(document.getElementById('map-GM'), {
        zoom: 13,
        center: capeTown,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                featureType: "transit",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ]
    });

    var myLatLng = {
        lat: -34.0032484,
        lng: 18.4700239,
    }

    for (var i = 0; i < locations.length; i++) {
        var marker = new mapIcons.Marker({
            position: locations[i],
            map: map,
            title: locations[i].name,
            styles: {
                backgroundcolor: '#fff'
            },
            icon: {
                path: 'M-13,0a13,13 0 1,0 26,0a13,13 0 1,0 -26,0', //mapIcons.shapes.MAP_PIN,
                fillColor: '#00CCBB',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon  map-icon-compass"></span>'
        });

    }

}