// For sideTogBtn plugin.
(function($) {
    $.fn.sideTogBtn = function(options)    {
        /* options = { shortWidth, longWidth, animateTime }; */

        // Setting local variavles.
        var settings = $.extend({
            shortWidth: this.css('width'),
            longWidth: this.css('width') * 4,
            animateTime: 400,
            toggleBtn: null,
            sideMenu: null,
            displayClass: null
        }, options);
        
        if(settings.toggleBtn != null){
            var sideBtn = settings.toggleBtn;
        }
        else {
            var sideBtn = $(this).children(".btnSpace").children(".sideTogBtn");
        }
        var sideBar = $(this);
        var hovering = true;
        if(settings.sideMenu != null) {
            var mainBox = settings.sideMenu;
            var mainLongWidth = mainBox.width();
            var mainShortWidth = mainBox.width() - settings.longWidth + settings.shortWidth;
        }
        if(settings.displayClass != null) {
            var displayer = settings.displayClass;
        }

        // 가장자리에 올라왔을 시 펴지는 Animation.
        sideBar.hover(function(){
            if(hovering) {
                mainBox.animate({width : mainShortWidth}, settings.animateTime);
                sideBar.animate({width : settings.longWidth}, settings.animateTime, function() {
                    displayer.css("display", "block");
                });
                hovering = false;
            }
        });

        // 버튼 누르면 다시 들어가는 Animation.
        sideBtn.click(function() {
            if(!hovering) {
                displayer.css("display", "none");
                mainBox.animate({width : mainLongWidth}, settings.animateTime);
                sideBar.animate({width : settings.shortWidth}, settings.animateTime, function() {
                    hovering = true;
                });
            }
        }); 

        return this;
    };
}(jQuery));