// March 4, 2016
// Interior/ Spotlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorSpotlight = function () {
    var pName = ["L53-L52", "L72", "L73", "L75", "L76", "L200", "L225S"];
    pName = pName.concat(["L225M", "L225L", "L507-L53", "L730", "X01", "X02", "X06"]);
    pName = pName.concat(["X31", "X42", "X45", "X51", "X61", "X62", "X101"]);     

    var menuName = "InteriorSpotlight".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "1320 lm LEDs", "660 lm LEDs", "1100 lm LEDs", "660 lm LEDs", "660 lm LEDs", "440 lm LEDs"];
    var t2 = ["880 lm", "1430 lm", "275 lm", "275 lm", "LED MR16", "LED MR16", "LED MR16"];
    var t3 = ["LED MR16", "LED MR16", "LED MR16", "LED MR16", "LED MR16", "LED MR16", "LED MR16"];
    
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
$('.slides_control .InteriorSpotlightImagebuttonL53-L520, \
.slides_control .InteriorSpotlightImagebuttonL721, \
.slides_control .InteriorSpotlightImagebuttonL732, \
.slides_control .InteriorSpotlightImagebuttonL753, \
.slides_control .InteriorSpotlightImagebuttonL764, \
.slides_control .InteriorSpotlightImagebuttonL2005, \
.slides_control .InteriorSpotlightImagebuttonL225S6, \
.slides_control .InteriorSpotlightImagebuttonL225M7, \
.slides_control .InteriorSpotlightImagebuttonL225L8, \
.slides_control .InteriorSpotlightImagebuttonL507-L539, \
.slides_control .InteriorSpotlightImagebuttonL73010, \
.slides_control .InteriorSpotlightImagebuttonX0111, \
.slides_control .InteriorSpotlightImagebuttonX0212, \
.slides_control .InteriorSpotlightImagebuttonX0613, \
.slides_control .InteriorSpotlightImagebuttonX3114, \
.slides_control .InteriorSpotlightImagebuttonX4215, \
.slides_control .InteriorSpotlightImagebuttonX4516, \
.slides_control .InteriorSpotlightImagebuttonX5117, \
.slides_control .InteriorSpotlightImagebuttonX6118, \
.slides_control .InteriorSpotlightImagebuttonX6219, \
.slides_control .InteriorSpotlightImagebuttonX10120 \
').hover(function (e) {
    InteriorSpotlight.hoverover();
}, function () {
    InteriorSpotlight.remove();
});

