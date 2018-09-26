// October 25, 2016
// Power Supplies/ Dimmable Driver
/*  julia code review 
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesDimmableDriver = function () {
    var pName = ["LED10W6001i","LED10W6002i","LED12W350i", "LED12W700i",  "LED16W700i", "LED18W3502i", "LED18W3503i",  "LED18W7002i"];
    pName = pName.concat(["LED25W1050i", "LED20W700i", "LED30W700i02","LED36W700i", "LED36W7003i", "TLC010i", "TLDDLV60W24Vi", "TLDDLV60W5000", "TLDDLV100W4100"]);
    pName = pName.concat(["TLDAV60W9V", "TLDAV60W12V", "TLDAV60W12V01iD", "TLDAV100W12V", "TLDAV100W15V", "TLDAV100W20V", "TLDAV96W24V", "TLDAV100W24V"]);
    pName = pName.concat(["TLDAV100W24V01"]); 

    var menuName = "PowerSuppliesDimmableDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["10W","10W","12W", "12W",  "16W", "18W", "18W", "18W"];
    var t2 = ["25W", "20W", "30W","36W", "36W", "Dimming Control", "60W", "60W", "100W"];
    var t3 = ["60W", "60W", "60W", "100W", "100W", "100W", "96W", "100W"];
    var t4 = ["100W"]; 

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
$('.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W6001i0, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W6002i1, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED12W350i2, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED12W700i3, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED16W700i4, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W3502i5, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W3503i6, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W7002i7, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED25W1050i8, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED20W700i9, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED30W700i0210, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED36W700i11, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED36W7003i12, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLC010i13, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDDLV60W24Vi14, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDDLV60W500015, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDDLV100W410016, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W9V17, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W12V18, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W12V01iD19, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W12V20, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W15V21, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W20V22, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV96W24V23, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V24, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V0125 \
').hover(function (e) {
    PowerSuppliesDimmableDriver.hoverover();
}, function () {
    PowerSuppliesDimmableDriver.remove();     
});
