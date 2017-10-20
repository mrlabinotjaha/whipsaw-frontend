
var $ = require('jquery');

$(function(){
	var workToggle = $('.work-filter__toggle');

	if( !workToggle.length ) return;

	var activeClass = 'work-filter__li--active';
	var modal = $('.work-filter__reveal');
	var current = $('.work-filter__current');
	var filtersOpen = false;

	workToggle.on('click', function(e){
		e.preventDefault();
		toggleFilters();
	});

	$('.work-filter__li a').on('click', function(e) {
		e.preventDefault();

		var busy = false;
		if(window.filtersBusy && typeof window.filtersBusy == 'function') {
			busy = window.filtersBusy();
		}

		if( busy ) return;

		current.text($(this).text());

		$('body').trigger('filter_change', {category: $(this).data('category') });
		
		$('.'+activeClass).removeClass(activeClass);
		$(this).parent().addClass(activeClass);

		toggleFilters();
	});

	function toggleFilters() {
		if( filtersOpen ) {
			filtersOpen = false;
			modal.stop().animate({opacity:0}, 100, function(){
				modal.hide();
			});
		} else {
			filtersOpen = true;
			modal.stop().show().animate({opacity:1}, 100);
		}
	}
});