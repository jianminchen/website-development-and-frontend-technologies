// March 4, 2016
// Exterior/ Submersible
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorSubmersible = function () {
    var p1 = ["L01",  "L03",  "L05",  "L06",  "L07",  "L08",  "L300"];
    var p2 = ["L302", "L304", "L306", "L320", "L324", "L337", "L338-L337"];
    var p3 = ["L352","L370-L01", "L372-L300", "L379-L03"];
    var pName = p1.concat(p2).concat(p3); 
    var menuName = "ExteriorSubmersible".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["275 lm",   "275 lm",   "825 lm LEDs", "22 lm", "22 lm", "275 lm", "275 lm"];
    var t2 = ["275 lm", "275 lm", "275 lm", "275 lm", "275 lm", "22 lm", "22 lm"];
    var t3 = ["825 lm LEDs", "275 lm", "275 lm", "275 lm"];
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

$('.slides_control .ExteriorSubmersibleImagebuttonL010, \
.slides_control .ExteriorSubmersibleImagebuttonL031, \
.slides_control .ExteriorSubmersibleImagebuttonL052, \
.slides_control .ExteriorSubmersibleImagebuttonL063, \
.slides_control .ExteriorSubmersibleImagebuttonL074, \
.slides_control .ExteriorSubmersibleImagebuttonL085, \
.slides_control .ExteriorSubmersibleImagebuttonL3006, \
.slides_control .ExteriorSubmersibleImagebuttonL3027, \
.slides_control .ExteriorSubmersibleImagebuttonL3048, \
.slides_control .ExteriorSubmersibleImagebuttonL3069, \
.slides_control .ExteriorSubmersibleImagebuttonL32010, \
.slides_control .ExteriorSubmersibleImagebuttonL32411, \
.slides_control .ExteriorSubmersibleImagebuttonL33712, \
.slides_control .ExteriorSubmersibleImagebuttonL338-L33713, \
.slides_control .ExteriorSubmersibleImagebuttonL338-L35214, \
.slides_control .ExteriorSubmersibleImagebuttonL370-L0115, \
.slides_control .ExteriorSubmersibleImagebuttonL372-L30016, \
.slides_control .ExteriorSubmersibleImagebuttonL379-L0317').hover(function (e) {
    ExteriorSubmersible.hoverover();
}, function () {
    ExteriorSubmersible.remove();
});







