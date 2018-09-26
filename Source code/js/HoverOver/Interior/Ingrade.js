//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 

-- March 11, 2016
For maintainance, the id is assumed to be in the sequential order, start from 0, increment one by one. 
Whenever a new ingrade is added, it is the array insertion operation for product name array and also wattage array. 
Go find the position, and then, insert the new production info. 

And here is the code in C# to generate the ID for each button of product: 
ImageButtonCustomized.cs 
line 28 - 31: 
public static string getID(int i, string pName)
    {
        return BUTTON + pName + i.ToString();
    }
*/
var InteriorIngrade = function () {
    var pName =          ["L01",       "L02",       "L03",       "L05",       "L06",       "L07",      "L08"];
    pName = pName.concat(["L09",       "L300",      "L301",      "L302",      "L303",      "L304",     "L305-L301"]);
    pName = pName.concat(["L306",      "L307-L301", "L310-L01",  "L312-L01",  "L315-L05",  "L320",     "L321-L301"]); 
    pName = pName.concat(["L324",      "L325-L301", "L337",      "L338-L337", "L339",      "L352",     "L358-L05"]);
    pName = pName.concat(["L359-L05",  "L360-L05",  "L366-L05",  "L368",      "L369",      "L370-L01", "L371-L02"]);
    pName = pName.concat(["L372-L300", "L373-L301", "L379-L03", "L382"]);

    var menuName = "InteriorIngrade".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "275 lm", "275 lm", "825 lm LEDs", "22 lm",  "22 lm",  "275 lm"];
    var t2 = ["275 lm", "275 lm", "275 lm", "275 lm", "275 lm", "275 lm", "275 lm"];
    var t3 = ["275 lm", "275 lm", "275 lm", "275 lm", "825 lm LEDs", "275 lm", "275 lm"];
    var t4 = ["275 lm", "275 lm", "22 lm", "22 lm", "22 lm", "825 lm", "825 lm LEDs"];
    var t5 = ["825 lm", "880 lm", "880 lm", "880 lm", "880 lm", "275 lm", "275 lm"];
    var t6 = ["275 lm", "275 lm", "275 lm", "110 lm"];
    
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
$('.slides_control .InteriorIngradeImagebuttonL010, \
   .slides_control .InteriorIngradeImagebuttonL021, \
   .slides_control .InteriorIngradeImagebuttonL032, \
   .slides_control .InteriorIngradeImagebuttonL053, \
   .slides_control .InteriorIngradeImagebuttonL064, \
   .slides_control .InteriorIngradeImagebuttonL075, \
   .slides_control .InteriorIngradeImagebuttonL086, \
   .slides_control .InteriorIngradeImagebuttonL097, \
   .slides_control .InteriorIngradeImagebuttonL3008, \
   .slides_control .InteriorIngradeImagebuttonL3019, \
   .slides_control .InteriorIngradeImagebuttonL30210, \
   .slides_control .InteriorIngradeImagebuttonL30311, \
   .slides_control .InteriorIngradeImagebuttonL30412, \
   .slides_control .InteriorIngradeImagebuttonL305-L30113, \
   .slides_control .InteriorIngradeImagebuttonL30614, \
   .slides_control .InteriorIngradeImagebuttonL307-L30115, \
   .slides_control .InteriorIngradeImagebuttonL310-L0116, \
   .slides_control .InteriorIngradeImagebuttonL312-L0117, \
   .slides_control .InteriorIngradeImagebuttonL315-L0518, \
   .slides_control .InteriorIngradeImagebuttonL32019, \
   .slides_control .InteriorIngradeImagebuttonL321-L30120, \
   .slides_control .InteriorIngradeImagebuttonL32421, \
   .slides_control .InteriorIngradeImagebuttonL325-L30122, \
   .slides_control .InteriorIngradeImagebuttonL33723, \
   .slides_control .InteriorIngradeImagebuttonL338-L33724, \
   .slides_control .InteriorIngradeImagebuttonL33925, \
   .slides_control .InteriorIngradeImagebuttonL35226, \
   .slides_control .InteriorIngradeImagebuttonL358-L0527, \
   .slides_control .InteriorIngradeImagebuttonL359-L0528, \
   .slides_control .InteriorIngradeImagebuttonL360-L0529, \
   .slides_control .InteriorIngradeImagebuttonL366-L0530, \
   .slides_control .InteriorIngradeImagebuttonL36831, \
   .slides_control .InteriorIngradeImagebuttonL36932, \
   .slides_control .InteriorIngradeImagebuttonL370-L0133, \
   .slides_control .InteriorIngradeImagebuttonL371-L0234, \
   .slides_control .InteriorIngradeImagebuttonL372-L30035, \
   .slides_control .InteriorIngradeImagebuttonL373-L30136, \
.slides_control .InteriorIngradeImagebuttonL373-L03137, \
   .slides_control .InteriorIngradeImagebuttonL38238' 
   ).hover(function (e) {
        InteriorIngrade.hoverover();
    }, function () {
        InteriorIngrade.remove();
    });