function getUsaStates() {
    return "AK AL AR AZ CA CO CT DC DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY";
}

function getUsaStatesDetail() {
    return "AK=Alaska AL=Alabama AR=Arkansas AZ=Arizona CA=California CO=Colorado CT=Connecticut DC=Washington,+DC DE=Delaware FL=Florida GA=Georgia HI=Hawaii IA=Iowa ID=Idaho IL=Illinois IN=Indiana KS=Kansas KY=Kentucky  LA=Lousiana MA=Massachusetts MD=Maryland ME=Maine MI=Michigan MN=Minnesota MO=Missouri MS=Mississippi MT=Montana NC=North+Carolina ND=North+Dakota NE=Nebraska NH=New+Hampshire NJ=New+Jersey NM=New+Mexico NV=Nevada NY=New+York OH=Ohio OK=Oklahoma OR=Oregon PA=Pennsylvania RI=Rhode+Island SC=South+Carolina SD=South+Dakota TN=Tennessee TX=Texas UT=Utah VA=Virginia VT=Vermount WA=Washington WI=Wisconsin WV=West+Virginia WY=Wyoming";
}
/*
       Nov. 2, 2016
       North America Reps Tab 
       - highlight state/ province text if it is selected
       FL - showing FL in bold font if selected
      */
function stateProvHighlighted() {
    function getUrlParams() {    ///find out which state is chosen.
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });

        return params;
    }

    var params = getUrlParams();

    var state = params.state;
    var d = document.getElementById(state);
    if (d != null)
        d.classList.add('active_rep');
}

/*
Nov. 2, 2016
Prepare the html content for states in USA
*/
function prepareUsaStatesHtml() {

    // add content into the DOM -                
    var salesHtml = $('#ID_Contacts_USA_States');
    salesHtml.empty();
    var html = "";

    var usaStatesInOne = getUsaStates(); 
    var states = usaStatesInOne.split(" ");

    var len = states.length;
    var statesDetail = getUsaStatesDetail();
    var namePair = statesDetail.split(" ")

    for (var j = 0; j < len; j++) {
        "use strict";
        try {
            var runner = states[j];
            var startsWith = runner + "=";

            var index = indexOf_StartsWith(namePair, startsWith);
            var title = (index > -1) ? namePair[index].split('=')[1].replace("+", " ") : "";

            /*  html code to generate - AK=Alaska - Nov. 3, 2016
            <li id="AK"><span style="cursor:pointer" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" onclick="reload('AK'); active()" title="Alaska">AK</span>  &nbsp;</li>
            */

            html += '<li id="'
            html += runner;
            html += '"><span style="cursor:pointer" onmouseover="this.style.textDecoration=';
            html += "'underline'";
            html += '" onmouseout="this.style.textDecoration=';
            html += "'none'";
            html += '" onclick="reload(';
            html += "'" + runner + "'" + '); active()" title="' + title + '">';
            html += runner + '</span>  &nbsp;</li>';

        } catch (e) {
            alert("code has syntax error - prepare_USAStates_Html()")
        }
    }

    salesHtml.append(html);
}