run = function(request, response) {
    try
    {
        var html = '<!DOCTYPE html>';
        html += '<html>';
        html += '<head>';
        html += '<meta charset="utf-8">';
        html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
        html += '<title>Netsuite Mobile</title>';
        html += '<link rel="shortcut icon" href="https://system.na1.netsuite.com/core/media/media.nl?id=10395&c=TSTDRV1275821&h=55c461df6c72d0b8b4ab&_xt=.ico" type="image/x-icon" />';
        html += '<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">';
        html += '<link rel="stylesheet" href="https://system.na1.netsuite.com/core/media/media.nl?id=10389&c=TSTDRV1275821&h=624989697e1528e70a25&_xt=.css">';
        html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">';
        html += '<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">';
        html += '<link rel="stylesheet" href="https://system.na1.netsuite.com/core/media/media.nl?id=10388&c=TSTDRV1275821&h=7b7f98d69a86804ab05d&_xt=.css">';
        html += '<link rel="stylesheet" href="https://system.na1.netsuite.com/core/media/media.nl?id=10390&c=TSTDRV1275821&h=cd69d12df5132c9eea34&_xt=.css">';
        html += '<!--[if lt IE 9]><script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script><script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->';
        html += '</head>';
        html += '<body class="hold-transition skin-blue-light sidebar-mini" ng-app="nsmobile">';
        html += '<div class="wrapper">';
        html += '<header class="main-header">';
        html += '<a href="" class="logo">';
        html += '<span class="logo-mini"><b>CLU</b></span>';
        html += '<span class="logo-lg"><b>Clustin</b> srl</span>';
        html += '</a>';
        html += '<nav class="navbar navbar-static-top" role="navigation">';
        html += '<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">';
        html += '<span class="sr-only">Toggle navigation</span>';
        html += '</a>';
        html += '<div class="navbar-custom-menu">';
        html += '<ul class="nav navbar-nav">';
        html += '<li class="dropdown user user-menu">';
        html += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">';
        html += '<img id="img-user-image" class="user-image" class="img-circle" alt="User Image" />';
        html += '<span class="hidden-xs">' + nlapiGetContext().getName() + '</span>';
        html += '</a>';
        html += '<ul class="dropdown-menu">';
        html += '<li class="user-header">';
        html += '<img id="img-user-header" src="" class="img-circle" alt="User Image" />';
        html += '<p>' + nlapiGetContext().getName() + '<small>' + nlapiGetContext().getEmail() + '</small>';
        html += '</p>';
        html += '</li>';
        html += '<li class="user-footer">';
        html += '<div class="pull-right">';
        html += '<a href="/pages/nllogoutnoback.jsp" class="btn btn-default btn-flat">Sign out</a>';
        html += '</div>';
        html += '</li>';
        html += '</ul>';
        html += '</li>';
        html += '<li>';
        html += '<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</nav>';
        html += '</header>';
        html += '<aside class="main-sidebar">';
        html += '<section class="sidebar">';
        html += '<form action="#" method="get" class="sidebar-form">';
        html += '<div class="input-group">';
        html += '<input type="text" name="q" class="form-control" placeholder="Search...">';
        html += '<span class="input-group-btn">';
        html += '<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>';
        html += '</span>';
        html += '</div>';
        html += '</form>';
        html += '<ul class="sidebar-menu" ng-controller="sidebar-menuController">';
        html += '<li class="header">MAIN NAVIGATION</li>';
        html += '<li class="active"><a href="#" ng-click="menu(1,$event)"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>';
        html += '<li><a href="#" ng-click="menu(2,$event)"><i class="fa fa-table"></i> <span>Sales orders</span></a></li>';
        html += '<li><a href="#" ng-click="menu(3,$event)"><i class="fa fa-table"></i> <span>Invoices</span></a></li>';
        html += '<li><a href="#" ng-click="menu(4,$event)"><i class="fa fa-table"></i> <span>Return authorizations</span></a></li>';
        html += '<li><a href="#" ng-click="menu(5,$event)"><i class="fa fa-users"></i> <span>Contacts</span></a></li>';
        html += '<li><a href="#" ng-click="menu(6,$event)"><i class="fa fa-question-circle"></i> <span>Need help</span></a></li>';
        html += '</ul>';
        html += '</section>';
        html += '</aside>';
        html += '<div class="content-wrapper">';
        html += '<section class="content-header" ng-controller="content-headerController">';
        html += '<h1>Dashboard';
        html += '<small>Optional description</small>';
        html += '</h1>';
        html += '<ol class="breadcrumb">';
        html += '<li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>';
        html += '<li class="active">{{header}}</li>';
        html += '</ol>';
        html += '</section>';
        html += '<section class="content" ng-controller="contentController">';
        html += '{{content}}';

        //html += '<input type=button value=CALL onclick=\'$.ajax({url: "/app/site/hosting/restlet.nl?script=941&deploy=1&k=2",type: "GET",beforeSend: function(xhr){xhr.setRequestHeader("Content-Type", "application/json");},success: function(data) { alert("Success!"+data.sayhi); }});\' />';


        html += '</section>';
        html += '</div>';
        html += '<footer class="main-footer">';
        html += '<div class="pull-right hidden-xs">Clustin srl</div>';
        html += '<strong>Copyright &copy; 2015 <a href="http://www.clustin.com">Clustin</a>.</strong> All rights reserved.';
        html += '</footer>';
        html += '<aside class="control-sidebar control-sidebar-dark" ng-controller="aside-menuController">';
        html += '<div class="tab-content">';
        html += '<div class="tab-pane active" id="control-sidebar-home-tab">';
        html += '<h3 class="control-sidebar-heading">Settings</h3>';
        html += '<ul class="control-sidebar-menu">';
        html += '<li>';
        html += '<a href="#" ng-click="menu(1,$event)">';
        html += '<i class="menu-icon fa fa-envelope bg-orange"></i>';
        html += '<div class="menu-info">';
        html += '<h4 class="control-sidebar-subheading">Change email</h4>';
        html += '</div>';
        html += '</a>';
        html += '</li>';
        html += '<li>';
        html += '<a href="#" ng-click="menu(2,$event)">';
        html += '<i class="menu-icon fa fa-lock bg-red"></i>';
        html += '<div class="menu-info">';
        html += '<h4 class="control-sidebar-subheading">Change password</h4>';
        html += '</div>';
        html += '</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        html += '</aside>';
        html += '<div class="control-sidebar-bg"></div>';
        html += '</div>';
        html += '<script src="https://system.na1.netsuite.com/core/media/media.nl?id=9985&c=TSTDRV1275821&h=5036f344c5a30de930c5&_xt=.js"></script>';
        html += '<script src="https://system.na1.netsuite.com/core/media/media.nl?id=10392&c=TSTDRV1275821&h=420733b45492a949ec05&_xt=.js"></script>';
        html += '<script src="https://system.na1.netsuite.com/core/media/media.nl?id=10394&c=TSTDRV1275821&h=2bf29d0e64e149c4d723&_xt=.js"></script>';
        html += '<script src="https://system.na1.netsuite.com/core/media/media.nl?id=10393&c=TSTDRV1275821&h=9c2980ac16a21ddb485c&_xt=.js"></script>';
        html += '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>';
        html += '<script src="https://system.na1.netsuite.com/core/media/media.nl?id=10391&c=TSTDRV1275821&h=8b8b32e539240737dc36&_xt=.js"></script>';
        html += '<script>var idUser="' + nlapiGetContext().getUser() + '";var srcUser=getGravatar("'+ nlapiGetContext().getEmail() +'", 160);$("#img-user-image").attr("src", srcUser);$("#img-user-header").attr("src", srcUser);</script>';
        html += '</body></html>';




        response.write(html);


        // CALL WITH NS API FORM
        //html += "<br><input type='button' value='CALL RESTLET TEST' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=941&deploy=1&k=2', null, a);alert(JSON.stringify(b));\" >";
        //html += "<br><input type='button' value='READ SALES ORDERS' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=944&deploy=1&type=salesorder', null, a);alert(JSON.stringify(b));\" >";
        //html += "<br><input type='button' value='READ SALES ORDER' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=944&deploy=1&type=salesorder&id=12618', null, a);alert(JSON.stringify(b));\" >";
        //html += "<br><input type='button' value='READ INVOICE' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=944&deploy=1&type=invoice&id=12619', null, a);alert(JSON.stringify(b));\" >";
        //html += "<br><input type='button' value='READ RMA' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=944&deploy=1&type=returnauthorization&id=1618', null, a);alert(JSON.stringify(b));\" >";
        //html += "<br><input type='button' value='READ CONTACTS' onclick=\"var a = {'Content-Type': 'application/json'};var b = nlapiRequestURL('/app/site/hosting/restlet.nl?script=945&deploy=1&id=" + nlapiGetContext().user + "', null, a);alert(JSON.stringify(b));\" >";
        //var htmlInstruct = form.addField('custpage_p1', 'inlinehtml').setLayoutType('outsideabove', 'startrow');
        //htmlInstruct.setDefaultValue(html);





        ///SAMPLE ADD ELEMENT IN FORM
        //form.addButton('aaa', 'Inserisci', 'alert(\'Clienti:\' + nlapiGetFieldValue(\'xxx\'));');
        //form.addField('xxx', 'multiselect', 'Clienti', 'customer');


        ///SAMPLE FOR CHANGE MAIL & PASSWORD
        //var login = nlapiGetLogin();
        //login.changeEmail('MycUrr3ntPa$$word', 'newemail@netsuite.com', true);
        //login.changePassword('MycUrr3ntPa$$word', 'MyNeWPaSw0rD!');

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

    }
    catch(exc)
    {
        response.write(JSON.stringify(exc));
    }
};