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






    docHeight = document.documentElement.offsetHeight;
    console.log(docHeight);

	  
	  window.addEventListener( 'scroll', function() {
	        // normalize scroll position as percentage
	    var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
	        transformValue = 'scale('+scrolled+')';

	    logo.css({


	     })

	    logo.style.WebkitTransform = transformValue;
	    logo.style.MozTransform = transformValue;
	    logo.style.OTransform = transformValue;
	    logo.style.transform = transformValue;
	    
	  }, false);
	  




 //   	console.log($(document).scrollTop());

 //    $(window).on("scroll", function() {
 //    	var sw = Math.min(322, $(document).scrollTop()) + 100;
 //    	var sh = Math.min(95, $(document).scrollTop()) + 100;

 //    	logo.width(sw).height(sh);
	// });





	   //  $(window).on("scroll", function(){

    // 	var st = $(document).scrollTop();
    // 	var sc = (-0.9/500) * st + 1
    // 	var scstr = 'scale('+ sc + ')'
    // 	console.log(sc)

    // 	logo.css({
    //    		'webkit-transform' : scstr
    // 	});


    // });




})
