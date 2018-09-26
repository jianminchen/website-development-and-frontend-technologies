<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.master"%>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Default" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/mpstyle.css")%>"/>
    <script src="<%=ResolveUrl("~/js/easySlider.js")%>"></script>
   
    <%--<script src="<%=ResolveUrl("~/js/slides.unpacked.js")%>"></script>
	<script src="<%=ResolveUrl("~/js/project.js")%>"></script>--%>
    <script src="js/house.js"></script>   

	<!--Everything goes here -->
     <div id="ContentNeedPadding">
	<section id="content">
		<section class="container_12" id="bleeded_container">
			<div class="grid_x">
					<div id="lf_title" class="grid_6xl suffix_2" style="border:none;padding-bottom:0px;">&nbsp;</div>
			</div>
			<div class="grid_12 omega aplha" id="slideshow_frame" style=" position:relative;">

                <div id="main_project" style="width:1008px; height:567px;" >
                    <img src="../img/projects/House/L145_house.jpg" width="1008" height="566" alt="L145" id="MainPhoto">
                </div>
                <div id="carousel_project" class="pagination ">
                    <ul>
                        <li>
                      
                        <a><img src="../img/projects/House/L145_house.jpg" width="123" alt="L145"  class="L145_house ChangePhoto def_active"/></a>
					    <a><img src="../img/projects/House/L146_house.jpg"" width="123" alt="L146"  class="L146_house ChangePhoto"/></a>					  
					    <a><img src="../img/projects/House/L182_house.jpg" width="123" alt="L182"  class="L182_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L221SR_house.jpg" width="123" alt="L221"  class="L221SR_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L09_house.jpg" width="123" alt="L09"  class="L09_house ChangePhoto "/></a>
					    <a><img src="../img/projects/House/L11_house.jpg"" width="123" alt="L11"  class="L11_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L65_house.jpg" width="123" alt="L65"  class="L65_house ChangePhoto"/></a>  
                        </li>

					    <li>      
                                      			   
					    <a><img src="../img/projects/House/L73_house.jpg" width="123" alt="L73"  class="L73_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L141_house.jpg" width="123" alt="L141"  class="L141_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L130_house.jpg" width="123" alt="L130"  class="L130_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L191_house.jpg" width="123" alt="L191"  class="L191_house ChangePhoto" /></a>
                        <a><img src="../img/projects/House/G03_house.jpg" width="123" alt="G03"  class="G03_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/X01_house.jpg" width="123" alt="X01"  class="X01_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L08_house.jpg" width="123" alt="L08"  class="L08_house ChangePhoto"/></a>  
					    </li>

                        <li>      
                        <a><img src="../img/projects/House/L08_house.jpg" width="123" alt="L08"  class="L08_house ChangePhoto"/></a>                 
                        <a><img src="../img/projects/House/L92_house.jpg" width="123" alt="L92"  class="L92_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L134_house.jpg" width="123" alt="L134"  class="L134_house ChangePhoto"/></a>
                        <a><img src="../img/projects/House/L151_house.jpg" width="123" alt="L151"  class="L151_house ChangePhoto"/></a>
                        </li>

                    </ul>
				</div>
                </div>

            <div id="project_row_project"  class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">PROJECT</div>
                <div class="grid_2 product_inl_x project_link">The House</div>
            </div>
			<div id="project_row_fixture"  class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t ">FIXTURES</div>
				<div class="grid_2 product_inl_x project_link"><a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=Interior&SubMenu=Linear&ProductName=L103")%>" target="_blank">L103</a></div>
                <div class="grid_2 product_inl"></div>
			</div>           
           </section>
		<div class="clear">&nbsp;</div>
        <div id="MainMenuSelectedProjects"></div>
	</section>
         </div>
</asp:Content>	