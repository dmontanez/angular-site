angular.module('myApp')
    
 .directive('myFooter', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/footer/index.html',
        controller: function($scope) {
            $scope.date = new Date();
        }
    };
});