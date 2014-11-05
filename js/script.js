$(function(){


	var top = $(".top");
	var logo = $(".logo");
	var arrow = $(".arrow");
	var subtitle = $('.subtitle');
	var windowheight = $(window).height();
	var logohalf = windowheight / 2 - 91;
	var submar = windowheight / 2 - 92;
	var header = $("header");
	var selected = $('.selected');
	var navVis = false;

	

	// LANDING PAGE POSITION ELEMENTS

	top.css ({ height: windowheight });
	logo.css({ "padding-top": logohalf });   
	subtitle.css({ "margin-bottom" : submar });

	
	$(window).on("scroll", function(){

		// LANDING PAGE SCROLL

		var st = $(document).scrollTop();
		var sc = (-0.9/500) * st + 1;

		if ( sc > 0.649 ) {
			logo.css({ 'webkit-transform' : 'scale(' + sc + ')' + 'translateY(' + st + 'px)' });
		}

		else {   
		}

		var subsc = Math.max(- $(window).scrollTop() / 0.7, -300 )
		subtitle.css('margin-top', subsc );
		arrow.hide();
		console.log(st);


		// HEADER APPEAR 

		if ( st < 50  && navVis ) {
			navVis = false;
			header.stop().animate({
				top: '-85'
			}, 100)
		}

		else if ( st > 900 && !navVis ) {
			navVis = true;
			header.stop().animate({
				top: '0'
			}, 100);
		}
	});


	// FULL SCREEN IMAGES IN SELECTED WORKS 

	selected.each(function(){
		var path = $(this).attr('data-background');
		$(this).css({
		    'background': "url(" + path + ")" + "no-repeat 50% 50% scroll",
		    'background-size' : "cover",
		    '-webkit-background-size' : 'cover',
		    'width': '100%'
		});
	});






});

















// <a href="#" class="projecttitle gravurthin white">
//     <section class="selected first " data-background="img/gagadoll.png">
//         <dl>
//             <dt>DATE</dt>
//             <dd>December 2014</dd>
//             <dt>TYPE</dt>
//             <dd>Product Design</dd>
//             <dt>CLIENT</dt>
//             <dd>Warner Music Japan</dd>
//         </dl>
//         <h1>Gaga Doll</h1>
//     </section>
// </a>


// var path = $('section.first').attr('data-background');
// $('section.first').css({
//     'background': path + "no-repeat center center scroll"
//     'background-size' : "cover"
//     'width': '100%'
// })







		// IMG IN SELECTED DIVS STRETCH WITH OR HEIGHT

		// console.log(selected.height());
		// console.log($(window).width());

		// if ( selected.height() >= 500 ) {
		// 	$('.selected > img').css({
		// 		height: "100%"
		// 	 });

		// }



		// function resizeImage(){

		// 	var windowWidth = $(window).width();
		// 	console.log(windowWidth);

		// 	if ( windowWidth < 1030 ) {
		// 		$('.selected > img').css({
		// 			'max-height': '100%',
		// 			width: 'auto'
		// 		});
		// 	}

		// 	else {

		// 		$('.selected > img').css({
		// 			'width': '100%',
		// 			'max-width': '100%',
		// 			height: 'auto'
		// 		});
		// 	}
		// }

		// resizeImage();


		// $(window).on('resize', function(){
		// 	resizeImage();

		// });
























