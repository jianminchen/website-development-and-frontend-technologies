$(document).ready(function () {
    "use strict";
    //$('#carousel_project ul li a:first-child img').addClass('def_active');

    $('#carousel_project ul li a img,#carousel_project ul li a').click(function () {
        $('#carousel_project ul li a img').removeClass('def_active');
    });

    $("#slider").easySlider();


    //MainMenuSelectedProjects
    if ($("div").find("#MainMenuSelectedProjects").length) {
        $('.MenuItemsColorClass').css('color', '#333');
        $('[data-function=pj]').css('color', '#FCB31C');
    }

    $("img.ChangePhoto").click(function () {
        var ImgSrc = $(this).attr("src");
        if (ImgSrc.search("L107_House_thumbnail") > -1)
            ImgSrc = "../img/projects/L107NorthVancouver/L107_House.jpg"

        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("normal");

        $(this).addClass('active_project');
        $('img.ChangePhoto').not(this).removeClass('active_project');
        return false;
    });
   
    $.getScript("js/basics/projectBasics.js");   // Julia chen: March 29, 2016 added   
    
    function populateProjectInfo(selectedProject) {
        var jqxhr3 = $.getJSON("json/residential.json", function (data) {
            $.each(data.projects, function (index, project) {
                if (project.uniqueID == selectedProject) {

                    var idArray = ["project_row_project",
                                   "project_row_location",
                                   "project_row_fixture",
                                   "project_row_code",
                                   "project_row_credit"];

                    var i = 0;
                    for (; i < 5; i++)
                        document.getElementById(idArray[i]).innerHTML = prepareHtml(i, project);
                }
            });
        })
        .done(function () { console.log("second success"); })
        .fail(function () { console.log("error"); })
    };
    // Maintenance notes:
    // First one in the array - class of the image - check residential.aspx 
    // Second one is the unique ID in residential.json, for retrieving the information 
    // March 29, 2016
    // use closure to help call back function setup 
    var jqxhr = $.getJSON("json/residential.json", function (data) {

        $.each(data.projects, function (index, project) {
            
            var myArray = [
                ['.BernardsvilleHouseApril202016', 'Bernardsville House April 20 2016'],
                ['.L97_6thVancouverResidence', 'L97 Private Vancouver Residence'],
                ['.L37GastownResident', 'L37 Gastown Vancouver Residence'],
                ['.L06L07', 'Private Residence'],
                ['.L107NorthVancouver', 'L107 North Vancouver House'],
                ['.NewJerseyDiningRoomP81L72', 'West Orange House May 17 2016'],
                ['.01L37', 'West 2nd Residence'],
                ['.wave', 'Wave House'],
                ['.Elma', 'Elma Bay House'],
                ['.penthouse', 'Downtown Penthouse']
            ];

            // http://stackoverflow.com/questions/1676362/javascript-variable-binding-and-loop
            // to use closure 
            // callback function 
            for (var i = 0; i < myArray.length; i++) {
                (function () {
                    var closure_i1 = i;
                    $(myArray[closure_i1][0]).click(function () {
                        
                        var uniqueID = myArray[closure_i1][1];
                        populateProjectInfo(uniqueID);
                    });
                })(); // use an immediately invoked anonymous function to capture the outer variable value i in a local variable closure_i1
            }                                                                                    
        });
    })
    .done(function () { console.log("second success"); })
    .fail(function () { console.log("error"); })

    $("#carousel_project").easySlider({
        prevText: ' ',
        nextText: ' ',
        auto: false,
        speed: 1000,
        pause: 3000,
        //continuous: true,	
        controlsShow: true,
    });

});