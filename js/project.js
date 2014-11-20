if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isMobile = true;
}else{
	isMobile = false;
}


$(function(){

	var header = $('header');
	var image = $('.image');


	// ADD BACKGROUND IMAGES FROM DATA-BACKGROUND TO SECTIONS 

	$('#hero').each(function(){

		var div = $(this);

		var path = $(this).attr('data-background');
		var backgroundCss = "url(" + path + ")" + "no-repeat 50% 50% scroll, ";

		if(div.attr("class") == "onblack"){
			backgroundCss += "rgb(0,0,0)"
		}else{
			backgroundCss += "rgb(255,255,255)"
		}

		div.animate({opacity:0},0);
		$('hgroup', div).animate({opacity:0},0);

		var img = '<img src="'+ path +'">';
		$(img).load(function(){

			div.css({
				'background': backgroundCss,
				'background-size' : "cover",
				'-webkit-background-size' : 'cover',
				'width': '100%'
			})

			div.animate({opacity:1}, 1000);
			setTimeout( function(){ 
				$('hgroup', div).animate({opacity:1},1000);
			}, 1000);
			

		})


	});


	//video


	showvideo = function (e) {

		$(document.body).append("<div id='overlay'></div>");


		$('#overlay').hide().fadeIn(500, function(){
			var src = $('.videocta').attr('data-videourl');
			var embed = '<iframe class="ytvideo" src="'+ src + "?autoplay=1" +'" frameborder="0" allowfullscreen></iframe>';	

			$("#overlay").append(embed);

			var closeBtn = "<img src='/wp-content/themes/prtynyc/img/closebutton.png' class='close_btn'>"
			$("#overlay").append(closeBtn);

			$(document.body).addClass("no_scroll");

			var hideVideo = function(e){
				$(document.body).removeClass("no_scroll");
			  	$("#overlay").fadeOut(500, function(){
			  		$("#overlay").remove();
			  	});
			  }

			$("#overlay").on("mousedown", hideVideo);
			$("#overlay").on("touchend", hideVideo);

			layout();

		});


	}

	$(".videocta").on("mousedown", showvideo)
	//for touch device to avoide 300ms delay
	$(".videocta").on('touchstart', function(e){
		showvideo();
		$(this).addClass("playbutton_touched");
	})




	layout = function(e){

		var w = $(window).width();
		var h = $(window).height();

		var areaHV = w/h; 
		var picHV = 1280/720; 

		$('#hero').height(h*0.8);

		//video
		 $("#overlay").height(h);

		if( picHV > areaHV ) {
			var bw = w*1.00; 
		  	$(".ytvideo").width(bw);
		  	$(".ytvideo").height(bw/1280*720);
		 } else{ 
		 	var bh = h*1.00;
		  	$(".ytvideo").height(bh);
		  	$(".ytvideo").width(bh/720*1280);
		}


	}
	layout();
	$(window).on('resize', layout);

	// parallax
	if(!isMobile){
		$(window).on('scroll',function(){
			var dy = 'translateY(' + Math.floor($(window).scrollTop()*0.3) + 'px)';
			var dy2 = 'translateY(' + -Math.floor($(window).scrollTop()*0.3) + 'px)';
			$('#hero').css({
				" -ms-transform:": dy,
				"-webkit-transform:": dy,
				"transform": dy
			});
			$('#hero hgroup').css({
				" -ms-transform:": dy2,
				"-webkit-transform:": dy2,
				"transform": dy2
			});
		})
	}


	// Slideshow

	var w = window.innerWidth;
	var h = window.innerHeight;

	$("#slides").slidesjs({
		width: w,
		height: w/1920*1080,
		navigation:{
			active: false
		},
		pagination:{
			active: false
		},

		play:{
			auto: true,
			effect:'slide',
			interval: 5000
		},

		effect:{
			slide:{
				speed: 1500
			}
		}
	})

	// if(isMobile){
	// 	$(".slide_arrow").hide();
	// }

	
	// Next CTA image
	var nextImgPath = $('#nextproject>div').attr("data-image");

	$('#nextproject>div').css({
		'background' : "url(" + nextImgPath + ")" + "no-repeat 50% 50% scroll",
		'-webkit-background-size' : 'cover',
		'-moz-background-size' : 'cover',
		'background-size' : "cover",
		'width': '100%'
	})






});

















