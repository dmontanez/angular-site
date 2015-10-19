angular.module('myApp')
    .directive('myHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/index.html',
            controller: 'headCtrl',
            controllerAs: 'head'
        };
    });
