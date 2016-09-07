function ContactsListController($http, apiUrl) {
    this.title = 'Contacts List';
    var that = this;
    this.contacts = [];


    function getContacts() {

        $http.get(apiUrl + '/?results=20').then(function (res) {

            console.log(res.data);
            that.contacts = res.data.results;
        });
    }

    this.showList = true;
    this.toggleList = function () {
        this.showList = !this.showList;
    };


    getContacts();
}


angular.module('contactsApp')
    .controller('contactsListCtrl', ContactsListController);