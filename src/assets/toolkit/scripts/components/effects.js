
var $ = require('jquery');

$(function(){

	var elements = $("*[data-effect");

	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		var wHeight = $(window).height();

		// console.log(scrollTop, wHeight);

		elements.each(function(idx,el){

			el = $(el);
			var elTop = el.position().top;
			var elHeight = el.outerHeight();
			// var ID = el.attr('class').split(' ')[0];

			// console.log(ID, elTop, elHeight );

			var transformMatrix = el.css("-webkit-transform") ||
			   el.css("-moz-transform")    ||
			   el.css("-ms-transform")     ||
			   el.css("-o-transform")      ||
			   el.css("transform");
			 var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
			 var x = matrix[12] || matrix[4];//translate x
			 var y = matrix[13] || matrix[5];//translate y

			var delay = 50;

			var elTopB = Math.max(60, (elTop-y) + delay) <= scrollTop+wHeight;
			var elBottomB = Math.max(60, (elTop-y)+elHeight - delay) >= scrollTop;


			if( elTopB && elBottomB ) {
				el.addClass('showability').removeClass('invisibility invisibility-bottom invisibility-top');
			} else {
				el.removeClass('showability').addClass('invisibility');

				if( elTopB ) {
					el.addClass('invisibility-top');
				} else {
					el.removeClass('invisibility-top');
				}

				if( elBottomB ) {
					el.addClass('invisibility-bottom');
				} else {
					el.removeClass('invisibility-bottom');
				}
			}

		});

	}).trigger('scroll');


});