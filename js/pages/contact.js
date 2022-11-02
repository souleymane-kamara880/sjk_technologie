jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
     =             MAIN FUNCTION             =
     =======================================*/

    SLZ.mainFunction = function(){
        /*Google map*/
        var myLatLngNY = {lat: 36.744690, lng: 3.177285};
        var markerLatLngNY = {lat: 36.744690, lng: 3.177285};



        var customMapTypeId = 'map_style';

        // Create an array of styles.
        var styles = [
           {
                stylers: [
                    { hue: "#c8cccf" },
                    { saturation: -250 }
                ]
            },{
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                ]
            },{
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
            {name: "GLAXIOM"});

        var mapProp = {
            center: myLatLngNY,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            draggable: false,
        
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }
        };

        var flag = 0;
        function initialize() {

            if ($(window).width() <= 768) {
                mapProp.zoom = 9;
            }

            var map = new google.maps.Map(document.getElementById("map"),mapProp);
            map.mapTypes.set(customMapTypeId, styledMap);
            map.setMapTypeId(customMapTypeId);

            var image = {
                url: 'img/icon/icon-location.png',
                // size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(40, 40)
            };

        
       
                    var marker = new google.maps.Marker({
                        position: markerLatLngNY,
                        map: map,
                        title: 'GLAXIOM'
                    });
                    
            
        }
        google.maps.event.addDomListener(window, 'load', initialize);

        // Click Location
        $(".location-ny").on('click', function () {
            flag = 1;

            mapProp = {
                center: myLatLngNY,
                zoom:16,
                mapTypeId:google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                disableDefaultUI: true,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
                }
            };

            initialize();

            google.maps.event.addDomListener(window, 'load', initialize);
        });

        

        $('.wrapper-map .over-map').on('click', function() {
            if ($(window).width() > 767) {
                $(".over-map").addClass("display-none");
                $(".branch").removeClass("display-none");
            } else {
                $(".over-map").removeClass("display-none");
                $(".branch").addClass("display-none");
            }
        });
        // Click branch
        $(".branch").on('click', function () {
            $(".over-map").removeClass("display-none");
            $(".branch").addClass("display-none");
        });
    };

    /*======================================
     =            INIT FUNCTIONS            =
     ======================================*/

    $(document).ready(function(){
        SLZ.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/
});