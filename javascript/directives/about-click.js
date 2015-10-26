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