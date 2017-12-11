var orange = "#D66853";
var dark_blue = "#212D40";
var blue = "#364156";
var purple = "#7D4E57";
var black = "#11151C";

var button = document.getElementById("enter");

button.addEventListener("click", function(event){
	document.getElementById("error").style.display = "none";
	var city = document.getElementById("city").value;

	// never trust user input
	city = city.replace(/</g, "").replace(/>/g, "").replace(/;/g, "");
	document.getElementById("city").value = "";

	// if (isZip(city)){
	// 	console.log("zip");

	// 	var height = "innerHeight" in window 
 //               ? window.innerHeight
 //               : document.documentElement.offsetHeight; 

	//     console.log(height);
	//     window.scrollBy(0, height);

	// } else 
	if (isCityName(city)) {
		document.getElementById("main-container").style.display = "block";
		document.getElementById("main-header").innerHTML = "Welcome to " + city + "!";

		// get lat & long here
		var lat = 43.77109381775651, lng = -79.27734375;

		initMap(lat, lng);

		var height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

	    window.scrollBy(0, height);
	    document.getElementById("landing-container").style.display = "none";

	} else {
		document.getElementById("error").innerHTML = "Sorry! We don't recognize that city.";
		document.getElementById("error").style.display = "block";
	}
	
});

var button2 = document.getElementById("reload");

button2.addEventListener("click", function(event) {
	document.getElementById("error2").style.display = "none";
	var city = document.getElementById("city2").value;

	// never trust user input
	city = city.replace(/</g, "").replace(/>/g, "").replace(/;/g, "");
	document.getElementById("city2").value = "";

	if (isCityName(city)) {
		document.getElementById("main-header").innerHTML = "Welcome to " + city + "!";

	} else {
		document.getElementById("error2").innerHTML = "Sorry! We don't recognize that city.";
		document.getElementById("error2").style.display = "block";
	}

});

// function isZip(city) {
// 	return city.length > 0;
// }

function isCityName(city) {
	return city.length > 0;
}







