// For sideTogBtn plugin.
(function($) {
    $.fn.sideTogBtn = function(options)    {
        /* options = { shortWidth, longWidth, animateTime }; */

        // Setting local variavles.
        var settings = $.extend({
            shortWidth: this.css('width'),
            longWidth: this.css('width') * 4,
            animateTime: 400
        }, options);
        
        var sideBtn = $(this).children(".btnSpace").children(".sideTogBtn");
        var sideBar = $(this);
        var hovering = true;

        // 가장자리에 올라왔을 시 펴지는 Animation.
        sideBar.hover(function(){
            if(hovering) {
                sideBar.animate({width : settings.longWidth}, settings.animateTime, function() {
                    sideBtn.css("display", "block");
                });
                hovering = false;
            }
        });

        // 버튼 누르면 다시 들어가는 Animation.
        sideBtn.click(function() {
            if(!hovering) {
                sideBtn.css("display", "none");
                sideBar.animate({width : settings.shortWidth}, settings.animateTime, function() {
                    hovering = true;
                });
            }
        }); 

        return this;
    };
}(jQuery));