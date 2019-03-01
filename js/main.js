(function($){
	$(function() {
		$('.menu_icon').on('click', function() {
			$(this).closest('.menu').toggleClass('menu_state_open');
		});
		$('.slick-vertical').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,      
			dots: false,
			vertical:true,
			adaptiveHeight: true, 			    
			nextArrow: '<button><img src="./img/down.png"></button>',
			prevArrow: '<button><img src="./img/up.png"></button>',     
		});
	});  
})(jQuery);

