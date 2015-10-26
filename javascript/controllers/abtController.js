angular.module('myApp')
    .controller('abtCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        if(id == null) { id = 0; };
        
        $http.get('/api/quotes')
                .then(function successCallback(res) {
                    controller.quotes = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
        });
        $http.get('/api/abt-imgs')
                .then(function successCallback(res) {
                    controller.images = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
        });
        
        this.idval = id;
        navDisplay();
}]);