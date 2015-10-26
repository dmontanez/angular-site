angular.module('myApp')
    .controller('resCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        controller.resume = 'templates/pages/resume/resources/resume.pdf'
        navDisplay();
}]);