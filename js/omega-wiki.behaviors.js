(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts

            /* Add book child link
            -adding tags
            */
            var t = ''
            //get tags
            $('.field--name-field-tags .field__items a').each(function() {
            t += $( this ).text() + ',';
            });

            //what to add to url
            var a = "&edit[field_tags][und]=" + t;
            //target 1 child add
            t1 = $(".book_add_child.first > a")
            //freelinking
            t2 = $(".notfound")

            //add "a" to all links where needed
            t1.attr("href", t1.attr("href") + a);
            t2.attr("href", t2.attr("href") + a);



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