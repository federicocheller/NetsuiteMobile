function get(requestParams)
{
    var id = requestParams.id;
    var type = requestParams.type;
    if(id)
    {
        return nlapiLoadRecord(type, id);
    }
    else
    {
        var result = [];
        var oaColumns = [new nlobjSearchColumn('internalid')
            , new nlobjSearchColumn('tranid')
            , new nlobjSearchColumn('trandate')
            , new nlobjSearchColumn('amount')
            , new nlobjSearchColumn('currency')
            , new nlobjSearchColumn('status')];
        var oaFilters = [new nlobjSearchFilter('mainline',null,'is','T')];
        var oSrch = nlapiSearchRecord(type, null, oaFilters, oaColumns);
        if(oSrch != null && oSrch.length > 0) {
            for (var i = 0; i < oSrch.length; i++) {
                var record = {
                    internalid: oSrch[i].getValue('internalid')
                    , tranid: oSrch[i].getValue('tranid')
                    , trandate: oSrch[i].getValue('trandate')
                    , amount: oSrch[i].getValue('amount')
                    , currency: oSrch[i].getText('currency')
                    , status: oSrch[i].getText('status')
                    , type: type
                };

                result.push(record);
            }
        }
        return result;
    }
}

function post(requestParams)
{
    ///sales order:
    // company id
    // credit card type
    // credit card number
    // credit card expire
    // currency

    var result = new Object();

    try
    {
        var id = requestParams.data['id'];

        var salesOrder = nlapiCreateRecord('salesorder');
        salesOrder.setFieldValue('company', id);
        var internalId = nlapiSubmitRecord(salesOrder);

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