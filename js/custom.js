$(document).ready(function(){
	if($('press_carousel_1').length || $('.press_carousel_2').length || $('.press_carousel_3').length){
		var owl1 = $('.press_carousel_1');
		var owl2 = $('.press_carousel_2');
		var owl3 = $('.press_carousel_3');
		owl1.owlCarousel({singleItem: true});
		owl2.owlCarousel({singleItem: true});
		owl3.owlCarousel({singleItem: true});
		$('.pc_1 .press_c_button_prev').on('click',function(){owl1.trigger('owl.prev');});
		$('.pc_1 .press_c_button_next').on('click',function(){owl1.trigger('owl.next');});
		$('.pc_2 .press_c_button_prev').on('click',function(){owl2.trigger('owl.prev');});
		$('.pc_2 .press_c_button_next').on('click',function(){owl2.trigger('owl.next');});
		$('.pc_3 .press_c_button_prev').on('click',function(){owl3.trigger('owl.prev');});
		$('.pc_3 .press_c_button_next').on('click',function(){owl3.trigger('owl.next');});
		}

});
$(window).load(function(){
	$(".toggle_link").click(function(){
		$(this).toggleClass("active")
		$($(this).attr("data-show")).slideToggle('slow');
	})
		
});