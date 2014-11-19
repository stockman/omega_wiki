(function($) {



    Drupal.behaviors.freelinkingfix = {
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
            t1.attr("href", t1.attr("href") + a);

            /** freelinking **/
            /*
            -leverage the book from the above add child link
            for freelinking
            */
/*
            //find each freelink
            t2 = $(".notfound")
            t2.each(function() {
            var f = t2.attr("href") || '';
            var r = f.indexOf("title") || '';
            var e = "&edit[title]=" + f.substr(r+9,99) ||'';
            //add these value to the t1.child page adder
            t2.attr("href", t1.attr("href") + e);
            });
*/

/*


            t2 = $(".notfound")
            console.log(t2.text());
            var f = t2.attr("href") || '';
            var r = f.indexOf("title") || '';
            var e = "&edit[title]=" + f.substr(r+9,99) ||'';
            //add these value to the t1.child page adder
            t2.attr("href", t1.attr("href") + e);
*/

            /* next steps
            -for book project types take the prority number
            to utilize the 1.x project creator thinggy
            same ct type
            */


        }
    };
})(jQuery);