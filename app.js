$(document).ready(function (){
	$('.navButton').mouseenter(function(){
		$(this).animate({opacity:'1'},600);
	});

	$('.navButton').mouseleave(function(){
		$(this).animate({opacity:'.25'},600);
	});
});