
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
    	autoplaySpeed: 3000,
    	infinite: true,
    	speed: 1000,
    	cssEase: 'linear',
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	asNavFor: '.slider-nav-gallery',
    	pauseOnHover: false,
    	centerPadding: 0
  	

  	});

$('.slider-nav-gallery').slick({
  	  slidesToShow: 2,
  	  slidesToScroll: 1,
  	  asNavFor: '.naso-remodel-gallery-corousel',
  	  centerMode: true,
  	  focusOnSelect: true,
  	  arrows: false,
  	  dots: true
  	});

  $('.video-thumbs').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});






