
var $ = require('jquery');

$(function(){

	var menu = $('.header__menu');

	menu.on('click', function(e){
		if( !$(e.target).is('a') && !$(e.target).parents('a').length ) {
			closeMenu();
		}
	})

	$('.header__menu-toggle').on('click', function(){
		if( !$('body').hasClass('menu-open') ) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	function openMenu() {
		$('body').addClass('menu-open');
		menu.stop().show().animate({
			opacity: 1
		});
	}

	function closeMenu() {
		$('body').removeClass('menu-open');
		menu.stop().animate({
			opacity: 0
		}, function() {
			menu.hide();
		});
	}

});