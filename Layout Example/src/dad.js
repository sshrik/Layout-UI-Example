// For hbutton plugin.
function getDist(offset1, offset2) {
    // Get uclidean distance.
    var x = (offset1.x - offset2.x) * (offset1.x - offset2.x);
    var y = (offset1.y - offset2.y) * (offset1.y - offset2.y);

    return x + y;
}

function setOffset(offset, x, y) {
    offset.x = x;
    offset.y = y;
}

function changeChild(par, x, y) { 
    // Change x`th child to y`th child.
    var childX = par.children().eq(x);
    var childY = par.children().eq(y);

    if( x > y ) {
        par.children().eq(y).after(childX);
        par.children().eq(x).after(childY);
    }
    else {
        par.children().eq(x).after(childY);
        par.children().eq(y).after(childX);
    }

}

(function($) {
    $.fn.dadBox = function(options)    {
        /* options = { pre-opacity }; */

        var childNode = $(this).children();
        var par = $(this);

        // Set global variable for dadBox.
        var clickedIndex = -1; 

        // Setting mouse offset.
        var nowMouseOffset = new Object();
        var dragStartMouseOffset = new Object();
        var dragStartTargetOffset = new Object();
        var nowLoc = new Object();

        for(var i = 0; i < childNode.length; i++) {
            // Set all childe node draggable: true and set 'data-ch' to identify.;
            childNode.eq(i).attr('draggable', 'true');
            childNode.eq(i).attr('ch', par.attr('id') + '_ch-' + i);
        }

        $(this).on({
            mousedown: function(e) {
                setOffset(dragStartMouseOffset, e.pageX, e.pageY);
            },
            drag: function(e) {
                // Save now mouse location.
                setOffset(nowMouseOffset, e.pageX, e.pageY);

                nowLoc.x = dragStartTargetOffset.x + nowMouseOffset.x - dragStartMouseOffset.x;
                nowLoc.y = dragStartTargetOffset.y + nowMouseOffset.y - dragStartMouseOffset.y;

                // Set local variable for draggig.
                var childOffset = new Object();
                var index = childNode.length - 1;
                var small = 99999999999;

                for(var i = 0; i < childNode.length; i++) {
                    // Change offset to x / y.
                    setOffset(childOffset, childNode.eq(i).offset().left, childNode.eq(i).offset().top);

                    // Calc index;
                    var temp = getDist(nowLoc, childOffset);
                    if(small > temp) {
                        small = temp;
                        index = i;
                    }
                }
                console.log("Clicked : " + clickedIndex + " , Index : " + index);
                
                if(clickedIndex != index) {
                    changeChild(par, clickedIndex, index);
                    clickedIndex = index;
                }
            }
        });

        // Set child`s drag and drop event.
        $(document).on({
            dragstart: function(e) {
                // Set default setting.
                setOffset(dragStartTargetOffset, $(e.target).offset().left, $(e.target).offset().top);
                $(e.target).addClass('opacity_50');

                // Set clicked Index.
                for(var i = 0; i < childNode.length; i++)   {
                    if($(e.target).attr('ch') == childNode.eq(i).attr('ch')) clickedIndex = i;
                }
            },
            dragend: function(e) {
                // Initialize.
                $(e.target).removeClass('opacity_50');
                clickedIndex = -1;
            },
            dblclick: function(e) {
                $(e.target).remove();
            }
        }, '.dadItem');


        return this;
    };
}(jQuery));