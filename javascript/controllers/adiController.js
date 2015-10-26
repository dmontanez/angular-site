angular.module('myApp')
    .controller('adiCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        if(id == null) {
            id = 0;
            $http.get('/api/otherQuals')
                .then(function successCallback(res) {
                    controller.interests = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/api/otherQuals/' + id)
                .then(function successCallback(res) {
                    controller.interests = res;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        this.idval = id;
        navDisplay();
}]);