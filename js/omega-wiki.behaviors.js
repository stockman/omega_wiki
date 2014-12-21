(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts

			//check to see if content type is stock type
			if ($('.node-type-stock').length) {
				//create a link to nasdaq earnings

				$('.pane-page-title').append('<a id="reflectedlink" href="" target="_blank"> Ticker</a>');
				var t = $('.pane-page-title h2').text();
				var link= document.getElementById('reflectedlink');
				link.href = "http://www.nasdaq.com/earnings/report/" + t;
				link.firstChild.data= link.href;

			}
			
			// note google css3 not working, etc.  http://stackoverflow.com/questions/4919963/css3-transform-not-working

			//for the search glyph (added fontawesome search icon too)
			var eder = $('#edit-search-block-form--2').parent().find("label");
				eder.addClass('glyphicon glyphicon-search fa fa-search search-icon');
				//unhide the search lablel
				eder.removeClass('element-invisible');
				eder.text('');
			//other
        }
    };
})(jQuery);