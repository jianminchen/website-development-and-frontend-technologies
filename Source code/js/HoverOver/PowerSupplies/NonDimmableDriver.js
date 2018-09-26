// October 25, 2016
// Power Supplies/ Non-Dimmable Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesNonDimmableDriver = function () {
    var pName = ["LED3W350", "LED3W700", "LED3W350L", "LED4W350", "LED4W700", "LED8W350L", "LED9W700L"];
    pName = pName.concat(["LED10W350D", "LED16W350700E", "LED17W700D", "LED25W1050", "LED40W1750", "LED20W700D277", "TLD12012V12W1"]);
    pName = pName.concat(["TLDDLV10W12V", "TLDDLV10W24V", "LED1CT10W350", "LED3W350P01", "LED8W350P01", "LED9W700P01", "LED4W410E"]);
    pName = pName.concat(["LED23W700E","LED25W210E","TLDDLV60W24Vi","TLDDLV100W4100"]); 

    var menuName = "PowerSuppliesNonDimmableDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["3W", "3W", "3W", "4W", "4W", "8W", "9W"];
    var t2 = ["10W", "16W", "17W", "25W", "40W", "20W", "12W"];
    var t3 = ["10W", "10W", "10W", "3W", "8W", "9W", "4W"];
    var t4 = ["23W","25W","60W","100W"]; 

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
$('.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W3500, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W7001, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W350L2, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W3503, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W7004, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED8W350L5, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED9W700L6, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED10W350D7, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED16W350700E8, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED17W700D9, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED25W105010, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED40W175011, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED20W700D27712, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLD12012V12W113, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV10W12V14, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV10W24V15, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED1CT10W35016, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W350P0117, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED8W350P0118, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED9W700P0119, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W410E20, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED23W700E21, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED25W210E22, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV60W24Vi23, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV100W410024 \
').hover(function (e) {
    PowerSuppliesNonDimmableDriver.hoverover();
}, function () {
    PowerSuppliesNonDimmableDriver.remove();     
});
