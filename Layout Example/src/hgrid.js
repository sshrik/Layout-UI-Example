// For hbutton plugin.
(function($) {
    $.fn.hgrid = function(options)    {
        /* options = { shortWidth, animateTime }; that width mean frame number. */

        // Default value setting with given value.
        var settings = $.extend({
            shortWidth: this.css('height'),
            animateTime: 400
        }, options);

        this.css('width', settings.shortWidth);
        $(this).text(settings.shortText);

        // Add Hovering animation / event to $(this).
        $(this).hover(function() {
            $(this).animate({width : settings.longWidth}, settings.animateTime);
        }, function() {
            $(this).stop(true, true);
            $(this).animate({width : settings.shortWidth}, settings.animateTime);
        });
        
        return this;
    };
}(jQuery));