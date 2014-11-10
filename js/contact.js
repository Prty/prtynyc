

$(function(){

	// google.maps.event.addDomListener(window, 'load', init);


	var header = $("header");
	
	// POSITION HEADER ON TOP 0

	$(window).on("scroll", function(){
		header.css({ 
			'position' : 'fixed',
			'top' : 0
		});

	});


	// SET UP GOOGLE MAP

	// function init(){

	// 	var myOptions = {
	// 	    zoom: 15,
	// 	    center: new google.maps.LatLng(53.385873, -1.471471),
	
		
	// 	};

	// 	var map = new google.maps.Map(document.getElementById('map'), myOptions);
		        
	// }


});




















