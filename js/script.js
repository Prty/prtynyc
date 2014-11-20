if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isMobile = true;
}else{
	isMobile = false;
}


$(function(){


	var top = $("#intro");
	var logo = $(".logo");
	var arrow = $(".arrow");
	var subtitle = $('.subtitle');
	var windowheight = $(window).height();

	var logohalf = windowheight / 2 - logo.height()/2;
	var header = $("header");
	var selected = $('.selected');
	var navVis = false;

	// LANDING PAGE POSITION ELEMENTS

	top.css ({ height: windowheight });
	logo.css({ "padding-top": logohalf });   

	
	// SCROLL EFFECT

	scroll = function(e){
		var st = $(document).scrollTop();

		if(!isMobile){

			// LANDING PAGE SCROLL
			var minScale = 0.649;
			var sc = (-0.3/600) * st + 1;
			sc = Math.max(sc, minScale);

			var minTranslateY = 600;
			var ty = Math.min(st, minTranslateY);

			logo.css({ '-webkit-transform' : 'scale(' + sc + ')' + 'translateY(' + ty + 'px)' });
			logo.css({ '-moz-transform' : 'scale(' + sc + ')' + 'translateY(' + ty + 'px)' });
			logo.css({ '-o-transform' : 'scale(' + sc + ')' + 'translateY(' + ty + 'px)' });
			logo.css({ '-ms-transform' : 'scale(' + sc + ')' + 'translateY(' + ty + 'px)' });
			logo.css({ 'transform' : 'scale(' + sc + ')' + 'translateY(' + ty + 'px)' });

			var a = Math.max( 1-st*0.01, 0);
			arrow.css({'opacity':a});			

		} 

		// HEADER APPEAR 
		if ( st < 50  && navVis ) {
			navVis = false;
			header.stop().animate({
				top: '-85'
			}, 200)

			if(history.pushState) {
			    history.pushState(null, null, '#');
			} else {
				window.location.hash = ""
			}
			return false;
		}

		else if ( $('#top').position().top-st <= 0  && !navVis ) {
			navVis = true;
			header.stop().animate({
				top: '0'
			}, 200);
			arrow.show();
			if(history.pushState) {
			    history.pushState(null, null, '#top');
			} else {
				window.location.hash = "top"
			}
			return false;
		}


	}

	scroll();
	$(window).on( "scroll", scroll );


	// FULL SCREEN IMAGES IN SELECTED WORKS and hover effect

	$('section#selectedworks>a').each(function(){

		var div = $(this);
		var path = $(this).attr('data-background');
		var img = '<img src="'+ path +'">';
		div.animate({opacity:0},0);

		$(img).load(function(){
			div.css({
			    'background': "url(" + $(this).attr('src') + ")" + "no-repeat 50% 50% scroll",
			    'background-size' : "cover",
			    '-webkit-background-size' : 'cover'
			});
			div.animate({opacity:1},1000);
		});

		if(!isMobile){
			$('article', this).hide();

			$(this).hover(
				function(){
					$('article', this).fadeIn();
				},
				function(){
					$('article', this).fadeOut();
				}
			);
		}


	});


	//Layout
	layout = function(e){
		var w = $(window).width();
		var h = $(window).height();


		logo.css({ "padding-top": h/2 - $('.logo').height()/2 }); 


		if(w<=480){
			$('section#selectedworks>a').height(h*0.3);
		}else{
			$('section#selectedworks>a').height(h*0.49);
		}

	}

	setTimeout(function(){
		layout();
	}, 100 );

	$(window).on('resize', layout);





});























