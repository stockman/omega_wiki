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
			
		//for the search glyph (added fontawesome search icon too)
		//autofocus seearch?
			var inputWidth = '240px',
			inputWidthReturn = '30px';
			var sir = $('#edit-search-block-form--2');
			sir.addClass('sirclosed');
			// animate seach box
			sir.focus(function(){
			//clear the text in the box.
				$(this).val(function() {
					$(this).removeClass('sirclosed');
					$(this).addClass('siropen').attr('placeholder', 'Search for...');
				}),
				//animate the box
				$(this).animate({
					width: inputWidth
					}, "fast" );
			});
			// close box
			sir.blur(function(){
				$(this).removeClass('siropen').animate({
					width: inputWidthReturn
					}, "fast" );
				$(this).addClass('sirclosed');
				$(this).attr('placeholder', '').val('');
			});

		
        }
    };
})(jQuery);