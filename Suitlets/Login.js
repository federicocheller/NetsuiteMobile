run = function(request, response) {
    try
    {
        var form = nlapiCreateForm('', true);

        var htmlInstruct = form.addField('custpage_p1', 'inlinehtml').setLayoutType('outsideabove', 'startrow');

        //var html = '<form method="post" action="/app/login/nllogin.nl" onsubmit="if (typeof(this.submitted)!=\'undefined\') return false; if (checkemail(email,false,true) && checknotempty(document.forms[0].password,\'Password\')) {this.submitted=1;return true;} else return false; ">';
        //html += '<table border="0" cellspacing="0" cellpadding="3" width="100%"> <tr> <td> <table border="0" cellspacing="0" cellpadding="5" width="100%"> <tr> <td valign="top"> <table width="100%" border=0 cellpadding=0 cellspacing=0> <tr> <td> <tr> <td class=smalltextnolink align=right>Email address </td>';
        //html += '<td> <input class=input name=email size=30 value="" onchange="rememberme.checked=false;"> </td> </tr> <tr> <td class=smalltextnolink align=right>Password </td> <td> <input class=input name=password size=30 type=password maxlength=16> </td> </tr> <tr> <td class=text>';
        //html += '<a class="smalltextnolink" tabindex=-1 href="#" onmouseover="this.className=\'smalltext\'; return true;" onmouseout="this.className=\'smalltextnolink\';"onclick="return fieldHelp(\'When you check this box, you will not have to re-enter your e-mail address when you log in. For security, you will always have to re-enter your password.\')">Remember Me</A>';
        //html += '</td> <td> <input name=rememberme type=checkbox value=T tabindex=-1 class="checkbox" > </td> </tr> <tr>';
        //html += '<td colspan=2 class=smalltext><a href="https://system.netsuite.com/pages/pwdreset.jsp">Forgot your password?</a></td>';
        //html += '</tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> <tr> <td> <table cellspacing=0 cellpadding=3 border=0> <tr> <td>';
        //html += '<input type="hidden" name="redirect" value="/app/site/hosting/scriptlet.nl?script=942&deploy=1"> ' +
        //    '<input type="hidden" name="jsenabled" value="T"> <input type="hidden" name="ct" value="0">' +
        //    '<input type="submit" name="submitter" value="Login" class="bgbutton" onClick="document.forms[0].jsenabled.value = \'T\'; setLoginCookie(rememberme.checked); ">';
        //html += '</td> </tr> </table> </td> </tr> </table> </form>';


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