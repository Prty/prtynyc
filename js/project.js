

$(function(){



	var header = $("header");
	var topImage = $('.topimage');
	var image = $('.image');


	// ADD BACKGROUND IMAGES FROM DATA-BACKGROUND TO SECTIONS 


	image.each(function(){

		var path = $(this).attr('data-background');

		$(this).css({
			'background': "url(" + path + ")" + "no-repeat 50% 50% scroll",
			'background-size' : "cover",
			'-webkit-background-size' : 'cover',
			'width': '100%'
		})


	});



	
	// POSITION HEADER ON TOP 0

	$(window).on("scroll", function(){

		header.css({ 
			'position' : 'fixed',
			'top' : 0
		});

	});




	// SET HEIGHT CEDITS DIV

	var creditsHeight = $('.creditsleft').height();
	console.log(creditsHeight);

	$('.credits').css({
		'height' : creditsHeight + 30
	});



	



	// FULL SCREEN IMAGES IN SELECTED WORKS 

	// selected.each(function(){
	// 	var path = $(this).attr('data-background');
	// 	$(this).css({
	// 	    'background': "url(" + path + ")" + "no-repeat 50% 50% scroll",
	// 	    'background-size' : "cover",
	// 	    '-webkit-background-size' : 'cover',
	// 	    'width': '100%'
	// 	});
	// });






});




















