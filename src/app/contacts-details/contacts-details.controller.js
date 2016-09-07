function ContactsDetailsController($routeParams){

    this.contactId = $routeParams.contactId;


}
angular.module('contactsApp').controller('contactsDetailsCtrl', ContactsDetailsController);