(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts
            // for the user profiles

                $( ".btn" ).click(function() {
                $( ".ProjectsLanding" ).slideToggle("medium");
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
