$(function(){

    var windowheight = $(window).height();
    var halfpage = windowheight / 2 - 91;
    console.log(windowheight);

    var top = $(".top");
    var logo = $(".logo");
    var arrow = $(".arrow")


    top.css ({ height: windowheight });
    logo.css({ "padding-top": halfpage });
    // arrow.css({ bo: windowheight })



    $(window).on("scroll", function(){

    	var st = $(document).scrollTop();
    	var sc = (-0.9/500) * st + 1
    	var scstr = 'scale('+ sc + ')'
    	console.log(sc)

    	logo.css({
    		// 'webkit-transform' : 'scale(0.5)'
    		'webkit-transform' : scstr
    	});


    });


 //   	console.log($(document).scrollTop());

 //    $(window).on("scroll", function() {
 //    	var sw = Math.min(322, $(document).scrollTop()) + 100;
 //    	var sh = Math.min(95, $(document).scrollTop()) + 100;

 //    	logo.width(sw).height(sh);
	// });



})
