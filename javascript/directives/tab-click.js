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