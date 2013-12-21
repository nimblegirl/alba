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
	/*lookbook*/
		if($('.lookbook_list').length){
			$(".lookbook_list").owlCarousel({
				items: 2,
				slideSpeed: 800
			});
		}
		$('.prev').on('click',function(){
			$(".lookbook_list").trigger('owl.prev');
		});
		$('.next').on('click',function(){
			$(".lookbook_list").trigger('owl.next');
		});
		if($('.lookbook').length){
			var _W = $('.lookbook_list .owl-item').width();
		   	$(".lookbook").mousewheel(function(event, delta) {
				if(delta < 0){
					$(".lookbook_list").trigger('owl.next');
				}else if(delta > 0){
					$(".lookbook_list").trigger('owl.prev');
				}
				$('.lookbook_list .owl-item').animate({'width':_W},300);
		    	event.preventDefault();
		   	});
	   	}
	   	$('.lookbook_list .owl-item').on('mouseenter',function(){
	   		$(this).find('.hover_container').removeClass('rollout');
	   		$(this).find('.hover_container').addClass('rollin');
	   	});
	   	$('.lookbook_list .owl-item').on('mouseleave',function(){
	   		$(this).find('.hover_container').removeClass('rollin');
	   		$(this).find('.hover_container').addClass('rollout');
	   	});
	/*end lookbook*/

	/* BG GALLERY*/

    var container = $('.parallax_container');
    container.children('ul').children('li').each(function(){
        var h = $(window).height() - $('.navigation_wrap').height() + 250 ,
            w = $(this).children('img').width(),
            bg = $(this).children('img').attr('src');

        console.log($(this).css('border-top'))
        $(this).css({'background-image':'url(' + bg + ')','height':h, 'width' : '100%'});
        $(this).children('img').hide();
    });
    if($('.ftleft').length){
	   	$.fn.waypointInit = function(classN,offset,delay){
			return $(this).waypoint(function(direction){
				var current = $(this);
				if(direction === 'down'){
					if(delay !== 0){
						setTimeout(function(){
							current.addClass(classN);
						},delay);
					}
					else{
						$(this).addClass(classN);
					}
				}else
                {
                    setTimeout(function(){
                        element.removeClass(classN);
                    },delay);
                }

			},{ offset : offset })
		};
		// synchronise
		$.fn.waypointSynchronise = function(synchroniseElement,offset,classN,delay){
			var element = $(this);
			 return $(synchroniseElement).waypoint(function(direction){
				if(direction === 'down'){
					setTimeout(function(){
						element.addClass(classN);
					},delay);
				}

			},{ offset : offset });
		};
		$('.text_container h2.ftleft').waypointInit('ftleft-finished','500px');
		$('.text_container p.ftleft').waypointSynchronise('.text_container h2.ftleft','500px','ftleft-finished',200);
		$('.text_container a.ftleft').waypointSynchronise('.text_container h2.ftleft','500px','ftleft-finished',400);
		if($(window).width() > 1400){
			$('.shop_mini_section span.ftleft_pos:first-child').waypointInit('ftleft_pos_finished', ($(window).height() + 250) + 'px',0);
			$('.shop_mini_section span.ftleft_pos:nth-child(2)').waypointInit('ftleft_pos_finished',($(window).height() + 250)+ 'px',150);
		}
		else if($(window).width() < 1400){
			$('.shop_mini_section span.ftleft_pos:first-child').waypointInit('ftleft_pos_finished',($(window).height() + 250),0);
			$('.shop_mini_section span.ftleft_pos:nth-child(2)').waypointInit('ftleft_pos_finished',($(window).height()  + 250),150);
		}
	}
	if($('.navigation_wrap.home').length){
		$('.navigation_wrap').waypoint(function(direction){
			if(direction === 'down'){
				$(this).addClass('sticky');
			}
			else if(direction === 'up'){
				$(this).removeClass('sticky');
			}
		},{offset : -1});
	}
	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}
	function keydown(e) {
	    for (var i = keys.length; i--;) {
	        if (e.keyCode === keys[i]) {
	            preventDefault(e);
	            return;
	        }
	    }
	}
	function wheel(e) {
	  preventDefault(e);
	}
	function disable_scroll() {
	  if (window.addEventListener) {
	      window.addEventListener('DOMMouseScroll', wheel, false);
	  }
	  window.onmousewheel = document.onmousewheel = wheel;
	  document.onkeydown = keydown;
	}
	function enable_scroll() {
	    if (window.removeEventListener) {
	        window.removeEventListener('DOMMouseScroll', wheel, false);
	    }
	    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
	}

	// globale variables
	var next = $('.parallax_container.type1').next(),
	collBanner1 = $('.parallax_container.type1 .collection_banner');

	if(next.length){
		next.waypoint(function(direction){
			if(direction === "down"){
				collBanner1.removeClass('in').animate({'top':-600},800);
			}else if(direction === "up"){
				collBanner1.animate({'top':61},300).addClass('fixed');
			}
		},{offset : 600 });
	}
	if($('.bottom_arrow').length){
	$('.bottom_arrow').waypoint(function(direction){
		var curr = $(this);
		if(direction === "down"){
			curr.addClass('out');
		}
		else if(direction === "up"){
			curr.removeClass('out');
		}
	},{offset:400});
	}
	$('.parallax_container ul li').each(function(){

		$(this).waypoint(function(direction){
			if(direction === 'down'){

                if (! $(this).hasClass('bottom-in-view')){
                    $(this).addClass('bottom-in-view');
                    disable_scroll();
                    if (! $(this).hasClass('locked')){
                        $(this).addClass('locked');
                        $(window).scrollTop($(this).offset().top - $('.navigation_wrap').height() + 250)
                    } else{

                        $('.parallax_container ul li').removeClass('locked');
                        $('.text_container.mercedes').removeClass('locked')
                    }

                    setTimeout(enable_scroll,1000);
                } else{
                    $('.parallax_container ul li').removeClass('bottom-in-view');
                }
			}
		},{offset : 40});

        $(this).waypoint(function(direction){
            if(direction === 'up'){
                $(this).removeClass('locked');
            }
        },{offset : 0});

	});
	if($('.text_container.mercedes').length){
    $('.text_container.mercedes').waypoint(function(direction){
        if(direction === 'down'){

            if (! $(this).hasClass('bottom-in-view')){
                $(this).addClass('bottom-in-view');
                disable_scroll();
                if (! $(this).hasClass('locked')){
                    $(this).addClass('locked');
                    /*$(window).animate(
                        {
                            'scrollTop': ($(this).offset().top - $('.navigation_wrap').height())
                        }, 10000,  function() {
                            // Animation complete.
                        });
                        */
                    $(window).scrollTop($(this).offset().top - $('.navigation_wrap').height());
                } else{

                    $('.text_container.mercedes').removeClass('locked');
                }

                setTimeout(enable_scroll,1000);
            } else{
                $(this).removeClass('bottom-in-view');
            }
        } else {
            $(this).removeClass('bottom-in-view');
			$(this).removeClass('locked');
        }
    },{offset : 200});

	$.waypoints('refresh');
	}
	// submenu
	var mContainer = $('nav[role="navigation"] .menu'),
	fHeight = 0;
	if(mContainer.find('.sub_menu').length){
		mContainer.find('ul').each(function(){
			fHeight += $(this).outerHeight();
		});
		fHeight += mContainer.children('li').children('ul.sub_menu').position().top - 22;
		mContainer.closest('nav[role="navigation"]').css('height',fHeight);
	}
});
$(window).load(function(){
	$(".toggle_link").click(function(){
		$(this).toggleClass("active")
		$($(this).attr("data-show")).slideToggle('slow');
	})
	$(".lookbook_list").trigger('owl.next');
	$(".lookbook_list").trigger('owl.next');	
});