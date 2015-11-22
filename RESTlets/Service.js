function get(requestParams)
{
    var result = new Object();

    try
    {
        var type = requestParams.type;
        var login = nlapiGetLogin();

        if(type == 'm')
        {
            var currentPassword = requestParams.cpwd;
            var newEmail = requestParams.nmail;

            login.changeEmail(currentPassword, newEmail, true);
        }
        else if(type == 'p')
        {
            var currentPassword = requestParams.cpwd;
            var newPassword = requestParams.npwd;

            login.changePassword(currentPassword, newPassword);
        }

        result.status = "success";
        return result;
    }
    catch(exc)
    {
        result.status = "failed";
        result.message = exc;
        return result;
    }
}

function post(requestParams)
{
    var result = new Object();

    try
    {
        var subject = "Mail from " + requestParams.data['mail'] + " - " + requestParams.data['subject'];
        var body = requestParams.data['body'];
        var from = nlapiGetContext().getSetting('SCRIPT', 'custscript_zz_chl_emailfrom'); //1882
        var to = nlapiGetContext().getSetting('SCRIPT', 'custscript_zz_chl_emailto');   //federico.cheller@gmail.com

        nlapiSendEmail(from, to, subject, body);

        result.status = "success";
        return result;
    }
    catch(exc)
    {
        result.status = "failed";
        result.message = exc;
        return result;
    }
}