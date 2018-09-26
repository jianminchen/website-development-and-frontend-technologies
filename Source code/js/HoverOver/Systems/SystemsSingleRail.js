// March 4, 2016
// Systems/ Single Rail
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsSingleRail = function () {
    var p1 = ["L72", "L73", "L75", "L76", "P81L", "P96L", "X01"];
    var p2 = ["X02", "X06", "X31", "X42", "X45", "X51", "P02"];
    var p3 = ["P11", "P81", "P96"];     
       
    var pName = p1.concat(p2).concat(p3); 
     
    var menuName = "SystemsSingleRail".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["1320 lm LEDs",  "660 lm LEDs", "1100 lm LEDs", "660 lm LEDs", "660 lm", "660 lm", "MR16"];
    var t2 = ["AR111", "MR16", "MR16", "MR16", "MR16", "MR16", "MR16"];
    var t3 = ["MR16", "MR16",  "MR16"];      

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

$('.slides_control .SystemsSingleRailImagebuttonL720, \
.slides_control .SystemsSingleRailImagebuttonL731, \
.slides_control .SystemsSingleRailImagebuttonL752, \
.slides_control .SystemsSingleRailImagebuttonL763, \
.slides_control .SystemsSingleRailImagebuttonP81L4, \
.slides_control .SystemsSingleRailImagebuttonP96L5, \
.slides_control .SystemsSingleRailImagebuttonX016, \
.slides_control .SystemsSingleRailImagebuttonX027, \
.slides_control .SystemsSingleRailImagebuttonX068, \
.slides_control .SystemsSingleRailImagebuttonX319, \
.slides_control .SystemsSingleRailImagebuttonX4210, \
.slides_control .SystemsSingleRailImagebuttonX4511, \
.slides_control .SystemsSingleRailImagebuttonX5112, \
.slides_control .SystemsSingleRailImagebuttonP0213, \
.slides_control .SystemsSingleRailImagebuttonP1114, \
.slides_control .SystemsSingleRailImagebuttonP8115, \
.slides_control .SystemsSingleRailImagebuttonP9616 \
').hover(function (e) {
    SystemsSingleRail.hoverover();
}, function () {
    SystemsSingleRail.remove();
});







