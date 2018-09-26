/// <reference path="basics/projectBasics.js" />
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

    /*
         June 28, 2016
         Maintenance: 
         maintenance 1: customize 4 images for L300 product. 

         Dec. 9, add one more - L05 Audain Art Meseum

     */
    $("img.ChangePhoto").click(function () {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");

        // maintenance 1 - June 28, 2016
        // Dec. 9, add one more - L05 Audain Art Meseum
        var customizedThumbnails = ["L300_thumbnail1",
                                    "L300_thumbnail2",
                                    "L300_thumbnail3",
                                    "L300_thumbnail4",
                                    "L05Meseum_thumbnail",
                                    "L109_thumbnail"
                                   ];

        var customizedImages = ["L300BarneyNYC/L302BarneyNewYork",
                                "L300BarneyNYC/L302BarneyNewYork_2",
                                "L300BarneyNYC/L302BarneyNewYork_3",
                                "L300BarneyNYC/L302BarneyNewYork_4",
                                "L05AudainArtMeseum/L05AudainArtMeseum",
                                "L109ApplicationMarch2017/L109_WallApplication"
                               ];

        for (var i = 0; i < customizedThumbnails.length; i++) {
            if (ImgSrc.search(customizedThumbnails[i]) > -1) {
                ImgSrc = "../img/projects/" + customizedImages[i] + ".jpg";
                break;
            }
        }
        // end of change of June 28, 2016 

        $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("normal");

        $(this).addClass('active_project');
        $('img.ChangePhoto').not(this).removeClass('active_project');
        return false;
    });


    $("#robson1").bind("click", function () {
        var selectedProject = 'Robson Square';
        populateProjectInfo(selectedProject);
    });

    $("#NYPalaceHotel1").bind("click", function () {
        var selectedProject = 'NY Palace Hotel';
        populateProjectInfo(selectedProject);
    });

    $("#CraftBeerMarket3").bind("click", function () {
        var selectedProject = 'Craft Beer Market';
        populateProjectInfo(selectedProject);
    });

    $("#Princeton1").bind("click", function () {
        var selectedProject = 'Princeton University';
        populateProjectInfo(selectedProject);

    });

    $.getScript("js/basics/projectBasics.js");   // Julia chen: March 29, 2016 added   

    // define a function to retrieve project detail from .json file
    function populateProjectInfo(selectedProject) {
        var jqxhr3 = $.getJSON("json/commercial.json", function (data) {
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

    // Go through .json file, and define click function
    // Julia made the code short: on March 28, 2016 
    // first one is cssClass name, second one is project_information2.json file's uniqueID 
    // some css class - shared by a few project photos 
    // Dec. 8, 2016   add Audain Art Meseum
    var jqxhr = $.getJSON("json/commercial.json", function (data) {

        $.each(data.projects, function (index, project) {
            //Julia made the code short: on March 28, 2016 
            //first one is cssClass name, second one is project_information2.json file's uniqueID 
            // Oct. 23, 2017 Add L182 Air Canada Lounge image
            var myArray = [
                ['L195L600L225Pistachio', 'Pistachio Restaurant October 26 2017'],
                ['L182AirCanadaLounge',  'L182 application photo October 23 2017'],
                ['L109ApplicationPhoto', 'L109 application photo March162017'],
                ['L196StJohnConventionCenter', 'L196 St. John Convention Center'],
                ['L05AudainArtMeseum', 'L05 Audain Art Meseum'],
                ['L05SonomaStudio', 'L05 Sonoma Recording Studio'],
                ['L47GeistBridge',  'L47 Geist Bridge Indiana 05272016'],
                ['L98VancouverSchool', 'L98 Vancouver School'],      
                ['L01VancouverHotel',  'L01 Vancouver Hotel'],       
                ['L03VancouverHotel',  'L03 Vancouver Hotel'],
                ['L300BarneysNewYork', 'L300 Barneys New York04202016'],
                ['PrincetonUniversity','Princeton University'],
                ['NYPalaceHotel', 'NY Palace Hotel'],
                ['craftBeerMarket', 'Craft Beer Market'],
                ['intactInsurance', 'Intact Insurance - Reception'],
                ['vinotecaCafe', 'Vinoteca Caffé & Trattoria'],
                ['robson', 'Robson Square'],
                ['BBTCA', 'Want Passport'],
                ['TVC', 'Thunder Valley Casino'],
                ['Coast', 'Coast Restaurant'],
                ['VM', 'Veterans Memorial - Northeastern University'],
                ['CDH', 'CDH Cancer Center'],
                ['KnoxvilleHighSchool', 'Knoxville High School Auditorium'],
                ['TsartlipHeathCareCentee1', 'Tsartlip Health Centre']
            ];

            // http://stackoverflow.com/questions/1676362/javascript-variable-binding-and-loop
            // spend more than 30 minutes to fix the bug, and then, recall to use closure 
            // callback function - how to design properly? 
            for (var i = 0; i < myArray.length; i++) {
                 (function () {
                    var closure_i1 = i;
                    $("." + myArray[closure_i1][0]).click(function () {                                           
                        //alert("Handler for .click() called.");  // alert help me to figure out the i value 17 - wrong
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