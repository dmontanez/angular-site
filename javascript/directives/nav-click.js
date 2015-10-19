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