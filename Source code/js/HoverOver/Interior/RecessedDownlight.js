// March 4, 2016
// Interior/ RecessedDownlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var RecessedDownlight = function () {
    var pName = ["L01", "L302", "L304", "L337", "L338-L337","L401", "L402"].concat(["L403", "L405","L500","L501","L502","L503-L52","L504-L57"]).concat(["L505-L65","L550"]);

    var menuName = "InteriorRecessedDownlight".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["275 lm",  "275 lm",  "275 lm", "22 lm", "22 lm", "1430 lm", "1430 lm"];
    var t2 = ["2860 lm", "2860 lm", "275 lm", "275 lm", "275 lm", "275 lm", "330 lm LEDs"];
    var t3 = ["275 lm", "275 lm"];
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
$('.slides_control  .InteriorRecessedDownlightImagebuttonL010,  \
    .slides_control .InteriorRecessedDownlightImagebuttonL3021, \
    .slides_control .InteriorRecessedDownlightImagebuttonL3042, \
    .slides_control .InteriorRecessedDownlightImagebuttonL3373, \
    .slides_control .InteriorRecessedDownlightImagebuttonL338-L3374, \
    .slides_control .InteriorRecessedDownlightImagebuttonL4015, \
    .slides_control .InteriorRecessedDownlightImagebuttonL4026, \
    .slides_control .InteriorRecessedDownlightImagebuttonL4037, \
    .slides_control .InteriorRecessedDownlightImagebuttonL4058, \
    .slides_control .InteriorRecessedDownlightImagebuttonL5009, \
    .slides_control .InteriorRecessedDownlightImagebuttonL50110, \
    .slides_control .InteriorRecessedDownlightImagebuttonL50211, \
    .slides_control .InteriorRecessedDownlightImagebuttonL503-L5212, \
    .slides_control .InteriorRecessedDownlightImagebuttonL504-L5713, \
    .slides_control .InteriorRecessedDownlightImagebuttonL505-L6514, \
    .slides_control .InteriorRecessedDownlightImagebuttonL55015 \
').hover(function (e) {
    RecessedDownlight.hoverover();
}, function () {
    RecessedDownlight.remove();
});

