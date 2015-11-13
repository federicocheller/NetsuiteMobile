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
        var oaColumns = [new nlobjSearchColumn('internalid'),new nlobjSearchColumn('tranid'),new nlobjSearchColumn('trandate'),new nlobjSearchColumn('amount'),new nlobjSearchColumn('status')];
        var oSrch = nlapiSearchRecord(type, null, null, oaColumns);
        if(oSrch != null && oSrch.length > 0) {
            for (var i = 0; i < oSrch.length; i++) {
                var record = {
                    internalid: oSrch[i].getValue('internalid')
                    , tranid: oSrch[i].getValue('tranid')
                    , trandate: oSrch[i].getValue('trandate')
                    , amount: oSrch[i].getValue('amount')
                    , status: oSrch[i].getValue('status')
                };

                result.push(record);
            }
        }
        return result;
    }
}