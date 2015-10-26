angular.module('myApp')
    .config(['$routeProvider',
             function($routeProvider) {
                 $routeProvider
                .when('/temp', {
                     templateUrl: 'templates/pages/temp/index.html',
                     controller: 'tempCtrl',
                     controllerAs: 'ctrl'
                })
                .when('/education/:id?', {
                     templateUrl: 'templates/pages/education/index.html',
                     controller: 'edCtrl',
                     controllerAs: 'ed'
                 })
                .when('/experience/:id?', {
                     templateUrl: 'templates/pages/experience/index.html',
                     controller: 'exCtrl',
                     controllerAs: 'ex'
                })
                 .when('/skills/:id?', {
                     templateUrl: 'templates/pages/skills/index.html',
                     controller: 'tecCtrl',
                     controllerAs: 'tec'
                })
                 .when('/projects/:id?', {
                     templateUrl: 'templates/pages/projects/index.html',
                     controller: 'projCtrl',
                     controllerAs: 'proj'
                })
                 .when('/other/:id?', {
                     templateUrl: 'templates/pages/other/index.html',
                     controller: 'adiCtrl',
                     controllerAs: 'adi'
                })
                 .when('/resume', {
                     templateUrl: 'templates/pages/resume/index.html',
                     controller: 'resCtrl',
                     controllerAs: 'res'
                })
                 .when('/about/:id?', {
                     templateUrl: 'templates/pages/about-me/index.html',
                     controller: 'abtCtrl',
                     controllerAs: 'about'
                })
                 .when('/contact/:id?', {
                     templateUrl: 'templates/pages/contact/index.html',
                     controller: 'contCtrl',
                     controllerAs: 'contact'
                })
                 .otherwise({
                     redirectTo: '/',
                     templateUrl: 'templates/pages/home/index.html'
                 });
    }]);