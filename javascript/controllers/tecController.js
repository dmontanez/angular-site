var technologies = [
        {
            level: 'Proficient',
            items: [
                {
                    name: 'VBA',
                    num: '-'
                },
                {
			     name: 'SQL',
                    num: 2
                },
                {
			     name: 'ADT',
                    num: 3
                },
                {
			     name: 'Eclipse',
                    num: 2
                }
		      ]
        },
        {
            level: 'Moderately Proficient',
            items: [
                {
                    name: 'Java',
                    num: 4
                },
                {
			        name: 'HTML',
                    num: '-'
                },
                {
			        name: 'CSS',
                    num: '-'
                },
                {
			        name: 'XML',
                    num: '-'
                }
            ]
        },
        {
            level: 'Prior Experience',
            items: [
                {
                    name: 'C++',
                    num: 2
                },
                {
			        name: 'C#',
                    num: '-'
                },
                {
			        name: 'PHP',
                    num: '-'
                },
                {
			        name: 'R',
                    num: '-'
                }
            ]
        },
        {
            level: 'Currently Learning',
            items: [
                {
                    name: 'Angular.JS',
                    num: '-'
                },
                {
			     name: 'Bootstrap',
                    num: '-'
                },
                {
			     name: 'Python',
                    num: '-'
                },
                {
			     name: 'Ruby on Rails',
                    num: '-'
                }
            ]
        },
        {
            level: 'Others',
            items: [
                {
                    name: 'Software Engineering',
                    num: 7
                },
                {
			        name: 'Software Development',
                    num: 6
                },
                {
			        name: 'Analysis',
                    num: 6
                },
                {
			        name: 'Program Management',
                    num: 3
                }
            ]
        }
    ];

angular.module('myApp')
    .controller('tecCtrl', function() {
        this.skills = technologies;
        navDisplay();
});