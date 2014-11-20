
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isMobile = true;
}else{
	isMobile = false;
}

	
$(function(){

	$("article>a").each(function(){

		var div = $(this);
		var path = $(this).attr("data-background");

		var img = '<img src="' + path + '">';

		div.animate({opacity:0},0);

		$(img).load(function(){
			div.css({
				'background': "url(" + path + ")" + "no-repeat 50% 50% scroll",
			    '-webkit-background-size' : 'cover',
			    '-moz-background-size' : 'cover',
			    'background-size' : "cover"
			})
			setTimeout(function(){
				div.animate({opacity:1},1000);
			}, Math.random()*1000)
		});


		//hove effect
		if(!isMobile){
			$('div', this).hide();
			$(this).hover(
				function(){
					$('div', this).fadeIn(200);
				},
				function(){
					$('div', this).fadeOut(500);
				}

			);

		}

	})

});

	
























