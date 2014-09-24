$(function(){

    var windowheight = $(window).height();
    var halfpage = windowheight / 2 - 91;
    console.log(windowheight);

    var top = $(".top");
    var logo = $(".logo");
    var arrow = $(".arrow");
    var subtitle = $('.subtitle');

    top.css ({ height: windowheight });
    logo.css({ "padding-top": halfpage });

	$(window).on("scroll", function(){

    	var st = $(document).scrollTop();
    	var sc = (-0.9/500) * st + 1
    	var scale = Math.max(sc, 0.59);
    	console.log(sc);

    	logo.css({ 'webkit-transform' : 'scale('+ scale + ')' });

    });


	$(window).scroll(function(){

		var subsc = Math.max(- $(window).scrollTop() / 0.7, -300 )
		subtitle.css('margin-top', subsc );
		
		console.log(- $(window).scrollTop() / 0.7);

	});









})




