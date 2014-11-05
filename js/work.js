	
	
	var txt = $('.innertext');
	txt.hide();

	// CALCULATE BLOCK SIZE

	var block = $(".workblock");
	var windowWidth = $(window).width();
	var devideThree = windowWidth / 3;
	var devideFour = windowWidth / 4;
	console.log(devideThree);


	// PLACE BLOCKS BASED ON WINDOW WIDTH

	placeBlocks();

	function placeBlocks() {

		windowWidth = $(window).width();
		devideThree = windowWidth / 3;
		devideFour = windowWidth / 4;

		if ( windowWidth < 1200 ) {
			block.css({
				'width': devideThree + 'px', 
				'height': devideThree + 'px'
			})
		}

		else {
			block.css({
			'width': devideFour + 'px', 
			'height': devideFour + 'px'
			})
		}
	}


	// CHANGE SIZE WHEN RESIZE

	$(window).resize( function(){
		placeBlocks();		
	});


	// ADD IMAGES TO THE BLOCKS

	block.each(function(){

		var path = $(this).attr('data-background');
		console.log(path);

		$(this).css({
			'background': "url(" + path + ")" + "no-repeat 50% 50% scroll",
		    'background-size' : "cover",
		    '-webkit-background-size' : 'cover',
		    // 'width': '100%'
		})

	});


	// SHOW INFO ON HOVER


	block.each(function(){

		block.hover(function(){
			var txt = $('.innertext', this);
			txt.stop().fadeIn(200)

		}, function(){
			var txt = $('.innertext', this);
			txt.stop().fadeOut(500)
		});


	});
























