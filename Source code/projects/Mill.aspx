<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.master"%>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Default" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/mpstyle.css")%>"/>
    <script src="<%=ResolveUrl("~/js/easySlider.js")%>"></script>
    <%--<script src="<%=ResolveUrl("~/js/slides.unpacked.js")%>"></script>
	<script src="<%=ResolveUrl("~/js/project.js")%>"></script>--%>
    <script type="text/javascript">
        $(document).ready(function () {

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

        });
    </script>


	<!--Everything goes here -->
     <div id="ContentNeedPadding">
	<section id="content">
		<section class="container_12" id="bleeded_container">
			<div class="grid_x">
					<div id="lf_title" class="grid_6xl suffix_2" style="border:none;padding-bottom:0px;">&nbsp;</div>
			</div>
			<div class="grid_12 omega aplha" id="slideshow_frame"  style=" position:relative;">
                <div id="main_project" style="width:1008px; height:567px;" >
                    <img src="../img/projects/MILL/MILL_x_1.jpg" width="1008" height="566" alt="x1" id="MainPhoto">
                </div>
                <div id="carousel_project" class="pagination ">
                    <ul>
					    <li><a><img src="../img/projects/MILL/MILL_x_1.jpg" width="123" alt="x1"  class="ChangePhoto def_active"/></a>
					    <a><img src="../img/projects/MILL/MILL_x_2.jpg" width="123" alt="x2"  class="ChangePhoto"/></a>
					    <a><img src="../img/projects/MILL/MILL_x_3.jpg" width="123" alt="x3"  class="ChangePhoto"/></a>
					    <a><img src="../img/projects/MILL/MILL_x_4.jpg" width="123" alt="x4"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_5.jpg" width="123" alt="x5"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_6.jpg" width="123" alt="x6"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_7.jpg" width="123" alt="x7"  class="ChangePhoto"/></a>
					    </li>
                        <li>
                        <a><img src="../img/projects/MILL/MILL_x_8.jpg" width="123" alt="x8"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_9.jpg" width="123" alt="x9"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_10.jpg" width="123" alt="x10"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_11.jpg" width="123" alt="x11"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_12.jpg" width="123" alt="x12"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_13.jpg" width="123" alt="x13"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_14.jpg" width="123" alt="x14"  class="ChangePhoto"/></a>
                        </li>

                        <li>
                        <a><img src="../img/projects/MILL/MILL_x_15.jpg" width="123" alt="x15"  class="ChangePhoto"/></a>
                        <a><img src="../img/projects/MILL/MILL_x_16.jpg" width="123" alt="x16"  class="ChangePhoto"/></a>
                        </li>
                    </ul>
				</div>
                </div>

            <div class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">PROJECT</div>
                <div class="grid_6 product_inl_x project_link">The Mill<br /><br />
                                                               For more information, view the <a target="_blank" href="../Mill/index.html">interactive overview of The Mill project</a> 
                </div>
            </div>
			<div class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t ">FIXTURES</div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Exterior&SubMenu=Ingrade&ProductName=L01")%>" target="_self">L01</a></div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Ingrade&ProductName=L05")%>" target="_self">L05</a></div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=WallMount&ProductName=L13")%>" target="_self">L13</a></div>
				<div class="grid_2 product_inl_x">L18</div>
				<div class="grid_2 product_inl_x">&nbsp;</div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Cabinet&ProductName=L64")%>" target="_self">L64</a></div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L73")%>" target="_self">L73</a></div>
				<div class="grid_2 product_inl_x">L97</div>
				<div class="grid_2 product_inl_x"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Linear&ProductName=L101")%>" target="_self">L101</a></div>
				<div class="grid_2 product_inl">&nbsp;</div>
				<div class="grid_2 product_inl">L144</div>
				<div class="grid_2 product_inl"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Exterior&SubMenu=Linear&ProductName=L171")%>" target="_self">L171</a></div>
				<div class="grid_2 product_inl">L223</div>
			</div>

		</section>
		<div class="clear">&nbsp;</div>
        <div id="MainMenuSelectedProjects"></div>
	</section>
         </div>
</asp:Content>	