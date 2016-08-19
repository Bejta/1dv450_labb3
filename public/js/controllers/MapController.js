/**
 * Created by Bejta on 17/08/2016.
 */


myApp.controller('MapController',['$scope', function($scope){

    var vm = this;
    //var gmarkers = [];

    //var infowindow = new google.maps.InfoWindow();



    var map;
    // We must use this for handling the map
    $scope.$on('mapInitialized', function(evt, evtMap) {
        map = evtMap;

        /*
        var data = PositionService.getPositions();

        for (i = 0; i < data.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i]["Latitude"], data[i]["Longitude"]),
                map: map,
                title: data[i]['address']
            });

            gmarkers.push(marker);
        }*/

        // Called from view when user clicked on map
        vm.checkPosition = function(e) {
            console.log(e.latLng.toString());
            //alert(this.position);
            // Create the marker
            var marker = new google.maps.Marker({position: e.latLng, map: map});
            map.panTo(e.latLng);
            //console.log(e.latLng);
            /*google.maps.event.addListener(map, 'click', function(event) {
             new google.maps.InfoWindow({
             position: event.latLng,
             content: event.latLng.toString()
             }).open(map);
             });*/

            google.maps.event.addListener(map, "click", function (e) {

                //lat and lng is available in e object
                var latLng = e.latLng;
                console.log(e.latLng);

            })
        };
    });
    return vm;

}]);



