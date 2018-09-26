// March 4, 2016
// Exterior/ Ingrade
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorIngrade = function () {
    var p1 = ["L01",  "L03",  "L05",       "L06",       "L07",      "L08",     "L300"];
    var p2 = ["L302", "L304", "L306",      "L310-L01",  "L312-L01", "L320",    "L324"];
    var p3 = ["L337", "L338-L337", "L339", "L352",      "L358-L05", "L360-L05","L366-L05"];
    var p4 = ["L368", "L370-L01",  "L372-L300", "L379-L03", "L382"]; 
    var pName = p1.concat(p2).concat(p3).concat(p4);

    var menuName = "ExteriorIngrade".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "275 lm", "825 lm LEDs", "22 lm", "22 lm", "275 lm", "275 lm"];
    var t2 = ["275 lm", "275 lm", "275 lm", "275 lm", "275 lm", "275 lm", "275 lm"];
    var t3 = ["22 lm",  "22 lm",  "22 lm", "825 lm LEDs", "825 lm LEDs", "880 lm", "880 lm"];
    var t4 = ["880 lm", "275 lm", "275 lm", "275 lm", "110 lm"];
    var textArray = t1.concat(t2).concat(t3).concat(t4);

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

$('.slides_control .ExteriorIngradeImagebuttonL010, \
.slides_control .ExteriorIngradeImagebuttonL031, \
.slides_control .ExteriorIngradeImagebuttonL052, \
.slides_control .ExteriorIngradeImagebuttonL063, \
.slides_control .ExteriorIngradeImagebuttonL074, \
.slides_control .ExteriorIngradeImagebuttonL085, \
.slides_control .ExteriorIngradeImagebuttonL3006, \
.slides_control .ExteriorIngradeImagebuttonL3027, \
.slides_control .ExteriorIngradeImagebuttonL3048, \
.slides_control .ExteriorIngradeImagebuttonL3069, \
.slides_control .ExteriorIngradeImagebuttonL310-L0110, \
.slides_control .ExteriorIngradeImagebuttonL312-L0111, \
.slides_control .ExteriorIngradeImagebuttonL32012, \
.slides_control .ExteriorIngradeImagebuttonL32413, \
.slides_control .ExteriorIngradeImagebuttonL33714, \
.slides_control .ExteriorIngradeImagebuttonL338-L33715, \
.slides_control .ExteriorIngradeImagebuttonL33916, \
.slides_control .ExteriorIngradeImagebuttonL35217, \
.slides_control .ExteriorIngradeImagebuttonL358-L0518, \
.slides_control .ExteriorIngradeImagebuttonL360-L0519, \
.slides_control .ExteriorIngradeImagebuttonL366-L0520, \
.slides_control .ExteriorIngradeImagebuttonL36821, \
.slides_control .ExteriorIngradeImagebuttonL370-L0122, \
.slides_control .ExteriorIngradeImagebuttonL372-L30023, \
.slides_control .ExteriorIngradeImagebuttonL379-L0324, \
.slides_control .ExteriorIngradeImagebuttonL38225').hover(function (e) {
    ExteriorIngrade.hoverover();
}, function () {
    ExteriorIngrade.remove();
});







