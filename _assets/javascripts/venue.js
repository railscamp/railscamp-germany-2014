//= require vendor/leaflet-providers
//= require vendor/bouncemarker

function isMobile() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

var map = L.map('map', {zoomControl: false, scrollWheelZoom: false}).setView([50.9352007, 7.00926661], 14);

L.tileLayer.provider('MapBox.slogmen.map-64a4ugze').addTo(map);
L.control.zoom({position: 'bottomleft'}).addTo(map);
L.marker([50.9352007, 7.00926661],
  { bounceOnAdd: true, bounceOnAddOptions: {duration: 1000, height: 200}}
).addTo(map)
.bindPopup('<b>RailsCamp Germany 2014</b> <br> <span>September 26 - 28, 2014</span> <br> Abenteuerhallen Kalk, Cologne');

if (isMobile()) {
  map.dragging.disable();
};


