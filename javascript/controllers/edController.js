   var institutions = [
        {
            name: 'Pennsylvania State University',
            degree: 'M.E.',
            major: 'Software Engineering',
            minor: '',
            start: 1346482800000,
            end: 1408086000000,
            courses: [
                'Requirements Engineering',
                'Software System Design (UML)',
                'Pattern Oriented Design',
                'Database Design',
                'Software System Architecture',
                'Enterprise Integration',
                'Applied Human Computer Interaction',
                'Program Understanding',
                'Web Security and Privacy',
                'Software Project Management',
                'Software Testing',
                'Advanced Software Engineering Studio'
            ],
            images: [
                "templates/pages/education/images/ed_psu_logo.png",
                "templates/pages/education/images/lgo_psu.png",
                "templates/pages/education/images/sl_psu.png"
            ]
        },
        {
            name: 'California State University Bakersfield',
            degree: 'B.S.',
            major: 'Computer Science',
            minor: 'Philosophy',
            start: 1126594800000,
            end: 1308121200000,
            courses: [
                'Web Design',
                'Advanced Computer Networks',
                'Database Systems',
                'Software Engineering',
                'Beginning Artificial Intelligence',
                'Advanced Artificial Intelligence',
                'Programming Languages',
                'Advanced Computer Srchitecture',
                'Methods in Applied Statistics',
                'Data Analysis'
            ],
            images: [
                "templates/pages/education/images/ed_csub_logo.png",
                "templates/pages/education/images/lgo_csub.png",
                "templates/pages/education/images/sl_csub.png"
            ]
        }
    ];

angular.module('myApp')
    .controller('edCtrl', ['$routeParams', '$http', function($routeParams, $http) {
        var controller = this;
        var id = $routeParams.id;
        this.idval = id;
        if(id == null) {
            //alert("No Set id = " + id);
            $http.get('/home/schools')
                .then(function successCallback(res) {
                    controller.schools = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        } else {
            //alert("Param is: " + id);
            $http.get('/home/schools/' + id)
                .then(function successCallback(res) {
                    controller.school = res.data;
                }, function errorCallback(err) {
                    alert("Error: " + err);
            });
        };
        navDisplay();
}]);