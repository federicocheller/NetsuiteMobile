function get(requestParams)
{
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
}