// October 25, 2016
// Power Supplies/ Constant Voltage Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesConstantVoltageDriver = function () {
    var pName = ["TLDDLV60W24Vi", "TLDDLV60W5000", "TLDDLV100W4100", "TLDAV60W9V", "TLDAV60W12V", "TLDAV60W12V01iD", "TLDAV100W12V", "TLDAV100W15V"];
    pName = pName.concat(["TLDAV100W20V", "TLDAV96W24V", "TLDAV100W24V", "TLD12012V12W1", "TLDDLV10W12V", "TLDDLV10W24V", "TLDAV100W24V01"]);   

    var menuName = "PowerSuppliesConstantVoltageDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["60W", "60W", "100W", "60W", "60W", "60W", "100W", "100W"];
    var t2 = ["100W", "96W", "100W", "12W", "10W", "10W", "100W"];    

    var textArray = t1.concat(t2);

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
$('.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV60W24Vi0, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV60W50001, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV100W41002, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W9V3, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W12V4, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W12V01iD5, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W12V6, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W15V7, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W20V8, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV96W24V9, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V10, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLD12012V12W111, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV10W12V12, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV10W24V13, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V0114 \
').hover(function (e) {
    PowerSuppliesConstantVoltageDriver.hoverover();
}, function () {
    PowerSuppliesConstantVoltageDriver.remove();
});
