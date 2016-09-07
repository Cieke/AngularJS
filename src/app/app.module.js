var appModule = angular.module('contactsApp',['contactsApp.core', 'ngRoute']);

appModule.config(function (appVersion) {
    console.log('app config ' +appVersion);
});
appModule.run(function () {
    console.log('app run');
});



appModule.constant('apiUrl', 'http://api.randomuser.me');

appModule.constant('appVersion','0.2.0');