angular.module('myApp')
    .config(['$routeProvider',
             function($routeProvider) {
                 $routeProvider
                .when('/temp', {
                    templateUrl: 'templates/pages/temp/index.html',
                    controller: 'tempCtrl',
                    controllerAs: 'ctrl'
                })
                .when('/education', {
                    templateUrl: 'templates/pages/education/index.html',
                     controller: 'edCtrl',
                     controllerAs: 'ed'
                 })
                .when('/experience', {
                    templateUrl: 'templates/pages/experience/index.html',
                     controller: 'exCtrl',
                     controllerAs: 'ex'
                })
                 .when('/skills', {
                    templateUrl: 'templates/pages/skills/index.html',
                     controller: 'tecCtrl',
                     controllerAs: 'tec'
                })
                 .when('/projects', {
                        templateUrl: 'templates/pages/projects/index.html'
                })
                 .when('/other', {
                        templateUrl: 'templates/pages/other/index.html'
                })
                 .when('/resume', {
                        templateUrl: 'templates/pages/resume/index.html'
                })
                 .when('/about', {
                        templateUrl: 'templates/pages/about-me/index.html'
                })
                 .when('/contact', {
                        templateUrl: 'templates/pages/contact/index.html'
                })
                 .otherwise({
                     redirectTo: '/',
                     templateUrl: 'templates/pages/home/index.html'
                 });
    }]);