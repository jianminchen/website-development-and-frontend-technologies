// March 4, 2016
// Systems/ SystemsSingleRailWallFlush
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsSingleRailWallFlush = function () {
    var p1 = ["L72", "L73", "X01", "X06", "X31", "X42", "X45"];
    var p2 = ["X51"]; 
    var pName = p1.concat(p2);
     
    var menuName = "SystemsSingleRailWallFlush".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["1320 lm LEDs", "660 lm LEDs", "MR16", "MR16", "MR16", "MR16", "MR16"];
    var t2 = ["MR16"]; 
    var textArray = t1.concat(t2); 

    hoverover = function () {
        var idArray = prepareIdArray(cssClass, menuName, pName);

        mouseHoverOverDetail(idArray, textArray);
    },
    remove = function () {
        var idArray = prepareIdArray(cssClass, menuName, pName);

        mouseHoverover_Remove(idArray);
    };  // compile error: , should be ; 

    return {
        hoverover: hoverover,
        remove: remove
    };
}();

/*
JavaScript multiple selector
https://api.jquery.com/multiple-selector/

Action item: 
How to concatenate the CSS class using string concatenation? 
*/

$('.slides_control .SystemsSingleRailWallFlushImagebuttonL720, \
.slides_control .SystemsSingleRailWallFlushImagebuttonL731, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX012, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX063, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX314, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX425, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX456, \
.slides_control .SystemsSingleRailWallFlushImagebuttonX517 \
').hover(function (e) {
    SystemsSingleRailWallFlush.hoverover();
}, function () {
    SystemsSingleRailWallFlush.remove();
});







