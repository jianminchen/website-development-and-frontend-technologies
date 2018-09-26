function getCanadaProvinces() {
    return "AB BC MB NB NL NS NT NU ON PE QC SK YT";
}

function getCanadaProvincesDetail() {
    return "AB=Alberta BC=British+Columbia MB=Manitoba NB=New+Brunswick NL=Newfoundland+&*Labrador NS=Nova+Scotia NT=Northwest+Territories NU=Nunavut ON=Ontario PE=Prince+Edward*Island QC=Quebec SK=Saskatchewan YT=Yukon";
}
/*
Nov. 2, 2016
Prepare the html content for provinces in Canada
*/
function prepareCanadaProvHtml() {

    // add content into the DOM -                
    var salesHtml = $('#ID_Contacts_Canada_Prov');
    salesHtml.empty();
    var html = "";

    var canadaProvinces = getCanadaProvinces();
    var provs = canadaProvinces.split(" ");
    var len = provs.length;

    var canadaProvincesDetail = getCanadaProvincesDetail();
    var namePair = canadaProvincesDetail.split(" ")

    for (var j = 0; j < len; j++) {
        "use strict";
        try {
            var runner = provs[j];
            var startsWith = runner + "=";

            var index = indexOf_StartsWith(namePair, startsWith);
            var title = (index > -1) ? namePair[index].split('=')[1].replace("+", " ").replace("*", " ") : "";

            /*  html code to generate - AB=Alberta - Nov. 3, 2016
            <li id="AB"><span style="cursor:pointer" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" onclick="reload('AB')" title="Alberta">AB</span> &nbsp;</li>
            */

            html += '<li id="'
            html += runner;
            html += '"><span style="cursor:pointer" onmouseover="this.style.textDecoration=';
            html += "'underline'";
            html += '" onmouseout="this.style.textDecoration=';
            html += "'none'";
            html += '" onclick="reload(';
            html += "'" + runner + "'" + ')" title="' + title + '">';
            html += runner + '</span>  &nbsp;</li>';
        } catch (e) {
            alert("code has syntax error - prepare_CanadaProv_Html()")
        }
    }

    salesHtml.append(html);
}