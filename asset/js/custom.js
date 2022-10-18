jQuery(document).ready(function($) {	

	// $('#loginf').on('click',function(e){
	// 	var texts = $('#login').val();
	// 	$.ajax({ 
	// 		url: '/ajax',
	// 		type: 'POST',
	// 		data: {text : texts}, 
	// 		success: function(datas){
	// 		   alert(datas)
	// 		}
	//   });    
	// }); 

	var swiper = new Swiper(".client_slider_logo", {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		  navigation: {
			nextEl: ".client-next",
			prevEl: ".client-prev",
		  },
      });

	  var swiper = new Swiper(".main-slider-site", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


	  var filterList = {
	
		init: function () {
		
			// https://mixitup.kunkalabs.com/
			$('#gallery').mixItUp({
				selectors: {
  			  target: '.gallery-item',
  			  filter: '.filter'	
  		  },   
			});								
		
		}

	};
	
	// Filter ALL the things
	filterList.init();

	
});