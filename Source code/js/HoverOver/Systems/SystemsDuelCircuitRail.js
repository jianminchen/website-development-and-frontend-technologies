// March 4, 2016
// Systems/ DualCircuitRail
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsDualCircuitRail = function () {
    var p1 = ["L72", "L73", "L75", "L76", "P81L", "P96L", "X01"];
    var p2 = ["X06", "X31", "X42", "X45", "X51",  "P02",  "P11"];
    var p3 = ["P81", "P96"];    
     
    var pName = p1.concat(p2).concat(p3);
     
    var menuName = "SystemsDualCircuitRail".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["1320 lm LEDs", "660 lm LEDs", "1100 lm LEDs", "660 lm LEDs", "660 lm", "660 lm", "MR16"];
    var t2 = ["MR16", "MR16", "MR16", "MR16", "MR16", "MR16", "MR16"];
    var t3 = ["MR16", "MR16"];
       

    var textArray = t1.concat(t2).concat(t3);

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

$('.slides_control .SystemsDualCircuitRailImagebuttonL720, \
.slides_control .SystemsDualCircuitRailImagebuttonL731, \
.slides_control .SystemsDualCircuitRailImagebuttonL752, \
.slides_control .SystemsDualCircuitRailImagebuttonL763, \
.slides_control .SystemsDualCircuitRailImagebuttonP81L4, \
.slides_control .SystemsDualCircuitRailImagebuttonP96L5, \
.slides_control .SystemsDualCircuitRailImagebuttonX016, \
.slides_control .SystemsDualCircuitRailImagebuttonX067, \
.slides_control .SystemsDualCircuitRailImagebuttonX318, \
.slides_control .SystemsDualCircuitRailImagebuttonX429, \
.slides_control .SystemsDualCircuitRailImagebuttonX4510, \
.slides_control .SystemsDualCircuitRailImagebuttonX5111, \
.slides_control .SystemsDualCircuitRailImagebuttonP0212, \
.slides_control .SystemsDualCircuitRailImagebuttonP1113, \
.slides_control .SystemsDualCircuitRailImagebuttonP8114, \
.slides_control .SystemsDualCircuitRailImagebuttonP9615 \
').hover(function (e) {
    SystemsDualCircuitRail.hoverover();
}, function () {
    SystemsDualCircuitRail.remove();
});







