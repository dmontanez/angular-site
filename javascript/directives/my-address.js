angular.module('myApp')
    .directive('myAddress', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-address.html'
        };
    });