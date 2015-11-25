run = function(request, response) {
    try
    {
        var html = '';

        html += '<form method="post" action="/app/login/nllogin.nl" onsubmit="this.submitted=1;return true;">';
        html += '<input type="email" class="form-control" placeholder="Email" name="email" size="30" required autofocus onchange="rememberme.checked=false;">';
        html += '<input type="password" class="form-control" placeholder="Password" name="password" size="30" maxlength="16" required>';
        html += '<input type="checkbox" value="T" name="rememberme" tabindex="-1"> Remember Me';
        html += '<button type="submit" class="btn btn-primary btn-block btn-flat btn-submitter" id="submitter" name="submitter" onClick="document.forms[0].jsenabled.value = \'T\';">Sign In</button>';
        html += '<input type="hidden" name="c" value="TSTDRV1275821">';
        html += '<input type="hidden" name="redirect" value="/app/site/hosting/scriptlet.nl?script=942&deploy=1">';
        html += '<input type="hidden" name="jsenabled" value="T">';
        html += '<input type="hidden" name="ct" value="0">';
        html += '<input type="hidden" name="errorredirect" value="https://system.na1.netsuite.com/core/media/media.nl?id=9986&c=TSTDRV1275821&h=7b3f73536c02d1fe4f43">';
        html += '</form>';

        response.write(html);

    }
    catch(exc)
    {
        response.write(JSON.stringify(exc));
    }
};