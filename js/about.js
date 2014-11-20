

$(function(){

	// google.maps.event.addDomListener(window, 'load', init);

	//acf-maps

	var header = $("header");
	
	// POSITION HEADER ON TOP 0

	$(window).on("scroll", function(){
		header.css({ 
			'position' : 'fixed',
			'top' : 0
		});

	});



});


