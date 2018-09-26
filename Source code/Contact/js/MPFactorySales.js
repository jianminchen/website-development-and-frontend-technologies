/*
Contact page - MP Factory - Sales portion
Feb. 28, 2018
*/
function GetSalesContact() {
    return [
                {
                    ID: 1,
                    Area: 'WESTERN CANADA',
                    Name: 'Darrell Lange',
                    Phone: '(T) 604-708-1184 Ext. 125',
                    Cellular: '(C) 604-782-8631',
                    Email_href: 'mailto:darrell.l@mplighting.com',
                    Email_text: 'darrell.l (at) mplighting.com',
                    LastUpdated: '3/27/2017'
                },
                {
                    ID: 2,
                    Area: 'NORTHEAST',
                    Name: 'Dion Beleznay',
                    Phone: '(T) 647-920-1720',
                    Cellular: '',
                    Email_href: 'mailto:dion.b@mplighting.com',
                    Email_text: 'dion.b (at) mplighting.com',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 3,
                    Area: 'NORTHWEST',
                    Name: 'Blair Smith',
                    Phone: '(T) 604-708-1184 Ext.125',
                    Cellular: '(C) 778-239-6420',
                    Email_href: 'mailto:blair.s@mplighting.com',
                    Email_text: 'blair.s (at) mplighting.com',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 4,
                    Area: 'CALIFORNIA/ NEVADA',
                    Name: 'Blair Smith',
                    Phone: '(T) 604-708-1184 Ext.125',
                    Cellular: '(C) 778-239-6420',
                    Email_href: 'mailto:blair.s@mplighting.com',
                    Email_text: 'blair.s (at) mplighting.com',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 5,
                    Area: 'NORTHEAST CENTRAL - NYC',
                    Name: 'Contact factory',
                    Phone: '(T) 604-708-1184',
                    Cellular: '',
                    Email_href: 'mailto:info@mplighting.com',
                    Email_text: 'info (at) mplighting.com',
                    LastUpdated: '4/28/2017'
                },
                {
                    ID: 6,
                    Area: 'SOUTHWEST/ SOUTHEAST/ INTERNATIONAL',
                    Name: 'Sandra Bartolomeo',
                    Phone: '(T) 604-708-1184',
                    Cellular: '(C) 778-998-1184',
                    Email_href: 'mailto:sandra.B@mplighting.com',
                    Email_text: 'sandra.b (at) mplighting.com',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 7,
                    Area: 'VANCOUVER AREA',
                    Name: 'Tom Ferguson',
                    Phone: '(T) 604-708-1184 Ext. 125',
                    Cellular: '(C) 604-417-7792',
                    Email_href: 'mailto:tom.f@mplighting.com',
                    Email_text: 'tom.f (at) mplighting.com',
                    LastUpdated: '11/2/2016'
                },
                {
                    ID: 8,
                    Area: 'BC DISTRICT',
                    Name: 'Darrell Lange',
                    Phone: '(T) 604-708-1184 Ext. 125',
                    Cellular: '(C) 604-782-8631',
                    Email_href: 'mailto:darrell.l@mplighting.com',
                    Email_text: 'darrell.l (at) mplighting.com',
                    LastUpdated: '1/13/2017'
                }
    ];
}

/*
 Nov. 2, 2016
 Prepare the html content for each sales manager
*/
function prepareMPFactorySalesHtml() {
    // MP Factory Sales - add content for page
    var salesContact = GetSalesContact();
    var len = salesContact.length;

    // add content into the DOM -                
    var salesHtml = $('#ID_Contact_Sales');
    var html = "";
    for (var j = 0; j < len; j++) {
        "use strict";
        try {
            var runner = salesContact[j];

            var area = runner.Area;
            var cellular = runner.Cellular;
            var emailHref = runner.Email_href;
            var emailText = runner.Email_text;
            var name = runner.Name;
            var phone = runner.Phone;

            var cssClass = (j % 2 == 0) ? "alpha" : "omega";
            html += '<div class="' + "grid_3 contacts_cell " + cssClass + '"> ';
            html += '<div>' + area + '</div>';
            html += '<p>' + name + '</p>';
            html += '<p>' + phone + '</p>';
            html += '<p>' + cellular + '</p>';
            html += '<p><a href="' + emailHref + '">' + emailText + '</a></p>';
            html += '</div>'

            if (j > 0 && (j + 1) % 2 == 0)
                html += '<div class="' + 'grid_6' + '"></div>';
        } catch (e) {
            alert("code has syntax error - prepare_MPSales_Html()")
        }
    }

    var emptyLine = '<div class="' + 'grid_6 alpha' + '" >&nbsp;</div>';
    for (var j = 0; j < 6; j++)
        html += emptyLine;

    salesHtml.after(html);
}