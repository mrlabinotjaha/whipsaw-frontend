
var $ = require('jquery');

$(function(){

	var menu = $('.header__menu');

	$('.header__menu-toggle').on('click', function(){
		$('body').toggleClass('menu-open');

		if( $('body').hasClass('menu-open') ) {
			menu.stop().show().animate({
				opacity: 1
			});
		} else {
			menu.stop().animate({
				opacity: 0
			}, function() {
				menu.hide();
			});
		}
	});

});