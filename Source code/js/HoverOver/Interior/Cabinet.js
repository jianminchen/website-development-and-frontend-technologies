// March 4, 2016
// Interior/ Cabinet
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorCabinet = function () {
    var pName = ["L51", "L52", "L57", "L64", "L65", "L67", "L101"];
    pName = pName.concat(["L102", "L107", "L109", "L110-L109", "L500", "L501", "L502"]);
    pName = pName.concat(["L503-L52", "L504-L57", "L505-L65", "L508-L52","L509-L52","L550"]);

    var menuName = "InteriorCabinet".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["275 lm", "275 lm", "330 lm", "275 lm", "275 lm", "275 lm", "Max 880 lm/ft"];
    var t2 = ["Max 506 lm/ft", "Max 1320 lm/ft", "Max 275 lm/ft", "Max 275 lm/ft", "275 lm", "275 lm", "275 lm"];
    var t3 = ["275 lm", "3x110 lm LEDs", "275 lm", "275 lm", "275 lm", "275 lm"];

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
$('.slides_control .InteriorCabinetImagebuttonL510, \
.slides_control .InteriorCabinetImagebuttonL521, \
.slides_control .InteriorCabinetImagebuttonL572, \
.slides_control .InteriorCabinetImagebuttonL643, \
.slides_control .InteriorCabinetImagebuttonL654, \
.slides_control .InteriorCabinetImagebuttonL675, \
.slides_control .InteriorCabinetImagebuttonL1016, \
.slides_control .InteriorCabinetImagebuttonL1027, \
.slides_control .InteriorCabinetImagebuttonL1078, \
.slides_control .InteriorCabinetImagebuttonL1099, \
.slides_control .InteriorCabinetImagebuttonL110-L10910, \
.slides_control .InteriorCabinetImagebuttonL50011, \
.slides_control .InteriorCabinetImagebuttonL50112, \
.slides_control .InteriorCabinetImagebuttonL50213, \
.slides_control .InteriorCabinetImagebuttonL503-L5214, \
.slides_control .InteriorCabinetImagebuttonL504-L5715, \
.slides_control .InteriorCabinetImagebuttonL505-L6516, \
.slides_control .InteriorCabinetImagebuttonL508-L5217, \
.slides_control .InteriorCabinetImagebuttonL509-L5218, \
.slides_control .InteriorCabinetImagebuttonL55019 \
').hover(function (e) {
    InteriorCabinet.hoverover();
}, function () {
    InteriorCabinet.remove();     
});
