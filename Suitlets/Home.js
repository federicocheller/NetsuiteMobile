run = function(request, response) {
    try
    {
        /////WORKING VERSION CALL RESTLET FROM SERVER SIDE!!!!!!!!!!!!!
        //var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=941&deploy=1&k=2';
        //var headers = {
        //    'Accept': "*/*",
        //    'Content-Type': 'application/json',
        //    'Authorization': 'NLAuth nlauth_account=TSTDRV1275821, nlauth_email=mail@mail.com, nlauth_signature=password, nlauth_role=14'
        //};

        //var service = nlapiRequestURL(url, null, headers, 'GET');
        //var result = service.getBody();
        //nlapiLogExecution('DEBUG', 'run', JSON.stringify(result));
        //response.write(JSON.stringify(result));


        var form = nlapiCreateForm('', true);

        var html = "Welcome " + nlapiGetContext().name;
        html += "<br><input type='button' value='CALL RESTLET' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=941&deploy=1&k=2', null, a);alert(JSON.stringify(b));\" >";

        var htmlInstruct = form.addField('custpage_p1', 'inlinehtml').setLayoutType('outsideabove', 'startrow');
        htmlInstruct.setDefaultValue(html);




        //form.addButton('aaa', 'Inserisci', 'alert(\'Clienti:\' + nlapiGetFieldValue(\'xxx\'));');
        //form.addField('xxx', 'multiselect', 'Clienti', 'customer');


        response.writePage( form );

    }
    catch(exc)
    {
        response.write(JSON.stringify(exc));
    }
};