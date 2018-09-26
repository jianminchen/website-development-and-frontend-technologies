// March 4, 2016
// Exterior/ WallMount
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorWallMount = function () {
    var pName = ["L01", "L03", "L08", "L16", "L17", "L22", "L36"];
    pName = pName.concat(["L46", "L47", "L49", "L91", "L302", "L304", "L720"]);
    pName = pName.concat(["L721", "L730", "L740-L48", "L761-L47"]);

    var menuName = "ExteriorWallMount".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "275 lm", "275 lm", "275 lm", "550 lm LEDs", "275 lm", "660 lm"];
    var t2 = ["660 lm", "660 lm", "660 lm", "275 lm", "275 lm", "275 lm", "1760 lm"];
    var t3 = ["880 lm", "275 lm", "660 lm", "660 lm"];
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
$('.slides_control .ExteriorWallMountImagebuttonL010, \
.slides_control .ExteriorWallMountImagebuttonL031, \
.slides_control .ExteriorWallMountImagebuttonL082, \
.slides_control .ExteriorWallMountImagebuttonL163, \
.slides_control .ExteriorWallMountImagebuttonL174, \
.slides_control .ExteriorWallMountImagebuttonL225, \
.slides_control .ExteriorWallMountImagebuttonL366, \
.slides_control .ExteriorWallMountImagebuttonL467, \
.slides_control .ExteriorWallMountImagebuttonL478, \
.slides_control .ExteriorWallMountImagebuttonL499, \
.slides_control .ExteriorWallMountImagebuttonL9110, \
.slides_control .ExteriorWallMountImagebuttonL30211, \
.slides_control .ExteriorWallMountImagebuttonL30412, \
.slides_control .ExteriorWallMountImagebuttonL72013, \
.slides_control .ExteriorWallMountImagebuttonL72114, \
.slides_control .ExteriorWallMountImagebuttonL73015, \
.slides_control .ExteriorWallMountImagebuttonL740-L4816, \
.slides_control .ExteriorWallMountImagebuttonL761-L4717 \
').hover(function (e) {
    ExteriorWallMount.hoverover();
}, function () {
    ExteriorWallMount.remove();
});


