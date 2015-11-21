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
        var subject = "Mail from " + requestParams.mail + " - " + requestParams.subject;
        var body = requestParams.body;
        var from = 1882;                            ///todo: set as parameter
        var to = "federico.cheller@gmail.com";      ///todo: set as parameter

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