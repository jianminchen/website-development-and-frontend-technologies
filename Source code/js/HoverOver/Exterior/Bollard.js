// March 4, 2016
// Exterior/ Bollard
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorBollard = function () {
    var pName = ["L92", "L900"];    
    var menuName = "ExteriorBollard".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["275 lm", "880 lm"];;

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

$('.slides_control .ExteriorBollardImagebuttonL920, \
.slides_control .ExteriorBollardImagebuttonL9001 \
').hover(function (e) {
    ExteriorBollard.hoverover();
}, function () {
    ExteriorBollard.remove();
});







