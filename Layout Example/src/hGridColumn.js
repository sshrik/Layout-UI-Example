// For hbutton plugin.
(function($) {
    $.fn.hGridColumn = function(options)    {
        /* options = { shortWidth, longWidth, animateTime }; that width mean frame number. */

        var parent = $(this);
        var chil = parent.children();
        var size = chil.length;
        
        // Default value setting with given value.
        var settings = $.extend({
            shortWidth: 1,
            longWidth: 2,
            animateTime: 400
        }, options);
        
        /* grid-template-columns: repeat(n, 1fr); */
        var shortOption = 'repeat(' + String(size * settings.shortWidth) + ', ' + String(settings.shortWidth) + 'fr)';
        $(this).css('grid-template-columns', shortOption);

        // Add hovering event for all children of parent(hGridColumn class).
        for(i = 0; i < size; i++)   {
            chil.eq(i).hover(function(){
                // $(this) mean hovering evented object == curChil.
                var longOption = '';

                for(var j = 0; j < size; j++)   {
                    if(chil.eq(j).attr('id') !=  $(this).attr('id'))    longOption = longOption + String(settings.shortWidth) + 'fr ';
                    else    longOption = longOption + String(settings.longWidth) + 'fr ';
                }

                parent.css('grid-template-columns', longOption);

                /* Browser not support for animate 'grid-template-columns'. */
                //parent.animate({'grid-template-columns' : longOption}, settings.animateTime);
            }, function() {
                parent.css('grid-template-columns', shortOption);

                /* Browser not support for animate 'grid-template-columns'. */
                //parent.animate({'grid-template-columns' : shortOption}, settings.animateTime);
            });
        }
        
        return this;
    };
}(jQuery));