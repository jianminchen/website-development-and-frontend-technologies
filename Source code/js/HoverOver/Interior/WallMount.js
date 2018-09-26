// March 4, 2016
// Interior/ WallMount
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorWallMount = function () {
    var pName =          ["L01",  "L02",      "L03",        "L08",  "L09",  "L11",      "L12"];
    pName = pName.concat(["L13",  "L14",      "L15",        "L16",  "L17",  "L22",      "L32"]);
    pName = pName.concat(["L36",  "L46",      "L47",        "L49",  "L91",  "L301",     "L302"]);
    pName = pName.concat(["L303", "L304",     "L307-L301",  "L652", "L711", "L712",     "L713"]);
    pName = pName.concat(["L714", "L715",     "L720",       "L721", "L730", "L741-L48"]);
    pName = pName.concat(["L750", "L760-L47", "L761-L47"]);

    var menuName = "InteriorWallMount".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["275 lm", "275 lm",     "275 lm",     "275 lm", "275 lm",     "275 lm",     "550 lm"];
    var t2 = ["275 lm", "275 lm",     "550 lm",     "275 lm", "550 lm",     "275 lm",     "275 lm"];
    var t3 = ["660 lm", "660 lm",     "660 lm",     "660 lm", "275 lm",     "275 lm",     "275 lm"];
    var t4 = ["275 lm", "275 lm",     "275 lm",     "880 lm", "275 lm",     "550 lm",     "275 lm"];
    var t5 = ["275 lm", "550 lm",     "1760 lm",    "880 lm", "275 lm",     "660 lm"];
    var t6 = ["110 lm", "660 lm",     "660 lm"];

    var textArray = t1.concat(t2).concat(t3).concat(t4).concat(t5).concat(t6);

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
$('.slides_control .InteriorWallMountImagebuttonL010, \
.slides_control .InteriorWallMountImagebuttonL021, \
.slides_control .InteriorWallMountImagebuttonL032, \
.slides_control .InteriorWallMountImagebuttonL083, \
.slides_control .InteriorWallMountImagebuttonL094, \
.slides_control .InteriorWallMountImagebuttonL115, \
.slides_control .InteriorWallMountImagebuttonL126, \
.slides_control .InteriorWallMountImagebuttonL137, \
.slides_control .InteriorWallMountImagebuttonL148, \
.slides_control .InteriorWallMountImagebuttonL159, \
.slides_control .InteriorWallMountImagebuttonL1610, \
.slides_control .InteriorWallMountImagebuttonL1711, \
.slides_control .InteriorWallMountImagebuttonL2212, \
.slides_control .InteriorWallMountImagebuttonL3213, \
.slides_control .InteriorWallMountImagebuttonL3614, \
.slides_control .InteriorWallMountImagebuttonL4615, \
.slides_control .InteriorWallMountImagebuttonL4716, \
.slides_control .InteriorWallMountImagebuttonL4917, \
.slides_control .InteriorWallMountImagebuttonL9118, \
.slides_control .InteriorWallMountImagebuttonL30119, \
.slides_control .InteriorWallMountImagebuttonL30220, \
.slides_control .InteriorWallMountImagebuttonL30321, \
.slides_control .InteriorWallMountImagebuttonL30422, \
.slides_control .InteriorWallMountImagebuttonL307-L30123, \
.slides_control .InteriorWallMountImagebuttonL65224, \
.slides_control .InteriorWallMountImagebuttonL71125, \
.slides_control .InteriorWallMountImagebuttonL71226, \
.slides_control .InteriorWallMountImagebuttonL71327, \
.slides_control .InteriorWallMountImagebuttonL71428, \
.slides_control .InteriorWallMountImagebuttonL71529, \
.slides_control .InteriorWallMountImagebuttonL72030, \
.slides_control .InteriorWallMountImagebuttonL72131, \
.slides_control .InteriorWallMountImagebuttonL73032, \
.slides_control .InteriorWallMountImagebuttonL741-L4833, \
.slides_control .InteriorWallMountImagebuttonL75034, \
.slides_control .InteriorWallMountImagebuttonL760-L4735, \
.slides_control .InteriorWallMountImagebuttonL761-L4736 \
').hover(function (e) {
    InteriorWallMount.hoverover();
}, function () {
    InteriorWallMount.remove();
});


