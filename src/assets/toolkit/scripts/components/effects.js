
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

$('.reveal__close').on('click', function(){
	$('.reveal-overlay').css('display', 'none');
	$('body').removeClass('is-reveal-open');
});

// Filters

// var all= document.getElementsByClassName('filter-item');
// var filterBusiness = document.getElementsByClassName('filter-business')
// var filterBranding = document.getElementsByClassName('filter-branding')
// var filterCommercial= document.getElementsByClassName('filter-commercial')
// var filterComputers= document.getElementsByClassName('filter-computers')
// var filterConsumer= document.getElementsByClassName('filter-consumer')
// var filterHousewares= document.getElementsByClassName('filter-housewares')
// var filterInteraction= document.getElementsByClassName('filter-interaction')
// var filterMedial= document.getElementsByClassName('filter-medial')
// var filterRobotics= document.getElementsByClassName('filter-robotics')
// var filterWearable= document.getElementsByClassName('filter-wearable')

// function filteritem (type) {
//   //Set All to display none
//   for (var x = 0; x < all.length; x++) {
//     all[x].style.display = "none";
//   }
//   //set all items with filter to display block
//   for(var x = 0; x < type.length; x++){
//     type[x].style.display = "block"
//   }
// }
// document.getElementById('filter-wearable').onclick = function() {
//   filteritem(filterWearable)
// }
// document.getElementById('filter-robotics').onclick = function() {
//   filteritem(filterRobotics)
// }
// document.getElementById('filter-medial').onclick = function() {
//   filteritem(filterMedial)
// }
// document.getElementById('filter-interaction').onclick = function() {
//   filteritem(filterInteraction)
// }
// document.getElementById('filter-housewares').onclick = function() {
//   filteritem(filterHousewares)
// }
// document.getElementById('filter-consumer').onclick = function() {
//   filteritem(filterConsumer)
// }
// document.getElementById('filter-computers').onclick = function() {
//   filteritem(filterComputers)
// }
// document.getElementById('filter-commercial').onclick = function() {
//   filteritem(filterCommercial)
// }
// document.getElementById('filter-branding').onclick = function() {
//   filteritem(filterBranding)
// }
// document.getElementById('filter-business').onclick = function() {
//   filteritem(filterBusiness)
// }
// document.getElementById('filter-all').onclick = function() {
//   filteritem(all)
// }