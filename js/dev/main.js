$(document).ready(function() {
	$('.popup-cb .popup-cb-wp .close').on('click', function() {
		$(this).parent().parent().parent('.popup-cb-wrapper').hide();
	});
	$('.callback-sv').on('click', function() {
		$('.popup-cb-wrapper').show();
		return false;
	});
	$('.header .search').on('click', function() {
		$('.header .search-block').toggle();
		return false;
	});
	$('.header .search-block .button').on('click', function() {
		$('.header .search-block').hide();
	});
	$('.f-page .amenities .item .link').on('click', function() {
		return false;
	});
	$(function() {
		if ($(window).width() > 1000) {
			$('.f-page .amenities .item .link .button').on('click', function() {
				$(this).toggleClass('rot45');
				$(this).parent().children('.text').toggleClass('t31');
				$(this).parent().children('.scroll').toggle();
				return false;
			});

			$('.f-page .amenities .item .link .scroll .item').on('click', function() {
				$(this).children('.sub-scroll').toggle();
			});

			$('.f-page .amenities .item .link').hover(function() {

			}, function() {
				$(this).children('.button').removeClass('rot45');
				$(this).children('.text').removeClass('t31');
				$(this).children('.scroll').hide();
			});
		}
	});
	$(function() {
		if ($(window).width() < 1000) {
			$('.f-page .amenities .item .link').on('click', function() {
				$(this).toggleClass('active-btn');
				$(this).children('.button').toggleClass('active');
				$(this).parent().children('.stoggle').stop(false, true).slideToggle();
			});
			$('.f-page .amenities .item .menu .item a').on('click', function() {
				$(this).children('.button').toggleClass('sub-button');
				$(this).parent().children('.sub-menu').stop(false, true).slideToggle();
				return false;
			});
		}
	});

});