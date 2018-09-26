/* 
Feb. 28, 2018
MP Factory - Suport 
*/
function GetFactoryContactSupprt() {
    return [
                {
                    ID: 1,
                    Area: 'QUOTATIONS / RGA',
                    Name: 'Bruce Sengsavanh',
                    Phone: '(T) 604-708-1184 Ext.134',
                    Fax: '(F) 604-708-1185',
                    Email_href: 'mailto:bruce.s@mplighting.com',
                    Email_text: 'bruce.s (at) mplighting.com',
                    Text1: 'Note: RGA - Return Goods Authorization',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 2,
                    Area: 'QUOTATION / TECH SUPPORT',
                    Name: 'Bruce Patterson',
                    Phone: '(T) 604-708-1184 Ext.138',
                    Fax: '(F) 604-708-1185',
                    Email_href: 'mailto:bruce.p@mplighting.com',
                    Email_text: 'bruce.p (at) mplighting.com',
                    Text1: '',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 3,
                    Area: 'PROJECT COORDINATOR / CUSTOMER SERVICE',
                    Name: 'Jenny Wong',
                    Phone: '(T) 604-708-1184 Ext.107',
                    Fax: '(F) 604-708-1185',
                    Email_href: 'mailto:jenny.w@mplighting.com',
                    Email_text: 'jenny.w (at) mplighting.com',
                    Text1: '',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 4,
                    Area: 'SHIPPING & TRACKING',
                    Name: '&nbsp;',
                    Phone: '(T) 604-708-1184 Ext.144',
                    Fax: '(F) 604-708-1981',
                    Email_href: 'mailto:shipping@mplighting.com',
                    Email_text: 'shipping (at) mplighting.com',
                    Text1: '',
                    LastUpdated: '11/2/2016'
                }
        ];
}

/*
 Nov. 2, 2016
 Prepare the html content for each support
*/
function prepareMPSupportHtml() {
    var mpContactSupport = GetFactoryContactSupprt();
    var len = mpContactSupport.length;

    // add content into the DOM -                
    var salesHtml = $('#ID_Contacts_Support');
    var html = "";
    for (var j = 0; j < len; j++) {
        "use strict";
        try {
            var runner = mpContactSupport[j];

            var area = runner.Area;
            var emailHref = runner.Email_href;
            var emailText = runner.Email_text;
            var fax = runner.Fax;
            var name = runner.Name;
            var phone = runner.Phone;
            var text = runner.Text1;

            var cssClass = (j % 2 == 0) ? "alpha" : "omega";
            html += '<div class="' + "grid_3 contacts_cell " + cssClass + '"> ';
            html += '<div>' + area + '</div>';
            html += '<p>' + name + '</p>';
            html += '<p>' + phone + '</p>';
            html += '<p>' + fax + '</p>';
            html += '<p><a href="' + emailHref + '">' + emailText + '</a></p>';
            if (text.length > 0)
                html += '<p>' + text + '</p>';
            html += '</div>'

            if (j > 0 && (j + 1) % 2 == 0)
                html += '<div class="' + 'grid_6' + '"></div>';
        } catch (e) {
            alert("code has syntax error - prepare_MPSupport_Html()")
        }
    }

    salesHtml.after(html);
}