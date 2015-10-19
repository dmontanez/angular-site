angular.module('myApp')
    .directive('myContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-contact.html'
        };
    });