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

        }
    };
})(jQuery);