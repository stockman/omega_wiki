(function($) {

    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts
            // for the user profiles
            // for project button ?
            $(".sampler").click(function() {
                $("table").slideToggle("fast");


            //autofocus on first field
            $(".form-text:first").focus();
            });
            /*
                $('.view-full-calendar').fullCalendar({
                    eventMouseover: function(event, jsEvent, view) {
                    $('.fc-event-inner', this).append('<div id=\"'+event.id+'\" class=\"hover-end\">'+$.fullCalendar.formatDate(event.end, 'h:mmt')+'</div>');
                    };

                    eventMouseout: function(event, jsEvent, view) {
                    $('#'+event.id).remove();
                    };

                });
*/
            //code ends
        }
    };
})(jQuery);
