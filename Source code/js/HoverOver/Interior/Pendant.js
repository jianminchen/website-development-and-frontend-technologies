// March 4, 2016
// Interior/ Pendant
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorPendant = function () {    
    var p1 = ["L191", "L192", "L195", 'L196-L191', 'L197-L195','L199','L600','L603-L600'];
    var p2 = ['L630-L191', 'L631-L191', 'L632-L191', 'L640-L195', 'L641-L195', 'L642-L195', 'L650S-L107'];
    var p3 = ['L650M-L107','L650L-L107','L651',"P81L", "P96L", "P97L"];
    var p4 = ["P02", "P11", "P12", "P24", "P55", "P81", "P96", "P97"];    

    var pName = p1.concat(p2).concat(p3).concat(p4);   
    
    var menuName = "InteriorPendant".concat("Imagebutton");
    var cssClass = ".slides_control .";   

    var t1 = ["1870 lm (4')", "1870 lm (4')", "275 lm", "1870 lm (4')", "22 lm", "880lm","1430 lm", "2860 lm"];
    var t2 = ["1870 lm (4')", "1870 lm (4')", "1870 lm (4')", "110 lm LEDs", "110 lm LEDs", "110 lm LEDs", "1100 lm/ft"];
    var t3 = ["1100 lm/ft", "1100 lm/ft", "880 lm", "660 lm", "660 lm", "660 lm"];
    var t4 = [ "MR16", "MR16", "MR16", "MR16", "MR16", "BI-PIN", "BI-PIN", "MR16"];    

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

Test case:
1. Make sure that last product, no ',' 

*/
                    
$('.slides_control .InteriorPendantImagebuttonL1910, \
.slides_control .InteriorPendantImagebuttonL1921, \
.slides_control .InteriorPendantImagebuttonL1952, \
.slides_control .InteriorPendantImagebuttonL196-L1913, \
.slides_control .InteriorPendantImagebuttonL197-L1954, \
.slides_control .InteriorPendantImagebuttonL1995, \
.slides_control .InteriorPendantImagebuttonL6006, \
.slides_control .InteriorPendantImagebuttonL603-L6007, \
.slides_control .InteriorPendantImagebuttonL630-L1918, \
.slides_control .InteriorPendantImagebuttonL631-L1919, \
.slides_control .InteriorPendantImagebuttonL632-L19110, \
.slides_control .InteriorPendantImagebuttonL640-L19511, \
.slides_control .InteriorPendantImagebuttonL641-L19512, \
.slides_control .InteriorPendantImagebuttonL642-L19513, \
.slides_control .InteriorPendantImagebuttonL650S-L10714, \
.slides_control .InteriorPendantImagebuttonL650M-L10715, \
.slides_control .InteriorPendantImagebuttonL650L-L10716, \
.slides_control .InteriorPendantImagebuttonL65117, \
.slides_control .InteriorPendantImagebuttonP81L18, \
.slides_control .InteriorPendantImagebuttonP96L19, \
.slides_control .InteriorPendantImagebuttonP97L20, \
.slides_control .InteriorPendantImagebuttonP0221, \
.slides_control .InteriorPendantImagebuttonP1122, \
.slides_control .InteriorPendantImagebuttonP1223, \
.slides_control .InteriorPendantImagebuttonP2424, \
.slides_control .InteriorPendantImagebuttonP5525, \
.slides_control .InteriorPendantImagebuttonP8126, \
.slides_control .InteriorPendantImagebuttonP9627, \
.slides_control .InteriorPendantImagebuttonP9728 \
').hover(function (e) {
    InteriorPendant.hoverover();
}, function () {
    InteriorPendant.remove();
});







