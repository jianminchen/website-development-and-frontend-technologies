// October 25, 2016
// Power Supplies/ Constant Current Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesConstantCurrentDriver = function () {
    var pName = ["LED10W6001i","LED10W6002i","LED12W350i", "LED12W700i", "LED16W350700E", "LED16W700i", "LED18W3502i", "LED18W3503i"];
    pName = pName.concat(["LED18W7002i", "LED25W1050i", "LED20W700i", "LED30W700i02","LED36W700i", "LED36W7003i", "LED3W350", "LED3W700", "LED4W350"]);
    pName = pName.concat(["LED4W700", "LED3W350L", "LED8W350L", "LED9W700L", "LED10W350D", "LED17W700D", "LED25W1050"]);
    pName = pName.concat(["LED40W1750", "LED20W700D277", "LED3W350P01", "LED8W350P01", "LED9W700P01", "LED4W410E", "LED23W700E"]);
    pName = pName.concat(["LED25W210E"]); 

    var menuName = "PowerSuppliesConstantCurrentDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["10W","10W","12W", "12W", "16W", "16W", "18W", "18W"];
    var t2 = ["18W", "25W", "20W", "30W","36W", "36W", "3W", "3W", "4W"];
    var t3 = ["4W", "3W", "8W", "9W", "10W", "17W", "25W"];
    var t4 = ["40W", "20W", "3W", "8W", "9W", "4W", "23W"];
    var t5 = ["25W"]; 

    var textArray = t1.concat(t2).concat(t3).concat(t4).concat(t5);

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
$(' .slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W6001i0, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W6002i1, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED12W350i2, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED12W700i3, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED16W350700E4, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED16W700i5, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W3502i6, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W3503i7, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W7002i8, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED25W1050i9, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED20W700i10, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED30W700i0211, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED36W700i12, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED36W7003i13, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W35014, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W70015, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W35016, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W70017, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W350L18, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED8W350L19, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED9W700L20, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W350D21, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED17W700D22, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED25W105023, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED40W175024, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED20W700D27725, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W350P0126, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED8W350P0127, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED9W700P0128, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W410E29, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED23W700E30, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED25W210E31 \
').hover(function (e) {
    PowerSuppliesConstantCurrentDriver.hoverover();
}, function () {
    PowerSuppliesConstantCurrentDriver.remove();
});
