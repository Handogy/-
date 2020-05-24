$(function(){
	// Анимированное лого в промо
	var showLogo = true; // показывать лого или нет, да - true, нет - false

	if (showLogo) {
		$('.promo-info').addClass('hide')
		$('.promo-logo').addClass('show')

		setTimeout(function(){
			$('.promo-info').removeClass('hide')
			$('.promo-logo').removeClass('show')
		}, 5000)
	}

	// Анимированное появление страницы
	setTimeout(function(){
		$('body').addClass('show')
	}, 300)


	// Доабвление цифер в количестве игроков
	setInterval(function(){
		var number = parseInt($('.promo-info__note .count').text())

		number = number + 3;

		$('.promo-info__note .count').text(number)
	}, 1000)
	
	
	// Табы при наведении
	$('.tabs_container-h').each(function(){
	    $(this).find('.tab_content-h:first').show()
	})

	$('body').on('mouseover', '.tabs-h li', function(e) {
		let parent = $(this).closest('.tabs_container-h')
	    let activeTab = $(this).attr('hoverId')

	    parent.find('.tab_content-h').hide(0)

	    $(activeTab).fadeIn(0)
	})

	$('body').on('mouseleave', '.tabs-h', function(e) {
    	let parent = $(this).closest('.tabs_container-h')

	    parent.find('.tab_content-h').hide(0)
	    parent.find('.tab_content-h:first').fadeIn(0)
	})

	// Main banner
	$('.slider-news .slider.owl-carousel').owlCarousel({
		nav: false,
		items: 1,
		dots: true,
		margin: 0,
		loop: true,
		autoplay: true,
	})

	// Streams slider
	$('.streams-slider.owl-carousel').owlCarousel({
		nav: true,
		items: 4,
		dots: false,
		margin: 11,
		loop: false,
		autoplay: false,
	})

	// Video slider
	$owlVideo = $('.videos-slider.owl-carousel').owlCarousel({
		nav: true,
		items: 2,
		dots: false,
		margin: 16,
		loop: true,
		autoplay: false,
	})

	$('.videos-slider__arrow-left').click(function(e) {
		e.preventDefault()

		$owlVideo.trigger('prev.owl.carousel')
	})

	$('.videos-slider__arrow-right').click(function(e) {
		e.preventDefault()

		$owlVideo.trigger('next.owl.carousel')
	})

	// Прилипание соц.иконок
	$(".socials").stick_in_parent({
		parent: '.wrap',
		offset_top: 10,
	});
	
	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false
			}
		})
	})

	// Увеличение картинки
	$('.fancy_img').fancybox({
		backFocus : false,
		trapFocus : false,
		autoFocus : false
	})

	// Кастомный select
	$('select.select-nice').niceSelect()

    //Анимация в полях форм
	$('.form .input, .form textarea').each(function(){
        var field_value = $(this).val()

        if (field_value.length > 0) {
            $(this).addClass('full')
        } else {
            $(this).removeClass('full')
        }
	})
    $('.form .input, .form textarea').change(function() {
        var field_value = $(this).val()

        if (field_value.length > 0) {
            $(this).addClass('full')
        } else {
            $(this).removeClass('full')
        }
    })


    // Табы
	var locationHash = window.location.hash
	$('.tabs_container').each(function(){
	    $(this).find('> .tab_content:first').show()
	})

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).data('content')
        	let level = $(this).data('level')

		    parent.find('.tabs:first').find('button').removeClass('active')
		    parent.find('.tab_content.' + level).hide()

		    $(this).addClass('active')
		    $(activeTab).fadeIn()
	    }
	})

	if( locationHash && $('.tabs_container').length ) {
		let activeTab = $('.tabs button[data-content='+ locationHash +']')
		let parent = activeTab.closest('.tabs_container')
    	let level = activeTab.data('level')

		parent.find('.tabs:first').find('button').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		$(locationHash).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $(locationHash).offset().top
		}, 1000)
	}

    
    // Появление подсказки при вводе символов в форму
    $('.input.coins-input').keyup(function() {
        var length = $(this).val().length;
        var parent = $(this).closest('.line_form');

        if (length > 0) {
        	parent.find('.coins__info').addClass('active');
        }else{
        	parent.find('.coins__info').removeClass('active');
        }

    })
});

console.log('\'Allo \'Allo!');