$(document).ready(function () {
    "use strict";
    //$('#carousel_project ul li a:first-child img').addClass('def_active');

    $('#carousel_project ul li a img,#carousel_project ul li a').click(function () {
        $('#carousel_project ul li a img').removeClass('def_active');
    });

    $("#slider").easySlider();
    $("#carousel_project").easySlider({
        prevText: ' ',
        nextText: ' ',
        auto: false,
        speed: 1000,
        pause: 3000,
        //continuous: true,	
        controlsShow: true,
    });

    //MainMenuSelectedProjects
    if ($("div").find("#MainMenuSelectedProjects").length) {
        $('.MenuItemsColorClass').css('color', '#333');
        $('[data-function=pj]').css('color', '#FCB31C');
    }

    $("img.ChangePhoto").click(function () {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("normal");

        $(this).addClass('active_project');
        $('img.ChangePhoto').not(this).removeClass('active_project');
        return false;
    });

    $("img.ChangePhoto").click(function () {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("normal");

        $(this).addClass('active_project');
        $('img.ChangePhoto').not(this).removeClass('active_project');
        return false;
    });        

    function productsLink() {
        var myTable = {};
        myTable['G03'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Pendant&ProductName=G03";

        myTable['L01'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Ingrade&ProductName=L01";
        myTable['L03'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Ingrade&ProductName=L03";
        myTable['L08'] = "../ProductsOverview.aspx?MainMenu=Exterior&SubMenu=Ingrade&ProductName=L08";
        myTable['L09'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Ingrade&ProductName=L09";
        myTable['L11'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=WallMount&ProductName=L11";

        myTable['L65'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Cabinet&ProductName=L65";

        myTable['L73'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L73";

        myTable['L92'] = "../ProductsOverview.aspx?MainMenu=Exterior&SubMenu=Bollard&ProductName=L92";
        
        myTable['L103'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Linear&ProductName=L103";
     

        myTable['L121'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Linear&ProductName=L121";

        myTable['L130'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=SurfaceMountDownlight&ProductName=L130";

        myTable['L134'] = "../ProductsOverview.aspx?MainMenu=Exterior&SubMenu=SurfaceMountDownlight&ProductName=L134";
        myTable['L141'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=RecessedDownlight&ProductName=L141";

        myTable['L145'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=RecessedDownlight&ProductName=L145";
        myTable['L146'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=RecessedDownlight&ProductName=L146";

        myTable['L151'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Linear&ProductName=L151";

        myTable['L182'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=WineRack&ProductName=L182";
        myTable['L191'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Pendant&ProductName=L191";

        myTable['L200'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L200";
        myTable['L221'] = "../ProductsOverview.aspx?MainMenu=Systems&SubMenu=SingleRail&ProductName=L221";
        myTable['L222'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L222";
        myTable['L401'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=RecessedDownlight&ProductName=L401";
        myTable['X01'] = "../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=X01";
        return myTable; 
    }
    
    var tableP = productsLink(); 
    var divFixtures = '<div class="grid_2 alhpa project_info_t ">FIXTURES</div>';
    var divLink = '<div class="grid_2 product_inl">';

    function linkStr(link, name) {
        return '<a href="' + link + '" target="_blank">' + name + '</a>';
    }
    
    function urlString(divFixtures, divLink, tableP, name) {
        return divFixtures + divLink + linkStr(tableP[name], name) + '</div>';         
    }

    function urlStringNoLink(divFixtures, divLink, tableP, name) {
        return divFixtures + divLink +  name + '</div>';
    }

    /*
      March 29, 2016 
      first elment is css class, please check house.aspx, 
      second elment includes the list of products
    */    
    var cssClassProductPair = [
        ['.G03_house', ['G03', 'L107', 'L401']],
        ['.L08_house', ['L08', 'L151', 'L01']],
        ['.L09_house', ['L09']],
        ['.L11_house', ['L11']],
        ['.L65_house', ['L65']],
        ['.L73_house', ['L73']],                    
        ['.L92_house', ['L92']],       
        ['.L130_house', ['L130']],
        ['.L134_house', ['L134']],
        ['.L141_house', ['L401', 'L200']],
        ['.L145_house', ['L103']],             
        ['.L146_house', ['L401','L222']], 
        ['.L151_house', ['L151',  'L01']],
        ['.L182_house', ['L182']],
        ['.L191_house', ['L191', 'L11']],
        ['.L221SR_house', ['L221']],
        ['.X01_house', ['X01','L121','L401']]        
    ];

    //http://stackoverflow.com/questions/3563107/jquery-html-vs-innerhtml
    // html() instead of html =   March 29, 2016
    //http://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery
    // use Jquery html instead of JavaScript innerhtml 
    // http://stackoverflow.com/questions/1676362/javascript-variable-binding-and-loop
    // use closure 
    // callback function - 
    for (var i = 0; i < cssClassProductPair.length; i++) {
        (function () {
            
            var closure_i1 = i;
            $(cssClassProductPair[closure_i1][0]).click(function () {
                var html = ''; 
                var list = cssClassProductPair[closure_i1][1];
                if (list.length == 1) {
                    var name = list[0];
                    html = urlString(divFixtures, divLink, tableP, name);                     
                }
                else if (list.length > 1) {
                    var i = 0;
                    var html = '';
                    for(; i<list.length; i++)
                    {
                        var name = list[i]; 
                        if (i == 0)
                            html += urlString(divFixtures, divLink, tableP, name);
                        else
                            html += urlString('', divLink, tableP, name);                         
                    }

                    html += '</div>';                   
                }

                $("#project_row_fixture").html(html);
            });
        })(); // use an immediately invoked anonymous function to capture 
              // the outer variable value i in a local variable closure_i1
    }                  
});