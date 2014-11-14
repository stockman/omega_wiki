(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts

            /* Add book child link
            -adding tags
            */
            var t = ''
            $('.field--name-field-tags .field__items a').each(function() {
            t += $( this ).text() + ',';
            });
            var _href = $(".book_add_child.first > a").attr("href") + "&edit[field_tags][und]="; 
            $(".book_add_child.first > a").attr("href", _href + t);
            /* next step
            -find the article class
            if book then add book page
            if book project add book project page
            via this selector:
            instr type funtion?
            with a case when type thang?
            <article class="node node--book-project-page node--full node--book-project-page--full"
            */
        }
    };
})(jQuery);