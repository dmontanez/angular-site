angular.module('myApp')
    .controller('tempCtrl',['$scope', '$http',
        function($scope, $http) {
            $scope.tempVarCtrl = "Temp Controller";        
    }]);