(function($) {
    $.fn.changingView = function(options)    {
        /*  options = { btnList,  idList }; 
            Each list are string values.    */
        // Default value setting with given value.
        var settings = $.extend({
            btnList: [],
            idList: []
        }, options);

        var lastClicked = -1;


        // Add each button to add modifing view function.
        for(var i = 0; i < settings.btnList.length; i++)    {
            var nowClicked = settings.btnList.indexOf($(this).attr('id'));
            $('#' + settings.btnList[i]).on("click", function() {
                $('#' + settings.idList[lastClicked]).toggleClass('viewNone');
                $('#' + settings.idList[nowClicked]).toggleClass('viewNone');
                lastClicked = nowClicked;
            });
        }

        return this;
    };
}(jQuery));