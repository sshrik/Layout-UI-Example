(function($) {
    // For change view class add.
    function modifyView(index, idList) {
        /*  Need to modify to show classList[index].
            i : Integer value of classList`s index for add class "viewBlock".
            idList : String value list for view space id list.  */

       console.log(idList[index]);
        for(var i = 0; i < idList.length; i++) {
            // If i == index, add viewBlock and remove viewNone.
            if(i == index) {
                if($("#" + idList[i]).hasClass("viewNone")) {
                    $("#" + idList[i]).removeClass("viewNone")
                }
                if(!$("#" + idList[i]).hasClass("viewBlock")) {
                    $("#" + idList[i]).addClass("viewBlock")
                }
                console.log($("#" + idList[i]).attr('class'));
            }
            // else, add viewNone and remove viewBlock.
            else {
                if(!$("#" + idList[i]).hasClass("viewNone")) {
                    $("#" + idList[i]).addClass("viewNone")
                }
                if($("#" + idList[i]).hasClass("viewBlock")) {
                    $("#" + idList[i]).removeClass("viewBlock")
                }
                console.log($("#" + idList[i]).attr('class'));
            }
        }
    };

    $.fn.changingView = function(options)    {
        /*  options = { btnList,  idList }; 
            Each list are string values.    */
        // Default value setting with given value.
        var settings = $.extend({
            btnList: [],
            idList: []
        }, options);

        // Add each button to add modifing view function.
        for(var i = 0; i < settings.btnList.length; i++)    {
            $('#' + settings.btnList[i]).on("click", function() {
                modifyView(settings.btnList.indexOf($(this).attr('id')), settings.idList);
            });
        }

        return this;
    };
}(jQuery));