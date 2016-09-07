function ContactsAddController($log, $location) {

    this.newContact = {
        lastName: '',
        firstName: '',
        email: ''
    };


    this.addContact = function () {
        var contactToAdd = {
            name: {
                first: this.newContact.firstName,
                last: this.newContact.lastName
            },
            email: this.newContact.email
        }
        $log.debug(contactToAdd);

        this.newContact.firstName = '';
        this.newContact.lastName = '';
        this.newContact.email = '';

        $location.path('/contacts-list.html')
    }

}

angular.module('contactsApp').controller('contactsAddCtrl', ContactsAddController)