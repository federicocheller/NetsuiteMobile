function get(requestParams)
{
    var result = [];
    var oaColumns = [new nlobjSearchColumn('entityid'),new nlobjSearchColumn('email'),new nlobjSearchColumn('phone'),new nlobjSearchColumn('fax'),new nlobjSearchColumn('contactrole')];
    var oSrch = nlapiSearchRecord('contact', null, null, oaColumns);
    if(oSrch != null && oSrch.length > 0) {
        for (var i = 0; i < oSrch.length; i++) {
            var record = {
                entityid: oSrch[i].getValue('entityid')
                , email: oSrch[i].getValue('email')
                , phone: oSrch[i].getValue('phone')
                , fax: oSrch[i].getValue('fax')
                , contactrole: oSrch[i].getText('contactrole')
            };

            result.push(record);
        }
    }
    return result;



    /*   SAMPLE USING SAVED SEARCH
     var contacts = [];

     var id = requestParams.id;

     var contactSearch = nlapiLoadSearch('contact','customsearch_zz_chl_customer_contacts');

     /// filters maybe not need (use the visibility of customer center)
     //var searchFilters = [];
     //searchFilters.push(new nlobjSearchFilter('customer.internalid', null, 'is', id));
     //contactSearch.addFilters(searchFilters);

     var contactResultSet  = contactSearch.runSearch();
     var contacts = [];
     var contactResultList = contactResultSet.getResults(0, 1000);
     for(var i=0;i<contactResultList.length;i++)
     {
     var contact = {
     entityid: contactResultList[i].getValue('entityid'),
     email: contactResultList[i].getValue('email'),
     phone: contactResultList[i].getValue('phone')
     };
     contacts.push(contact);

     };

     return contacts;
     */
}