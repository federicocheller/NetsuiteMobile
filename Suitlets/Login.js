run = function(request, response) {
    try
    {
        ///////NOT WORKING SUITELET VERSION FOR LOGIN PAGE!!!!!!!!!!!!!!!!!!!!! DON'T KNOW WHY???

        var form = nlapiCreateForm('', true);

        var htmlInstruct = form.addField('custpage_p1', 'inlinehtml').setLayoutType('outsideabove', 'startrow');

        var html = '<body bgcolor="#FFFFFF" link="#000000" vlink="#000000" alink="#000000" text="#000000" topmargin=5 leftmargin=5 rightmargin=5 marginheight=5 onload="document.forms[0].jsenabled.value = \'T\';  populateEmailFromCookie();  ">';
        html += '<form method="post" action="/app/login/nllogin.nl" onsubmit="if (typeof(this.submitted)!=\'undefined\') return false; if (checkemail(email,false,true) && checknotempty(document.forms[0].password,\'Password\')) {this.submitted=1;return true;} else return false; ">';
        html += '<input class=input name=email size="30" value="">';
        html += '<input class=input name="password" id="password" size="30" maxlength="255" type="password" >';
        html += '<input type="hidden" name="errorredirect" value="/pages/login.jsp">';
        html += '<input name="rememberme" type="checkbox" value="T" tabindex="-1" class="checkbox" >';
        html += '<input type="hidden" name="redirect" value="https://system.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=942&deploy=1">';
        html += '<input type="hidden" name="jsenabled" value="F">';
        html += '<input type="hidden" name="ct" value="-2">';
        html += '<input type="submit" name="submitter" value="Accesso" class="bgbutton" onClick="document.forms[0].jsenabled.value = \'T\';  setLoginCookie(rememberme.checked); ">';
        html += '</form></body>';

        htmlInstruct.setDefaultValue(html);
        response.writePage(form);

        //response.write(html);

    }
    catch(exc)
    {
        response.write(JSON.stringify(exc));
    }
};