//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 
*/
var InteriorSurfaceMountDownlight = function () {
    var pName = ["L130", "L131", "L508-L52", "L509-L52", "L600","L603-L600","L610-L600"];   

    var menuName = "InteriorSurfaceMountDownlight".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var textArray = ["825 lm", "825 lm", "275 lm","275 lm","1430 lm", "2860 lm", "880 lm"];

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
InteriorSurfaceMountDownlight
InteriorSurfaceMountDownlightImagebuttonL6004
*/
$('.slides_control .InteriorSurfaceMountDownlightImagebuttonL1300, \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL1311,    \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL508-L522,    \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL509-L523,    \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL6004,    \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL603-L6005, \
.slides_control .InteriorSurfaceMountDownlightImagebuttonL610-L6006 \
').hover(function (e) {
        InteriorSurfaceMountDownlight.hoverover();
 }, function () {
        InteriorSurfaceMountDownlight.remove();
 });