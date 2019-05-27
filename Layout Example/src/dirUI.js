// For hbutton plugin.
(function($) {
    $.fn.dirUI = function(options)    {
        /* options = { shortText, longText, shortWidth, longWidth, animateTime }; */

        // Default value setting with given value.
        var settings = $.extend({
            shortText: options.longText[0],
            shortWidth: this.css('height'),
            animateTime: 400
        }, options);

        this.css('width', settings.shortWidth);
        $(this).text(settings.shortText);

        // Add Hovering animation / event to $(this).
        $(this).hover(function() {
            $(this).animate({width : settings.longWidth}, settings.animateTime, function(){ $(this).text(settings.longText) });
        }, function() {
            $(this).stop(true, true);
            $(this).text(settings.shortText)
            $(this).animate({width : settings.shortWidth}, settings.animateTime);
        });
        
        return this;
    };
}(jQuery));