/* -- var activities = [
        {
            name: 'Website',
            link: "https://github.com/dmontanez/myAngularSite",
            images: [
                "templates/pages/projects/images/blue_hex_1.png"
            ],
            uses: [
                'HTML',
                'CSS',
                'JavaScript',
                'jQuery',
                'Angular.JS',
                'Twitter Bootstrap'
            ],
            descr: 'This is the website you are currently viewing!  I developed this site using Angular.JS, and Twitter Bootstrap, to help organize some information about myself' +
                    ' and showcase what I am about.  You will find most (if not all) of this site is compiled of information that can be found on my resume and LinkedIn Profile.  ' +
                    'I will be working in available APIs periodically, such as the LinkedIn API to keep my Skills and associated merit badges up to date.  The Other and ' +
                    ' about me sections will provide some insight into me as an individual, and provides a better look at what isn\'t necessarily apparent from other sources.  ' +
                    'Feel free to reach out on social media or email if you\'d like to discuss anything referenced on the site, or just network a little bit!'
        },
        {
            name: 'Resume App',
            link: "https://github.com/dmontanez/MyResume",
            images: [
                "templates/pages/projects/images/ic_resume_app.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'This App is my second attempt at building an Android Application.  I had a lot of fun working on the Budget Notebook App as part of a team while completing my ' +
                    'Masters Degree through Penn State, so I decided that another App would be fun too!  This App takes all the same information that is presented on my resume, and ' +
                    'presents it in a different medium.'
        },
        {
            name: 'Budget Notebook',
            link: "https://github.com/jzz128/BudgeNotes",
            images: [
                "templates/pages/projects/images/ic_budget_notebook.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'My responsibilities included: Initial draft of System Requirements Specifications, Use Case Specifications, Database Model, UI Flow design, coding for major' +
                    ' functionality including future account balance prediction, transaction activity reporting, and recommendation generation.'
        },
        {
            name: 'Tournament Creator',
            link: "http://cs.csubak.edu/~dmontane/tournament/",
            images: [
                "templates/pages/projects/images/ic_tourn_create.png"
            ],
            uses: [
                'HTML',
                'PHP'
            ],
            descr: 'I created this web app to assist in running the summer team wrestling camp tournament that is run each year at CSUB. The application takes a list of teams, ' +
                    'and generates a tournament schedule to be run "Round Robin" style.'
        }
    ]; -- */

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