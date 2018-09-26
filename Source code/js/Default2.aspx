<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="_Default_2" MasterPageFile="~/MasterPage.master"%>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Default" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/slideshow.css")%>"/>    
    <script src="<%=ResolveUrl("~/js/slides.unpacked.js")%>"></script>  
        <!--[if IE]>
   <script type="text/javascript">
            var $buoop = {
                
                text: "For optimal viewing of this website, please use Internet Explorer 9 or lower as your browser.",
                newwindow: true
            }
            $buoop.ol = window.onload;
            window.onload = function () {
                try { if ($buoop.ol) $buoop.ol(); } catch (e) { }
                var e = document.createElement("script");
                e.setAttribute("type", "text/javascript");
                e.setAttribute("src", "http://browser-update.org/update.js");
                document.body.appendChild(e);
            }
    </script> 
<![endif]-->
	<script>
	    /*
            Design talk by Julia Chen on May 4, 2017
	            Maintenance note for mobile website: 
                April 21, 2017 
                Image for mobile device 
                vertical   - 1008 * 1200
                horizontal - 1008 * 800
                First using dummy image with numbers to show which parts are displayable on devices. 
                Customize the images properly. 
            May 4, 2017 Need to look into tablet display on Samsung device, need to solve layout issue on horizontal

        */
	    $(document).ready(function () {
	        $('#slides').slides({
	            preload: true,
	            preloadImage: 'img/slideshow/loading.gif',
	            generatePagination: true,
	            play:  5000,   
	            pause: 3000,
	            //hoverPause: true,
	            effect: 'fade',
	            // Get the starting slide
	            start: 1
	        });

	        $('html, body').css('overflowY', 'hidden');
	        //$("html, body").css({ "height": ($(window).height() - 1) + 'px', "overflow": "hidden" });	      
                   	        
	        var idSlides = getIdSlides();           

	        var clickable = getClickableIds();

	        addDesktopHandling(clickable);
	        
	        addMobileDeviceHandling(idSlides);
	        
	        /// maintainable notes
            /// sorted by alphabetic order
	        function getIdSlides() {
	            var ids = [];

	            // div ids for each slide
	            ids.push("#ID_L225L");
	            ids.push("#ID_L610");	            
	            
	            ids.push("#ID_L195");	           
	            ids.push("#ID_L360-L05");           	           	           
	            ids.push("#ID_L730");
	            ids.push("#ID_L930");

	            return ids.join(',');
	        }

	        /// maintainable notes:
            /// sort by alphabetic order
	        function getClickableIds() {
	            var clickableIds = [];

	            // div ids for each clickable area	
	            clickableIds.push("#clickable_L225L");
	            clickableIds.push("#clickable_L610");	            

	            clickableIds.push("#clickable_L195");	           
	            clickableIds.push("#clickable_L360-L05");	            	            	                       	           	           	           
	            clickableIds.push("#clickable_L730");	            
	            clickableIds.push("#clickable_L930");

	            return clickableIds.join(',');
	        }

	        function addDesktopHandling(clickable)
	        {
	            addDesktopBackgroundImages();
	            addDesktopConfiguration(clickable);
	        }

	        function addDesktopConfiguration(clickable)
	        {	            
	            $(clickable).css({
	                'width':  '1008px',
	                'height': '700px',
	                'float':  'left'
	            });
	        }

            /// computer display compared to mobile phone
            /// desktop image - background image setting
	        function addDesktopBackgroundImages() {                 
                var path = "img/slideshow/desktop/";

                var imageFiles = [];

                imageFiles.push(["#ID_L225L", "L225L.jpg"]);
                imageFiles.push(["#ID_L610",  "L610.jpg"]);                

	            imageFiles.push(["#ID_L195", "L195.jpg"]);	           
	            imageFiles.push(["#ID_L360-L05", "L360-L05.jpg"]);	           	           	           
	            imageFiles.push(["#ID_L730", "L730.jpg"]);
	            imageFiles.push(["#ID_L930", "L930.jpg"]);	           
	            

	            for (var i = 0; i < imageFiles.length; i++) {
	                var cube = imageFiles[i];
	                var id = cube[0];
	                var image = cube[1];
	                $(id).css('background-image', 'url(' + path + image + ') ');
	            }
	        }

	        /// design talk 
	        /// 1. background-position - left 15%, compared to desktop center center 4/27/2017
	        /// 2. horizontal/ vertical images are cut and stored in separate folders
	        /// 3. need to look into horizontal/ vertical determination factor: 400, find the article and document here
	        /// http://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
	        /// 4. clickable area - need to tune the area
            /// 5. ? 
	        function addMobileDeviceHandling(idSlides, clickable) {
	            var isMobile = mobileNeedAdjustment();
	            if (!isMobile)
	                return;
	            
	            mobileDeviceCssPreparation(idSlides, clickable);

	            // Need to do more research to support this 400px - 
	            // vertical/ horizontal claim 4/21/2017	            
	            // window.innerHeight  > 400 => window.innerHeight > window.innerWidth
	            var windowIsVertical   = window.innerHeight > window.innerWidth;
	            var windowIsHorizontal = window.innerWidth  > window.innerHeight;

	            if (windowIsVertical) {                
	                mobileDeviceVerticalCss(idSlides, clickable);

	                // images - manual check on iphone and samsung device
	                addMobileDeviceVerticalImages();                                         
	            }
	            else if (windowIsHorizontal) {
	                mobileDeviceHorizontalCss(idSlides, clickable);

	                // horizontal images - manual test mobile device on the images    
	                addMobileDeviceHorizontalImages();
	            }	            	        
	        }

	        /// important highlights:
            /// mobile device 
	        function mobileDeviceCssPreparation(idSlides, clickable) {
	            // move background image to left top whereas desktop is center center - 4/27/2017
	            $("#content.full_screen .slide").css('background-position', 'left 15%');

	            // reset min-width of body, otherwise, H-scroll is disabled
	            $("body").css('min-width', '1008px');
	            /* $("body").css('min-height', '328px');  */

	            $("body").css('overflow-x', 'scroll');
	            $("body").css('overflow-y', 'scroll');

	            /*
                  Design of scroll - on y scroll bar only
                    not good to scroll ?
                    'overflow-x': 'scroll'                       
                */
	            $(idSlides).css({
	                'left':   '0px',
	                'width':  '1008px',
	                'height': '794px',
	                'overflow-y': 'scroll'
	            });

	            $(".slides_container .slides_control").css('left', '0px');

	            $(clickable).css('position', 'fixed');
	        }
            
            /// mobile phone - vertical display 
	        function mobileDeviceVerticalCss(idSlides, clickable) {
	            $("body").css('min-height', '1460px');  /* August 29, 2016 mobile version complaint*/
	            $(idSlides).css({
	                'top': '5px'  /*20px -> 5px  ? */
	            });

	            $(idSlides).css({
	                'left':   '0px',
	                'width':  '1008px',
	                'height': '1600px',
	                'overflow-y': 'scroll'
	            });

	            $(clickable).css({
	                'top':    '100px',
	                'left':   '100px',
	                'width':  '400px',
	                'height': '400px'
	            });

	            $(".imageTopMargin").css({
	                'margin-top': '3%'   /* ? */
	            });
	        }

	        /// design highlights:
            /// mobile phone display - horizontal 
	        function mobileDeviceHorizontalCss(idSlides, clickable) {
	            $("body").css('min-height', '760px');  /* document the research on this 760px*/

	            $(idSlides).css({
	                'left':   '0px',
	                'width':  '1008px',
	                'height': '800px',
	                'overflow-y': 'scroll'
	            });

	            $(clickable).css({
	                'top':    '100px',
	                'left':   '100px',
	                'width':  '600px',
	                'height': '250px'
	            });

	            $(".imageTopMargin").css({
	                'margin-top': '3%'   /* ? */
	            });
	        }

            // design the function easy to maintain
	        function addMobileDeviceVerticalImages() {
	            var path = "img/slideshow/mobileVertical/";

	            var imageFiles = [];

	            imageFiles.push(["#ID_L225L", "L225L_mobile_vertical.jpg"]);
	            imageFiles.push(["#ID_L610",  "L610_mobile_vertical.jpg"]);	            
	           
	            imageFiles.push(["#ID_L195", "L195_mobile_vertical.jpg"]);	            
	            imageFiles.push(["#ID_L360-L05", "L360-L05-mobile-vertical.jpg"]);	           	          	            
	            imageFiles.push(["#ID_L730", "L730_mobile_vertical.jpg"]);
	            imageFiles.push(["#ID_L930", "L930_mobile_vertical.jpg"]);	        	           

	            for (var i = 0; i < imageFiles.length; i++) {
	                var cube = imageFiles[i]; 
	                var id = cube[0];
	                var image = cube[1];
	                $(id).css('background-image', 'url('+ path + image+') ');
	            }
	        }	       

            // design the funciton easy to maintain
	        function addMobileDeviceHorizontalImages() {
	            var path = "img/slideshow/mobileHorizontal/";

	            var imageFiles = [];

	            imageFiles.push(["#ID_L225L", "L225L_mobile_horizontal.jpg"]);
	            imageFiles.push(["#ID_L610",  "L610_mobile_horizontal.jpg"]);	            

	            imageFiles.push(["#ID_L195", "L195_mobile_horizontal.jpg"]); 	            
	            imageFiles.push(["#ID_L360-L05", "L360-L05-mobile-horizontal.jpg"]); 	            	           
	            imageFiles.push(["#ID_L730", "L730_mobile_horizontal.jpg"]); 
	            imageFiles.push(["#ID_L930", "L930_mobile_horizontal.jpg"]);	      	            

	            for (var i = 0; i < imageFiles.length; i++) {
	                var cube = imageFiles[i];
	                var id = cube[0];
	                var image = cube[1];
	                $(id).css('background-image', 'url(' + path + image + ') ');
	            }
	        }
	    });
    </script>
    <style>        
		/* Added for video link style changed*/
		a.reset:hover {
  			color:#FCB31C !important;
  		}

		a.reset {
 			color:#333 !important;
			border-width: 0 0 1px;
    		border-style: solid;
		} 

        /*  Added on Feb. 20, 2015 - separate CSS with html, code more readable */
        .imageStyle {
            display:inline-block; 
            /*width:1008px;*/ 
            position:relative; 
            margin-left:auto; 
            margin-right:auto;            
        }            

        .imageTopMargin {
             margin-top:6%;
        }                                                                                   
    </style>

    <script type="text/javascript" src="<%=ResolveUrl("//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js")%>" data-dojo-config="usePlainJson: true, isDebug: false"></script> 
    <script type="text/javascript" 
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" 
            data-dojo-config="usePlainJson: true, isDebug: false">

    </script>
    <script type="text/javascript">
        /*
        Nov. 3, 2016
        How to add a popup from a mailchimp?
        http://stackoverflow.com/questions/28794511/onclick-launching-javascript-that-opens-a-popup-window-not-sure-the-function-c
        */
        function showSubscribe() {
            document.cookie = 'MCEvilPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            require(["mojo/signup-forms/Loader"], function (L) {
                L.start({
                    "baseUrl": "mc.us3.list-manage.com",
                    "uuid": "0b0672853fc55ce909a239148", "lid": "787a2474ad"
                })
            });
        }
    </script>
    <!--[if lt IE 9]>
     <link rel="stylesheet" href="<%=ResolveUrl("~/css/ie.css")%>"/>
    <![endif]--> 

    <!--Everything goes here -->
    <div id="ContentNeedPadding">
    <section id="content" class="full_screen" > 			
	    <div class="grid_x" id="slides" style="height:100%!important;">
		    <div class="slides_container"  > 
                <div class="slide" id="ID_L225L"   >                        
                    <div class="home_slide_name imageStyle imageTopMargin" >  
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L225L")%>" target="_blank">                                                                                  
                            <div id="clickable_L225L"></div>                        					        
                        </a>
                        </div>
                 </div> 
                
                <div class="slide" id="ID_L610"   >                        
                    <div class="home_slide_name imageStyle imageTopMargin" >  
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=SurfaceMountDownlight&ProductName=L610-L600")%>" target="_blank">                                                                                  
                            <div id="clickable_L610"></div>                        					        
                        </a>
                        </div>
                 </div>                                
                 
                <div class="slide" id="ID_L930"   >                        
                    <div class="home_slide_name imageStyle imageTopMargin" >  
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Exterior&SubMenu=Spotlight&ProductName=L930")%>" target="_blank">                                                                                  
                            <div id="clickable_L930"></div>                        					        
                        </a>
                        </div>
                 </div> 

                 <!--Slide - Feb. 28 2017 -->  
                <div class="slide" id="ID_L730"   >                        
                    <div class="home_slide_name imageStyle imageTopMargin" >  
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=WallMount&ProductName=L730")%>" target="_blank">                                                                                  
                            <div id="clickable_L730"></div>                        					        
                        </a>
                        </div>
                 </div>                 

                <!-- L360-L05 -->  
                <div class="slide" id="ID_L360-L05"   >                        
                    <div class="home_slide_name imageStyle imageTopMargin" >  
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Ingrade&ProductName=L360-L05")%>" target="_blank">                                                                                  
                            <div id="clickable_L360-L05"></div>                        					        
                        </a>
                    </div>
                </div>                                            

                <!--Slide L195 -->      
                <div class="slide" id="ID_L195"  >   							
                    <div class="home_slide_name imageStyle imageTopMargin">
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Pendant&ProductName=L195")%>" target="_self" >                                                        
                        <div id="clickable_L195"></div>
                        </a>                          
			        </div>                             
                </div>                                                                                                                                                                                                                                                                       
                
                <!-- the end of slides -->                             
        </div>
        <div class="clear">&nbsp;</div>
    </div>   
    <div class="clear">&nbsp;</div>			
    <div class="clear">&nbsp;</div>     
</section>
	
<div class="clear">&nbsp;</div>
  </div>
</asp:Content>