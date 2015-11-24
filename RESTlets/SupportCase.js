function get(requestParams)
{
    var id = requestParams.id;
    var type = 'supportcase';
    if(id)
    {
        return nlapiLoadRecord(type, id);
    }
    else
    {
        var result = [];
        var oaColumns = [new nlobjSearchColumn('internalid'),new nlobjSearchColumn('casenumber'),new nlobjSearchColumn('title'),new nlobjSearchColumn('startdate'),new nlobjSearchColumn('status'),new nlobjSearchColumn('stage')];
        var oSrch = nlapiSearchRecord(type, null, null, oaColumns);
        if(oSrch != null && oSrch.length > 0) {
            for (var i = 0; i < oSrch.length; i++) {
                var record = {
                    internalid: oSrch[i].getValue('internalid')
                    , casenumber: oSrch[i].getValue('casenumber')
                    , title: oSrch[i].getValue('title')
                    , startdate: oSrch[i].getValue('startdate')
                    , status: oSrch[i].getText('status')
                    , stage: oSrch[i].getValue('stage')
                };

                result.push(record);
            }
        }
        return result;
    }
}

function post(requestParams)
{
    var result = new Object();

    try
    {
        var id = requestParams.data['id']
            , title = requestParams.data['title']
            , message = requestParams.data['message'];

        var supportCase = nlapiCreateRecord('supportcase');
        supportCase.setFieldValue('title', title);
        supportCase.setFieldValue('company', id);
        supportCase.setFieldValue('incomingmessage', message);

        var internalId = nlapiSubmitRecord(supportCase);

        result.status = "success";
        result.id = internalId;
        return result;
    }
    catch(exc)
    {
        result.status = "failed";
        result.message = exc;
        return result;
    }
}