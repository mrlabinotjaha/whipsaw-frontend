
var $ = require('jquery');

$(function(){

	$('.reveal__form--file-label').each(function(idx,el){

		var textEl = $(el).find('.reveal__form--file-label__text');
		var defaultText = textEl.text();

		$(el).find('input').change(function() {
		    var filename = $(this).val();
		    var lastIndex = filename.lastIndexOf("\\");
		    if (lastIndex >= 0) {
		        filename = filename.substring(lastIndex + 1);
		    }
		    textEl.text(filename || defaultText);
		});

	});

});