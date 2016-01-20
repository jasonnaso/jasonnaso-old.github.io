
$(document).ready(function(){

  	$('.naso-remodel-index-corousel').slick({

		  autoplay: true,
	  	autoplaySpeed: 3000,
		  infinite: true,
	  	speed: 1000,
	  	cssEase: 'linear',
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	pauseOnHover: false,
	  	fade: true,
	  	dots: true
});

$('.naso-remodel-gallery-corousel').slick({

    	autoplay: true,
    	autoplaySpeed: 3000,//change speed
    	infinite: true,
    	speed: 500,//Speed of fade in
    	cssEase: 'linear',
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: true,
    	fade: true,
    	asNavFor: '.slider-nav-gallery',
    	pauseOnHover: false,
    	centerPadding: 0,
      dots: false
});

$('.slider-nav-gallery').slick({

  	  slidesToShow: 4,
  	  slidesToScroll: 1,
  	  asNavFor: '.naso-remodel-gallery-corousel',
  	  centerMode: true,
  	  focusOnSelect: false,
  	  arrows: false
  	  
});


});






