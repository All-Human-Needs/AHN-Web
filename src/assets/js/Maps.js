function initMap() {

    var locations =[
        {
            lat: -33.9217137,
            lng: 18.46171849999996,
            name: 'Groote Schuur Hospital',
        },{
            lat: -33.9423756,
            lng: 18.463247300000035,
            name: 'Netcare UCT Private Academic Hospital',
        },{
            lat: -33.9443605,
            lng: 18.49009860000001,
            name: 'Life Vincent Pallotti Hospital',
        },{
            lat: -33.931401,
            lng: 18.45506899999998,
            name: 'Nedbank Salt River Cape',
        },{
            lat: -33.923951,
            lng: 18.422884000000067,
            name: 'Nedbank Grand Central',
        },
        {
            lat: -33.91724,
            lng: 18.42728599999998,
            name: 'Nedbank Foreshore',
        },{
            lat: -33.92765,
            lng: 18.4221,
            name: 'Department of Home Affairs Cape Town',
        },{
            lat: -33.9012178,
            lng: 18.63154910000003,
            name: 'Department of Home Affairs Office',
        },{
        lat: -34.0032484,
        lng: 18.4700239,
        name: 'Home Affairs Wynberg District',
    }

    ];
    var capeTown = {
        lat:-33.9231502,lng:18.4472879
        
    };
    /*var GSH = {
        lat: -33.9217137,
        lng: 18.46171849999996,
    }
    var NPAH = {
        lat: -33.9423756,
        long: 18.463247300000035
    }
    var LVPH = {
        lat: -33.9443605,
        long: 18.49009860000001
    }

    var NSR = {
        lat: -33.931401,
        long: 18.45506899999998
    }
    var NGC = {
        lat: -33.923951,
        long: 18.422884000000067
    }
    var NF = {
        lat: -33.91724,
        long: 18.42728599999998
    }

    var CTHA = {
        lat: -33.92765,
        long: 18.4221
    }
    var BHA = {
        lat: -33.9012178,
        long: 18.63154910000003
    }
    var WHA = {
        lat: -34.0032484,
        long: 18.4700239
    }*/




   // var location = new google.maps.LatLng(-33.926892,18.4436838);
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

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: locations[i],
            map: map,
            title:locations[i].name,
            styles:{
                backgroundcolor
            }
        });
        
    }

    /*var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: GSH,
        map: map
    });*/

}