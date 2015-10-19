angular.module('myApp')
    .directive('myNavBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/nav/my-nav-bar.html'
        };
});