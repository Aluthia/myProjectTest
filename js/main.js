function init_map() {
    var myLocation = new google.maps.LatLng(1.327225,103.8458993);

    var mapOptions = {
      center: myLocation,
      scrollwheel: false,
      zoom: 15
    };

    var marker = new google.maps.Marker({
        position: myLocation,
        title:"Peggy Guggenheim Collection"});


  var map = new google.maps.Map(document.getElementById("map-container"),
      mapOptions);
      var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

      map.set('styles', styles);
marker.setMap(map);

}
var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
});

google.maps.event.addDomListener(window, 'load', init_map) ;

$(function () {
  $('[data-toggle="popover"]').popover()
  })
