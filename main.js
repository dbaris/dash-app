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
		// var header = "<h1>Welcome to " + city + "!</h1>";
		// var data = "<div id='info'><h2>Population: 30,000</h2> <h2>Area: 600 sq miles</h2></div>";
		// var map = "<div id='map'>loading...</div>";
		// var footer = "<div><h4>Explore Another City!</h4><input id='city' name='city'></div><button id='enter'>Enter</button>";

		document.getElementById("main-container").style.display = "block";
		document.getElementById("main-header").innerHTML = "Welcome to " + city + "!";
		// document.getElementById("main-container").innerHTML = header + data + map + footer;


		// initMap();

		var height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

	    console.log(height);
	    window.scrollBy(0, height);
	    document.getElementById("landing-container").style.display = "none";

	} else {
		console.log('hi');
		document.getElementById("error").innerHTML = "Sorry! We don't recognize that city.";
		document.getElementById("error").style.display = "block";
	}

	
    
    
	
});

// function isZip(city) {
// 	return city.length > 0;
// }

function isCityName(city) {
	return true;
}







