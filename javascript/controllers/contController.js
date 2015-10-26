angular.module('myApp')
    .controller('contCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        if(id == null) { id = 0; };
        $http.get('/api/contact')
                .then(function successCallback(res) {
                    controller.phones = res.data[0].phones;
                    controller.emails = res.data[0].emails;
                    controller.locations = res.data[0].locations;
                }, function errorCallback(err) {
                    alert("Error: " + err);
        });
        this.idval = id;
        navDisplay();
}]);