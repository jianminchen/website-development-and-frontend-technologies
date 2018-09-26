using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Contact_Reps : System.Web.UI.Page
{
    enum ContactsTab { MPFactory = 1, NorthAmericaReps, InternationalReps };
    const string GlobalSalesCellPHone = "778-998-1184";   // Sandra's cell phone on Dec. 3, 2014 

    protected void Page_Load(object sender, EventArgs e)
    {
        if ((Request.QueryString["State"] == null) || 
            (Request.QueryString["State"] == ""))
            return;
        
        string state        = Request.QueryString["State"];
        string tabSelection = Request.QueryString["contents"];          

        var contacts = Contacts.GetContacts(state);

        bool hasContact = (contacts.Count > 0)? true:false;       

        bool isNorthAmericaRepsTab = false;
        bool isInternationRepsTab  = false;
        
        PlaceHolder placeHolder = contactPlaceHolder;
        UpdatePanel updatePanel = updatePanelContacts;

        if (tabSelection.CompareTo(((int)ContactsTab.NorthAmericaReps).ToString()) == 0)
        {
            isNorthAmericaRepsTab = true;
            placeHolder = contactPlaceHolder;
            updatePanel = updatePanelContacts;
        }
        else if (tabSelection.CompareTo(((int)ContactsTab.InternationalReps).ToString()) == 0)
        {
            isInternationRepsTab = true;
            placeHolder = PlaceHolderInternationalReps;
            updatePanel = updatePanelInternationalRep;
        }

        if (isNorthAmericaRepsTab)
        {
            contactPlaceHolder.Controls.Clear();
        }
        else if (isInternationRepsTab)
        {
            PlaceHolderInternationalReps.Controls.Clear();
        }
        
        if (!hasContact)
        {
            string s = "No representative information found for " + state + ".";
            placeHolder.Controls.Add(new LiteralControl("<div>" + s + "</div>")); 
            updatePanel.Update();   
            return; 
        }        
        
        prepareWebcontent(state, placeHolder);        
        updatePanel.Update();       
    }

    /// <summary>   
    /// </summary>
    /// <param name="state"></param>
    /// <param name="placeHolder"></param>
    private void prepareWebcontent(string state, PlaceHolder placeHolder)
    {
        var contacts = Contacts.GetContacts(state);

        int count = 0;
        foreach (Object item in contacts)
        {
            var rep = (ContactPageRep)item;

            string address_1 = rep.Address_1;
            string agentName = rep.AgentName;
            string area = rep.Area;

            string city = rep.City;
            string contact = rep.Contact;
            string country = rep.Country;

            string emails = rep.Email;
            string faxNumber = rep.Fax_1;

            string phoneNumber = rep.Phone_1;
            var phoneNumber2 = rep.Phone_2;

            string postCode    = rep.PostCode;
            string provState   = rep.ProvState;

            string mobilePhone = rep.MobilePhone;

            string website = rep.Website;

            bool isGlobalSales   = state.CompareTo("GlobalSales") == 0;
            bool isUnitedKingdom = state.CompareTo("United Kingdom") == 0;     
            bool isItaly = state.CompareTo("Italy") == 0;
            var  isIreland = state.CompareTo("Ireland") == 0;        

            bool isMiddleEast     = state.CompareTo("Middle East") == 0;
            bool isNotGlobalSales = state.CompareTo("GlobalSales") != 0;
            
            bool showFaxNumber = true;

            // exceptions for fax number
            if (isGlobalSales || isUnitedKingdom || isItaly)
            {
                showFaxNumber = false; 
            }

            // prepare html, and update DOM  count <= 2                                    
            string html = prepareFirstDiv(isMiddleEast, isUnitedKingdom, count); 

            // area, agent name
            html += "<div>" + area + "</div>";
            html += "<p style=\"font-weight:bold;\">" + agentName + "</p>";

            // multiple contacts - Interantional
            html += prepareContactHtml(contact);

            html += "<p>" + address_1 + "</p>";

            // city and country information 
            if (isMiddleEast)
            {
                if (city != null && city.Length > 0)
                {
                    html += "<p>" + city + "</p>";
                }

                html += "<p>" + country + "</p>";
            }
            else
            {
                if (city.Length > 0 || provState.Length > 0 || country.Length > 0)
                {
                    html += "<p>" + city + "," + provState;

                    if (postCode.Length > 0)
                    {
                        html += " " + postCode;
                    }

                    html += "," + country + "</p>";
                }
            }

            // phone number                       
            html += "<p>(T) " + phoneNumber + "</p>";

            if (!string.IsNullOrEmpty(phoneNumber2))
            {
                html += "<p>(T) " + phoneNumber2 + "</p>";
            }

            // Sandra phone number for international area 
            if (isGlobalSales)
            {
                html += "<p>(C) " + GlobalSalesCellPHone + "</p>";
            }

            // fax number
            if(showFaxNumber)
            {
                html += prepareFaxNumber(faxNumber);
            }

            // update DOM - 1
            placeHolder.Controls.Add(new LiteralControl(html));


            // email link  - 2 
            prepareEmailAddress(emails, placeHolder);

            // - 3  mobile phone
            prepareMobilePhone(mobilePhone, placeHolder, isMiddleEast);

            // website link - 4 
            prepareWebsiteLink(website, placeHolder, isNotGlobalSales);

            placeHolder.Controls.Add(new LiteralControl("</div>"));
            count++;
        }        
    }

    /// <summary>
    /// June 6, 2017
    /// Please test the format of contact page, United States/ FL, CA states, 
    /// International/ Middle East/ United Kingdom
    /// </summary>
    /// <param name="isMiddleEast"></param>
    /// <param name="isUnitedKingdom"></param>
    /// <param name="count"></param>
    /// <returns></returns>
    private string prepareFirstDiv(bool isMiddleEast, bool isUnitedKingdom, int count)
    {
        var grid_choices = new string[] { "grid_2", "grid_3", "grid_4" };

        string cssClass = grid_choices[1];

        if (isMiddleEast && count > 2)
        {
            cssClass = grid_choices[0];
        }

        if (isUnitedKingdom) // more width for "United Kingdom"
        {
            cssClass = grid_choices[2];
        }

        return "<div class=\"" + cssClass + "  contacts_cell\">";
    }

    /// <summary>
    /// June 5, 2017
    /// </summary>
    /// <param name="text"></param>
    /// <returns></returns>
    private string prepareFaxNumber(string text)
    {
        if(text == null || text.Length == 0)
        {
            return string.Empty; 
        }
        else{
            return "<p>(F) " + text + "</p>";
        }
    }

    /// <summary>
    /// contact may be multiple names
    /// June 5, 2017
    /// multiple contacts - Interantional
    /// </summary>
    /// <param name="contact"></param>
    /// <returns></returns>
    private string prepareContactHtml(string contact)
    {
        string html = "";
        
        var names = contact.Trim().Split(';');
        foreach (var name in names)
        {
            html += "<p>" + name + "</p>";
        }

        return html; 
    }

    /// <summary>
    /// code review on Dec. 1, 2017
    /// Using ; as delimiters
    /// June 5, 2017
    /// </summary>
    /// <param name="emails"></param>
    /// <param name="placeHolder"></param>
    private void prepareEmailAddress(string emails, PlaceHolder placeHolder)
    {
        var emailContacts = emails.Trim().Split(';');

        foreach (var address in emailContacts)
        {
            var text = address.Trim(); 

            var hyperLink = new HyperLink();
            hyperLink.Text = text;
            hyperLink.NavigateUrl = "mailto:" + text;

            placeHolder.Controls.Add(new LiteralControl("<p>"));
            placeHolder.Controls.Add(hyperLink);
            placeHolder.Controls.Add(new LiteralControl("</p>"));
        }
    }

    /// <summary>
    /// June 5, 2017
    /// </summary>
    /// <param name="mobilePhone"></param>
    /// <param name="placeHolder"></param>
    /// <param name="showMobilePhone"></param>
    private void prepareMobilePhone(string mobilePhone, PlaceHolder placeHolder, bool showMobilePhone)
    {
        if (showMobilePhone)
        {
            if (mobilePhone != null && mobilePhone.Length > 0)
            {
                placeHolder.Controls.Add(new LiteralControl("<p>" + mobilePhone + "</p>"));
            }
        }
    }

    /// <summary>
    /// June 5, 2017 
    /// </summary>
    /// <param name="website"></param>
    /// <param name="placeHolder"></param>
    /// <param name="showWebsiteLink"></param>
    private void prepareWebsiteLink(string website, PlaceHolder placeHolder, bool showWebsiteLink)
    {        
        HyperLink hyperLink = new HyperLink();

        hyperLink.Text = website;
        hyperLink.NavigateUrl = "http://" + website;

        if (showWebsiteLink)
        {
            placeHolder.Controls.Add(new LiteralControl("<p>"));
            placeHolder.Controls.Add(hyperLink);
            placeHolder.Controls.Add(new LiteralControl("</p>"));
        }    
    }
}