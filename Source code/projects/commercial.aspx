<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.master"%>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Default" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/mpstyle.css")%>"/>
    <script src="<%=ResolveUrl("~/js/easySlider.js")%>"></script>
    <%--<script src="<%=ResolveUrl("~/js/slides.unpacked.js")%>"></script>
	<script src="<%=ResolveUrl("~/js/project.js")%>"></script>--%>
    <script src="js/commercial.js"></script>   

	<!--Everything goes here -->
     <div id="ContentNeedPadding">
	<section id="content">
		<section class="container_12" id="bleeded_container">
			<div class="grid_x">
					<div id="lf_title" class="grid_6xl suffix_2" style="border:none;padding-bottom:0px;">&nbsp;</div>
			</div>
			<div class="grid_12 omega aplha" id="slideshow_frame" style=" position:relative;">

                <div id="main_project" style="width:1008px; height:567px;" >
                    <img src="../img/projects/PistachioAtBridgesRestaurant/L195_L600_L225_Pistachio.jpg" width="1008" height="566" alt="x1" id="MainPhoto">
                </div>
                <div id="carousel_project" class="pagination" >
                    <ul>
					    <li>
                            <a> <img src="../img/projects/PistachioAtBridgesRestaurant/L195_L600_L225_Pistachio.jpg" width="123" alt="x1"  class="L195L600L225Pistachio ChangePhoto def_active" /></a>
                            <a> <img src="../img/projects/AirCanada_MapleLeafLounge/L182_AirCanadaLounge.jpg" width="123" alt="x1"  class="L182AirCanadaLounge ChangePhoto " /></a>
                            <a> <img src="../img/projects/L196-L191StJohnConventionCenter/L196-L191ConventionCenterWholebuilding.jpg" width="123" alt="x1"  class="L196StJohnConventionCenter ChangePhoto " /></a>
                            <a> <img src="../img/projects/L196-L191StJohnConventionCenter/L196-L191ConventionCenterFixtureShapingBeauty.jpg" width="123" alt="x1"  class="L196-L196StJohnConventionCenter ChangePhoto " /></a>
                            <a> <img src="../img/projects/L196-L191StJohnConventionCenter/L196-L191CloseLookFixtures.jpg" width="123" alt="x1"  class="L196StJohnConventionCenter ChangePhoto " /></a>
                            <a> <img src="../img/projects/L109ApplicationMarch2017/L109_thumbnail.jpg" width="123" alt="x1"  class="L109ApplicationPhoto ChangePhoto" /></a>
                            <a> <img src="../img/projects/L05AudainArtMeseum/L05Meseum_thumbnail.jpg" width="123" alt="x1"  class="L05AudainArtMeseum ChangePhoto" /></a>                                                                                                                                                       	                                                           
					    </li>
                        <li>
                           <a> <img src="../img/projects/L300BarneyNYC/L300_thumbnail1.jpg" width="123" alt="x1"  class="L300BarneysNewYork ChangePhoto " /></a>   
                           <a> <img src="../img/projects/L300BarneyNYC/L300_thumbnail2.jpg" width="123" alt="x1"  class="L300BarneysNewYork ChangePhoto " /></a>   
                           <a> <img src="../img/projects/L300BarneyNYC/L300_thumbnail3.jpg" width="123" alt="x1"  class="L300BarneysNewYork ChangePhoto " /></a>
                           <a> <img src="../img/projects/L300BarneyNYC/L300_thumbnail4.jpg" width="123" alt="x1"  class="L300BarneysNewYork ChangePhoto " /></a>   
                           <a> <img src="../img/projects/L05SonomaStudio/sonomaRecordingStudio.jpg" width="123" alt="x1"  class="L05SonomaStudio ChangePhoto " id="ImgL05Sonoma"/></a>
                           <a> <img src="../img/projects/L01VancouverHotel/L01_hotel_01.jpg" width="123" alt="x1"  class="L01VancouverHotel ChangePhoto " id="Img1"/></a>   
                           <a> <img src="../img/projects/L01VancouverHotel/L01_hotel_02.jpg" width="123" alt="x1"  class="L01VancouverHotel ChangePhoto "/></a>                                                                                                                                                                                   	                           
                        </li>
                        <li>
                           <a> <img src="../img/projects/L03VancouverHotel/L03VancouverHotel01.jpg" width="123" alt="x1"  class="L03VancouverHotel ChangePhoto "/></a> 
                           <a> <img src="../img/projects/L03VancouverHotel/L03VancouverHotel02.jpg" width="123" alt="x1"  class="L03VancouverHotel ChangePhoto "/></a>                                                      
                           <a> <img src="../img/projects/PrincetonUniversity/L02_Princeton-Univ-01.jpg" width="123" alt="x1"  class="PrincetonUniversity ChangePhoto" id="Princeton1"/></a>    
                           <a> <img src="../img/projects/NYPalaceHotel/L01_NY-palace-hotel.jpg" width="123" alt="x1"  class="NYPalaceHotel ChangePhoto" id="NYPalaceHotel1"/></a>  
                           <a> <img src="../img/projects/CraftBeerMarket/CraftBeer01.jpg" width="123" alt="x1"  class="craftBeerMarket ChangePhoto "/></a>  
                           <a> <img src="../img/projects/CraftBeerMarket/CraftBeer02.jpg" width="123" alt="x2"  class="craftBeerMarket ChangePhoto  "/></a> 
                           <a> <img src="../img/projects/CraftBeerMarket/CraftBeer03.jpg" width="123" alt="x3"  class="craftBeerMarket ChangePhoto" id="CraftBeerMarket3"/></a>                                   
                          </li>
                        <li>   
                           <a> <img src="../img/projects/IntactInsuranceP81/P81_-Intact-Insurance.jpg" width="123" alt="x19"  class="intactInsurance ChangePhoto "/></a>
                           <a> <img src="../img/projects/VinotecaCafe/X43_Vinotecca_02.jpg" width="123" alt="x19"  class="vinotecaCafe ChangePhoto "/></a>  
                           <a> <img src="../img/projects/VinotecaCafe/X43_Vinotecca_03.jpg" width="123" alt="x20"  class="vinotecaCafe ChangePhoto "/></a> 
                           <a> <img src="../img/projects/VinotecaCafe/L102_Vinotecca_01.jpg" width="123" alt="x17"  class="vinotecaCafe ChangePhoto "/></a>                                      
                           <a> <img src="../img/projects/VinotecaCafe/L181_Vinotecca_01.jpg" width="123" alt="x18"  class="vinotecaCafe ChangePhoto "/></a>  
                           <a> <img  src="../img/projects/RS/RS_x_1.jpg" width="123" alt="x1"  class="robson  ChangePhoto " id="robson1"></a> <!--5 -->     
                           <a> <img src="../img/projects/RS/RS_x_2.jpg" width="123" alt="x2"  class="robson  ChangePhoto"/></a> <!--6 -->                                                                                                                                                                                                  
                        </li>
                        <li>
                            <a> <img src="../img/projects/RS/RS_x_4.jpg" width="123" alt="x4"  class="robson ChangePhoto"/></a>	
                            <a> <img src="../img/projects/BBTCA/BBTCA_x_1.jpg" width="123" alt="x5"  class="BBTCA ChangePhoto"/></a>	
                            <a><img src="../img/projects/BBTCA/BBTCA_x_2.jpg" width="123" alt="x6"  class="BBTCA ChangePhoto"/></a>
                            <a><img src="../img/projects/BBTCA/BBTCA_x_3.jpg" width="123" alt="x7"  class=" BBTCA ChangePhoto"/></a>	                               
                            <a><img src="../img/projects/TsartlipHeathCareCentee1/TsartlipHeathCareCentee1.jpg" width="123" alt="x16"  class="TsartlipHeathCareCentee1 ChangePhoto"/></a>
                            <a><img src="../img/projects/Trattoria/Trattoria1.jpg" width="123" alt="x8"  class="Trattoria ChangePhoto"/></a>  
                            <a><img src="../img/projects/Trattoria/Trattoria2.jpg" width="123" alt="x8"  class="Trattoria ChangePhoto"/></a>                               
                        </li>
                        <li>   
                            <a><img src="../img/projects/Trattoria/Trattoria3.jpg" width="123" alt="x8"  class="Trattoria ChangePhoto"/></a> 
                            <a><img src="../img/projects/TVC/TVC_x_1.jpg" width="123" alt="x11"  class="TVC ChangePhoto"/></a>   
                            <a><img src="../img/projects/TVC/TVC_x_2.jpg" width="123" alt="x12"  class="TVC ChangePhoto"/></a>
                            <a><img src="../img/projects/TVC/TVC_x_3.jpg" width="123" alt="x13"  class="TVC ChangePhoto"/></a>  
                            <a><img src="../img/projects/TVC/TVC_x_4.jpg" width="123" alt="x14"  class="TVC ChangePhoto"/></a>  
                            <a><img src="../img/projects/Coast/Coast1.jpg" width="123" alt="x15"  class="Coast ChangePhoto"/></a>      
                            <a><img src="../img/projects/Coast/Coast2.jpg" width="123" alt="x16"  class="Coast ChangePhoto"/></a>                                                                                                     
                         </li> 
                         <li>  
                            <a><img src="../img/projects/VM/VM1.jpg" width="123" alt="x15"  class="VM ChangePhoto"/></a>   
                            <a><img src="../img/projects/VM/VM2.jpg" width="123" alt="x15"  class="VM ChangePhoto"/></a>  
                            <a><img src="../img/projects/VM/VM3.jpg" width="123" alt="x15"  class="VM ChangePhoto"/></a>
                            <a><img src="../img/projects/CDH/CDH1.jpg" width="123" alt="x15"  class="CDH ChangePhoto"/></a>    
                            <a><img src="../img/projects/KnoxvilleHighSchool/KnoxvilleHighSchool1.jpg" width="123" alt="x15"  class="KnoxvilleHighSchool ChangePhoto"/></a>     
                            <a><img src="../img/projects/KnoxvilleHighSchool/KnoxvilleHighSchool2.jpg" width="123" alt="x15"  class="KnoxvilleHighSchool ChangePhoto"/></a>  
                            <a><img src="../img/projects/KnoxvilleHighSchool/KnoxvilleHighSchool3.jpg" width="123" alt="x15"  class="KnoxvilleHighSchool ChangePhoto"/></a>                      
                         </li>
                    </ul>
				</div>
                <div style=" clear:both;"></div>
                </div>

            <div id="project_row_project" class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">PROJECT</div>
                <div class="grid_4 product_inl_x project_link">Pistachio at Bridges Restaurant</div>
            </div>
            <div id="project_row_location" class="grid_x project_row">
                <div class="grid_2 alhpa project_info_t ">LOCATION</div>
                <div class="grid_4 product_inl_x project_link">Vancouver, British Columbia</div>
            </div>
			<div id="project_row_fixture" class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t ">FIXTURES</div>
				<div class="grid_2 product_inl_x project_link"><a href='../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Pendant&ProductName=L195' target='_blank'>L195</a></div>
                <div class="grid_2 product_inl_x project_link"><a href='../ProductsOverview.aspx?MainMenu=Interior&SubMenu=SurfaceMountDownlight&ProductName=L600' target='_blank'>L600</a></div>
                <div class="grid_2 product_inl_x project_link"><a href='../ProductsOverview.aspx?MainMenu=Interior&SubMenu=Spotlight&ProductName=L225S' target='_blank'>L225S</a></div>
			</div>
            <div id="project_row_code">
			<div class="grid_x project_row">
				<div class="grid_2 alhpa project_info_t">CODE</div>
				<div class="grid_9 product_inl">
			
                </div>
			</div>
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