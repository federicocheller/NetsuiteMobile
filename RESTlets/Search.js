function get(requestParams)
{
    var keyword = requestParams.q;

    var result = [];
    var searchResults = nlapiSearchGlobal(keyword);
    if(searchResults)
    {
        for ( var i = 0; i < searchResults.length; i++ )
        {
            var searchResult = searchResults[ i ];

            var record = {
                recordid: searchResult.getId()
                , rectype: searchResult.getRecordType()
                , name: searchResult.getValue('name')
                , type: searchResult.getValue('type')
                , info1: searchResult.getValue('info1')
                , info2: searchResult.getValue('info2')
            };

            result.push(record);
        }
    }

    return result;
}