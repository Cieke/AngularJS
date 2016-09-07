angular.module('contactsApp')
    .config(function ($routeProvider){
        $routeProvider.when('/contacts-list', {
            templateUrl:'app/contacts-list/contacts-list.html',
            controller:'contactsListCtrl',
            controllerAs:'ctrl'
        });

        $routeProvider.when('/contacts-add', {
           templateUrl : 'app/contacts-add/contacts-add.html',
            controller: 'contactsAddCtrl',
            controllerAs:'ctrl'
        });

        $routeProvider.when('/contacts-details/:contactId', {
            templateUrl : 'app/contacts-details/contacts-details.html',
            controller: 'contactsDetailsCtrl',
            controllerAs:'ctrl'

        })

        $routeProvider.otherwise({
            redirectTo:'/contacts-list'
        });

    });