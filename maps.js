var map = null;

// function initMap() {
//     // Create a map object and specify the DOM element for display.
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8
//     });

// }

function initMap(latitude, longitude){
	 map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 8
    });
	// map["center"] = ({lat: 43.77109381775651, lng: -79.27734375});
}