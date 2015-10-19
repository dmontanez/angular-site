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