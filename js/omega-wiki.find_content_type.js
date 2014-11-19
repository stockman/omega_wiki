(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts

            /** create same content type for child **/

            //make this into a dropdown chooser?
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