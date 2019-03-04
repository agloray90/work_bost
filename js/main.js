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
			responsive: [
			{
				breakpoint: 992,

				settings: {
					vertical: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					nextArrow: '<button><img src="./img/left.png"></button>',			
					prevArrow: '<button><img src="./img/right.png"></button>',
					
				}
			}			
			]  
});
	});  
})(jQuery);

