/*! node-mongo-rest - v0.0.1 - 2015-10-26 */
angular.module('myApp', ['ngRoute']);
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
angular.module('myApp')
    .controller('edCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        if(id == null) {
            id = 0;
            $http.get('/api/schools')
                .then(function successCallback(res) {
                    controller.schools = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/api/schools/' + id)
                .then(function successCallback(res) {
                    controller.schools = res;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        this.idval = id;
        navDisplay();
}]);
angular.module('myApp')
    .controller('exCtrl', ['$http', '$routeParams', function($http, $routeParams) {
        var controller = this;
        var id = $routeParams.id;        
        if(id == null) {
            id = 0;
            $http.get('/api/companies')
                .then(function successCallback(res) {
                    controller.positions = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/api/companies/' + id)
                .then(function successCallback(res) {
                    controller.positions = res;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        this.idval = id;
        navDisplay();
}]);
angular.module('myApp')
    .controller('headCtrl',['$scope',
        function($scope) {
            this.name = 'Daniel J. Montanez';
            this.title = 'Software Engineer';
            this.contact = {
                phone: 6618694325,
                email: 'dmontanez@psualum.com'
            };
            this.address = {
                city: 'San Diego',
                state: 'CA'
            };
        }]);
angular.module('myApp')
    .controller('projCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;        
        if(id == null) {
            id = 0;
            $http.get('/api/activities')
                .then(function successCallback(res) {
                    controller.projects = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/api/activities/' + id)
                .then(function successCallback(res) {
                    controller.projects = res;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        this.idval = id;
        navDisplay();
}]);
angular.module('myApp')
    .controller('resCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        controller.resume = 'templates/pages/resume/resources/resume.pdf'
        navDisplay();
}]);
angular.module('myApp')
    .controller('tecCtrl', ['$http', '$routeParams', function($http, $routeParams) {
        var controller = this;
        var id = $routeParams.id;
        if(id == null) {
            id = 0;
            $http.get('/api/technologies')
                .then(function successCallback(res) {
                    controller.skills = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/api/technologies/' + id)
                .then(function successCallback(res) {
                    controller.skills = res;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        this.idval = id;
        navDisplay();
}]);
angular.module('myApp')
    .controller('tempCtrl',['$scope', '$http',
        function($scope, $http) {
            $scope.tempVarCtrl = "Temp Controller";        
    }]);
angular.module('myApp')
    .directive('aboutClick', function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                $(elem).click(function(event) {
                    event.preventDefault();
                    $(".about-pic-modal").attr('src', '');
                    var aboutSrc = $(this).attr('src');
                    var parts = aboutSrc.split('/');
                    aboutSrc = 'templates/pages/about-me/images/big/' + parts[4];
                    $(".about-pic-modal").attr('src', aboutSrc);
                });
            }
        }
    });
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
angular.module('myApp')
    .directive('myHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/index.html',
            controller: 'headCtrl',
            controllerAs: 'head'
        };
    });

angular.module('myApp')
    .directive('myAddress', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-address.html'
        };
    });
angular.module('myApp')
    .directive('myContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-contact.html'
        };
    });
angular.module('myApp')
    .directive('myNavBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/nav/my-nav-bar.html'
        };
});
angular.module('myApp')
    .directive('myTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/header/my-title.html'
        };
    });
angular.module('myApp')
    .directive('navClick', function() {
        return {
            restrict: "A",
            link: function(scope,elem,attrs) {
                $(elem).click(function(event) {
                    $(".navbar-nav li").removeClass("active");
                    $(this).addClass("active");
                });
            }
        }
});
angular.module('myApp')
    .directive('tabClick', function() {
        return {
            restrict: "A",
            link: function(scope,elem,attrs) {
                $(elem).click(function(event) {
                    $(".nav-tabs li").removeClass("active");
                    $(".dropdown-menu li").removeClass("active");
                    $(this).addClass("active");
                });
            }
        }
    });
angular.module('myApp')
    .filter('phone', function() {
        return function(number) {
            number = String(number);
            var area = number.substring(0,3);
            var front = number.substring(3,6);
            var end = number.substring(6,10);
            
            formattedNumber = ('(' + area + ')' + front + '-' + end);
            
            return formattedNumber;
        };
    });
function navDisplay() {
    $(document).ready(function() {
        $(".dropdown-menu li a").on('click', function(event) {
            var dropTitle = $(this).text() + " ";
           $(this).closest('div').find('button text').text(dropTitle);
        });

        var w = $(window).width();
            if( w < 650) {
                $(".dropdown.small").show();
                $(".nav-tabs").hide();
            }else {
                $(".nav-tabs").show();
                $(".dropdown.small").hide();
            }

        $(window).on("resize", function(event){
            w = $(window).width();
            if( w < 650) {
                $(".dropdown.small").show();
                $(".nav-tabs").hide();
            }else {
                $(".nav-tabs").show();
                $(".dropdown.small").hide();
            }
        });
    });
};
$(document).ready(function() {
    $(".navbar-nav li a").click(function() {
        if (!$(this).hasClass("dropdown-toggle")) {
            $(".navbar-collapse").collapse('hide');
        }
    });
    $(".ext-link").click(function(event) {
        event.stopImmediatePropagation();
    });
    
    $(".navbar-brand").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    
});
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