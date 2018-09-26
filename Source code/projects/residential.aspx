<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.master"%>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Default" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/mpstyle.css")%>"/>
    <script src="<%=ResolveUrl("~/js/easySlider.js")%>"></script>
  
    <%--<script src="<%=ResolveUrl("~/js/slides.unpacked.js")%>"></script>
	<script src="<%=ResolveUrl("~/js/project.js")%>"></script>--%>
    
   
    <script src="js/residential.js"></script>

	<!--Everything goes here -->
     <div id="ContentNeedPadding">
	<section id="content">
		<section class="container_12" id="bleeded_container">
			<div class="grid_x">
					<div id="lf_title" class="grid_6xl suffix_2" style="border:none;padding-bottom:0px;">&nbsp;</div>
			</div>
			<div class="grid_12 omega aplha" id="slideshow_frame" style=" position:relative;">

                <div id="main_project" style="width:1008px; height:567px;" >
                    <img src="../img/projects/BernardsvilleHouse/BernardsvilleHouse.jpg" width="1008" height="566" alt="x1" id="MainPhoto">
                </div>
                <div id="carousel_project" class="pagination ">
                    <ul>
					    <li>                              
                            <a><img src="../img/projects/BernardsvilleHouse/BernardsvilleHouse.jpg" width="123" alt="x1"  class="BernardsvilleHouseApril202016 ChangePhoto  def_active"/></a>
                            <a><img src="../img/projects/L107NorthVancouver/L107_House_thumbnail.jpg" width="123" alt="x1L107"  class="L107NorthVancouver ChangePhoto "/></a>                                                        
                            <a><img src="../img/projects/L37GastownResident/L37GastownHome.jpg" width="123" alt="x1"  class="L37GastownResident ChangePhoto "/></a> <!-- 1 -->
                            <a><img src="../img/projects/L01L37Residence/L37_West2nd_01.jpg" width="123" alt="x1"  class="L01L37 ChangePhoto "/></a> <!-- 1 -->
                            <a><img src="../img/projects/L01L37Residence/L01_West2nd_01.jpg" width="123" alt="x2"  class="L01L37 ChangePhoto"/></a> <!-- 2 -->
                             <a><img src="../img/projects/L06L07/L06_3.jpg" width="123" alt="x3"  class="L06L07 ChangePhoto"/></a>                   <!-- 3 -->
                            <a><img src="../img/projects/L06L07/L06_2.jpg" width="123" alt="x4"  class="L06L07 ChangePhoto"/></a> 
                                                                                        
					    </li>
                        <li> 
                                             <!-- 4-->       
                            <a><img src="../img/projects/L06L07/L06_1.jpg" width="123" alt="x5" class="L06L07 ChangePhoto " /></a>         <!-- 5-->    
                            <a><img src="../img/projects/L06L07/L06_4.jpg" width="123" alt="x6"  class="L06L07 ChangePhoto"/></a>                   <!-- 6-->                   
                            <a><img src="../img/projects/WH/WH_x_1.jpg" width="123" alt="x5" class="wave ChangePhoto" /></a>                  
					        <a><img src="../img/projects/WH/WH_x_2.jpg" width="123" alt="x6"  class="wave ChangePhoto"/></a>
					        <a><img src="../img/projects/WH/WH_x_3.jpg" width="123" alt="x7"  class="wave ChangePhoto"/></a>	
                             <a><img src="../img/projects/BayHouse/BayHouse1.jpg" width="123" alt="x8"  class="Elma ChangePhoto"/></a>
                            <a><img src="../img/projects/BayHouse/BayHouse2.jpg" width="123" alt="x9"  class="Elma ChangePhoto"/></a>  				   
                                                                              
                        </li>
                        <li> 
                           
                            <a><img src="../img/projects/BayHouse/BayHouse3.jpg" width="123" alt="x10"  class="Elma ChangePhoto"/></a>
                            <a><img src="../img/projects/PentHouse/PentHouse1.jpg" width="123" alt="x11"  class="penthouse ChangePhoto" /></a>	
                            <a><img src="../img/projects/PentHouse/PentHouse2.jpg" width="123" alt="x12"  class="penthouse ChangePhoto"/></a>                            
                        </li>                       
                    </ul>
				</div>
                </div>

            <div id="project_row_project"  class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">PROJECT</div>
                <div class="grid_3 product_inl_x project_link">Bernardsville House</div>
            </div>
            <div id="project_row_location" class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">LOCATION</div>
                <div class="grid_3 product_inl_x project_link">Bernardsville, New Jersey</div>
            </div>
			<div id="project_row_fixture"  class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t ">FIXTURES</div>
				<!--div class="grid_8 product_inl_x project_link">P81 & L72</div-->
                <div class='grid_2 product_inl'></div>
			</div>
           <div id="project_row_code">
			   <!-- <div class="grid_x project_row">
				    <div class="grid_2 alhpa project_info_t">CODE</div>
				    <div class="grid_9 product_inl">	
                </div>
			    </div>-->
            </div>
            <div id="project_row_credit" >
                
            <div class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t">PHOTO CREDIT</div>
				<div class="grid_9 product_inl">			      
                </div>
                
			</div>
            </div>
		</section>
		<div class="clear">&nbsp;</div>
        <div id="MainMenuSelectedProjects"></div>
	</section>
         </div>
</asp:Content>	