$(document).ready(function (){
	// $('.home').mouseenter(function(){
	// 	$('.home').css({'opacity':'1'});
	// });
	// $('.home').mouseleave(function(){
	// 	$('.home').css({'opacity':'.25'});
	// });
	function onMouseLeave(){
		$(this).mouseleave(function(){
			$(this).css({'opacity':'.25'});
		});
	}

		function onMouseEnter(){
		$(this).mouseenter(function(){
			$(this).css({'opacity':'1'});
		});
	}

	$('.home').mouseenter(onMouseEnter);
	$('.home').mouseleave(onMouseLeave);
	$('.history').mouseenter(onMouseEnter);
	$('.history').mouseleave(onMouseLeave);
});