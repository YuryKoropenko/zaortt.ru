$(document).ready(function() {
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