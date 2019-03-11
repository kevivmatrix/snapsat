L.mapbox.accessToken = 'pk.eyJ1IjoibWFya2tvbmciLCJhIjoiY2lteWNjMzFhMDQzbXZvbHUza3B6eTdoaSJ9.HuonodjO41vjRpMJk29lXA';
 
var url = window.location.href.slice(-21);
console.log(url);


var imageUrl = 'https://farm4.staticflickr.com/3731/14101168818_932d707f90_o.jpg',
    imageBounds = L.latLngBounds([
        [49.94119, -97.97009],
        [47.76065, -101.18046]]);

// Create a basemap
var preview = L.mapbox.map('preview', 'mapbox.snapsat', {zoomControl: true});

// preview.setView([47.568, -122.582], 7);
preview.scrollWheelZoom.disable();
preview.addControl(L.mapbox.geocoderControl('mapbox.places'));

var overlay = L.imageOverlay(imageUrl, imageBounds)
    .addTo(preview);
