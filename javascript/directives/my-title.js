angular.module('myApp')
    .directive('myTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-title.html'
        };
    });