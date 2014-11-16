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
            t1.attr("href", t1.attr("href") + a);

            /** freelinking **/
            /*
            -leverage the book from the above add child link
            for freelinking
            */

            //find the freelinking values
            t2 = $(".notfound")
            var f = t2.attr("href")
            var r = f.indexOf("title");
            e = "&edit[title]=" + f.substr(r+9,99);
            //add these value to the t1.child page adder
            t2.attr("href", t1.attr("href") + e);

            /** create same content type for child **/

            //make this into a separate js files with a dropdown chooser?
            //get the content type of the page
                //search body classes for class
            function getclasses (gc) {

              var cl = document.body.className.split(/\s+/);
              for (var i = 0; i < cl.length; i++) {
                //check to see if gc type is in the class list
                if (cl[i].indexOf(gc) > -1) {
                  var typer = cl[i]
                  return typer;
                  //console.log(typer);                        
                }
              }                

            }
            var h = getclasses("node-type-");
            //this works! 
            console.log("?q=node/add/" + h.substr(10,99));

            /* next steps
            -for book project types take the prority number
            to utilize the 1.x project creator thinggy
            same ct type
            */


        }
    };
})(jQuery);