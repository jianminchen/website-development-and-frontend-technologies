<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Reps.aspx.cs" Inherits="Contact_Reps" MasterPageFile="~/MasterPage.master"%>

<%@ Register Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" Namespace="System.Web.UI" TagPrefix="asp" %>
<asp:content id="Default" contentplaceholderid="ContentPlaceHolder_Webpage" runat="server">   
    <link href="css/reps.css?v=2" rel="stylesheet" />   
    <script src="<%=ResolveUrl("../Contact/js/MPFactorySales.js")%>"></script>
    <script src="<%=ResolveUrl("../Contact/js/Support.js")%>"></script>  
    <script src="<%=ResolveUrl("../Contact/js/UsaNorthAmerica.js")%>"></script>  
    <script src="<%=ResolveUrl("../Contact/js/CanadaNorthAmerica.js")%>"></script>
    <script src="<%=ResolveUrl("../Contact/js/reps.js")%>"></script>
    <script type="text/javascript">            
        $(document).ready(function () {            
            if ($("div").find("#MainMenuSelectedContacts").length) {
                $('.MenuItemsColorClass').css('color', '#333');
                $('.MenuItemContacts').css('color', '#FCB31C');
            }        
        }
        )
    </script>
    <link rel="stylesheet" href="<%=ResolveUrl("~/css/mpstyle.css")%>"/>
    <script src="<%=ResolveUrl("../js/tab.js")%>"></script>
    
    <script type="text/javascript">
          function reload(state) {
              window.location = "Reps.aspx?state=" + state + "&contents=2";
          }

          function reloadInternational(state) {
              window.location = "Reps.aspx?state=" + state + "&contents=3";
          }

          function onmouseover(state) {
              document.getElementById(state).style = "color:black";
          }     
          
          $(document).ready(function () {              
              stateProvHighlighted();

              // MP Factory tab - Sales section
              prepareMPFactorySalesHtml();

              // MP Factory tab - Support section 
              prepareMPSupportHtml();

              // North American Reps tab
              prepareUsaStatesHtml();
              prepareCanadaProvHtml();
          });         
    </script>

    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <!--Everything goes here -->
        <div id="ContentNeedPadding">
		<section id="content"><!--Everything goes here -->
			<section class="container_12" id="bleeded_container">				
                
                <div class="grid_x">
					<div id="lf_title" class="grid_6 alpha">CONTACTS</div>
			    </div>

                <div id="Contact"  class="contacts" >
                    <div>
                        <ul id="tabs">
                            <li><a name="#factory">MP Factory</a></li>
                            <li><a name="#NorthAmerica">North American Reps</a></li>
                            <li><a name="#International">International Reps</a></li>
                        </ul>
                    </div>
               
                    <div id="contents" class="grid_12">
                       <div id="factory" class="content_page">                         
                            <div id="factoryArea" class="grid_x">
                                <div id="factory_MP" class="grid_5 alpha result_title">MP Factory</div>
                                <div id="factory_ExtraSpace" class="grid_5 alpha result_title">&nbsp; </div>
                                <div id="ID_MPFactory_001"   class ="grid_6 alpha">
                                16 West 4th Avenue Vancouver, British Columbia Canada V5Y 1G3<br/>
                                (T) 604-708-1184<br/>
                                (F) 604-708-1185<br/>
                                (Toll Free) 1-877-708-1184 (North America Only)<br/>
                                <a href="mailto:info@mplighting.com">info (at) mplighting.com</a> <br/>
                                <p>Please contact Darrell Lange to book an appointment. </p>                                     
                                <a href="../pdf/others/Agents_Territories_Map.pdf" target="_blank"> 
                                    <div class="grid_2 result_buttom">
                                        <p> View Territory Map</p>      
                                    </div>
                                </a>
                                </div>
                     
                                <div class="grid_1" id="contact_divider">&nbsp;</div>
                                <div class="grid_5">&nbsp;</div>
                            </div>
        
                            <div class="grid_x result_border"> </div>

                            <%--FACTORY INFO--%>
                            <div id="sales_support"> 
                                <div class="grid_6 alpha">
                                    <div id= "ID_Contact_Sales" class="grid_5 result_title alpha">SALES</div>
                                    <%-- the sales will be added here uisng Javascript code Nov. 2, 2016 --%>                          
                                </div>
                                <div class="grid_6 omega gap30">
                                    <div id="ID_Contacts_Support" class="grid_5 result_title alpha">SUPPORT</div>
                                    <%-- the support will be added here uisng Javascript code Nov. 2, 2016 --%>                          
                                    <div class="grid_6"></div>                            
                                </div>
                            </div>                                      
                        </div>                            

                        <div id="NorthAmerica"  class="content_page" runat="Server"> 
                            <asp:updatepanel id="updatePanelContacts" runat="server" UpdateMode ="Conditional">
                            <contenttemplate>
                 
                            <div id="NorthAmerica3Tabs" class="grid_x">
                                <div id="NorthAmericaDiv1" class="grid_5 result_title">North American Reps </div>
                                <div id="NorthAmericaDiv2" class="grid_5 result_title">&nbsp; </div>
                                <div id="NorthAmericaDiv3" class="grid_2">
                                    <div>USA:</div><br />
                                    <div style="clear:both;"></div>
                                    <div style="margin-top:15px;">Canada:</div>
                                </div>
                    
                                <div class="grid_10">
                                    <div class="rep_area" >  
                                        <ul id="ID_Contacts_USA_States">
                                         <%-- USA states will be added through JavaScript function --%>       
                                        </ul>
                                    </div>  
                                    <div style="clear:both;"></div>
                                    <div id="CanadaProvinces" class="rep_area">  
                                        <ul id="ID_Contacts_Canada_Prov">
                                        <%-- Canada provinces will be added through JavaScript function --%>
			                            </ul>
                                    </div>  
                                </div>
                            </div>

                        <div class="grid_x result_border"> </div>
                                
                        <%--Reps INFO--%>            
                        <div class="grid_12 row_spacing10"> </div>				
                        <div id="N_reps"  class="content_page">     
                            <asp:PlaceHolder id="contactPlaceHolder" runat="server"></asp:PlaceHolder>                                                                                                    
                        </div>                    
                    </div>  <%--North America Reps end--%>
                        
                    </contenttemplate>
                    </asp:updatepanel>  

                    <div id="International"  class="content_page">         
                        <asp:updatepanel id="updatePanelInternationalRep" runat="server" UpdateMode ="Conditional">
                        <contenttemplate>                             
                        <div id="InternationalDiv1" class="grid_x">
                            <div id="InternationalDiv2" class="grid_5 result_title">International Reps </div>
                            <div id="InternationalDiv3" class="grid_5 result_title">&nbsp; </div>
                            <div id="InternationalDiv4" style="width:830px;">
                                <ul id ="ID_InternationalReps">
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('GlobalSales')" 
                                                title="International">Global Sales</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Mexico')" 
                                                title="Mexico">Mexico</span> &nbsp;
                                    </li>		
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Middle East')" 
                                                title="Middle East">Middle East</span> &nbsp;
                                    </li>		                                
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Puerto Rico')" 
                                                title="Puerto Rico">Puerto Rico</span> &nbsp;
                                    </li>		                               
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('South America')" 
                                                title="South America">South America</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('United Kingdom')" 
                                                title="United Kingdom">United Kingdom</span> &nbsp;
                                    </li>                                    
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Italy')" 
                                                title="United Kingdom">Italy</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Western Europe')" 
                                                title="United Kingdom">Western Europe</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Switzerland')" 
                                                title="Switzerland">Switzerland</span> &nbsp;
                                    </li>
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Israel')" 
                                                title="Israel">Israel</span> &nbsp;
                                    </li>			
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Hawaii')" 
                                                title="Austrlia">Australia, New Zealand and New Caledonia</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Ukraine')" 
                                                title="Ukraine">Ukraine</span> &nbsp;
                                    </li>		         	                                                     		                                                                  
                                </ul>
                            </div>                    
                            <div class="grid_10"></div>
                            
                            <div id="InternationalDistributorTitle" class="grid_5 result_title">Distributors </div>
                            <div id="Div4" class="grid_5 result_title">&nbsp; </div>
                            <div id="InternationalDistributorItems">
                                <ul id ="Ul1">
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Ireland')" 
                                                title="Ireland">Ireland</span> &nbsp;
                                    </li>	
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('United Kingdom Distributor')" 
                                                title="UK">United Kingdom</span> &nbsp;
                                    </li>
                                    <li><span   style="cursor:pointer" 
                                                onmouseover="this.style.textDecoration='underline'" 
                                                onmouseout="this.style.textDecoration='none'" 
                                                onclick="reloadInternational('Argentina Distributor')" 
                                                title="Argentina">Argentina-Salta Capital</span> &nbsp;
                                    </li>			                                    	         	                                                     		                                                                  
                                </ul>
                            </div>      

                        </div>
                        <div class="grid_x result_border"> </div>

                        <%--International Reps INFO--%>            
                        <div class="grid_12 row_spacing10"> </div>				
                            <div  id="Div1"  class="content_page">     
                                <asp:PlaceHolder id="PlaceHolderInternationalReps" runat="server" >
                                    <div class="grid_3 contacts_cell">
                                        <div>Global Sales</div>
                                        <p style="font-weight:bold;">MP Lighting</p>
                                        <p>Sandra Bartolomeo</p>
                                        <p>16 West 4th Avenue</p>
                                        <p>Vancouver,BC V5Y 1G3,Canada</p>
                                        <p>(T) 604-708-1184</p>
                                        <p>(C) 778-998-1184</p>
                                        <p><a href="mailto:sandra.b@mplighting.com">sandra.b@mplighting.com</a></p>                                       
                                    </div>                                 
                                </asp:PlaceHolder>                                                                                   
                            </div>                    
                        </div>  <%--International Reps end--%>
                        
                        </contenttemplate>
                        </asp:updatepanel> 

                        </div> <%--#content end--%>                             
                    </div> <%--#contact end--%>
                  </div>   <%--#contents end--%>
                </div>
			</section>

			<div class="clear">&nbsp;</div>
            <div id="MainMenuSelectedContacts"></div>
		</section>
        </div>
</asp:Content>