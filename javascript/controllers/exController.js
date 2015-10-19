var companies = [
         {
            name: 'Leidos',
            title: 'Software Engineer',
            start: 1444057200000,
            end: 1444057200000,
            isCurrent: true,
            descr: '',
            images: [
                "templates/pages/experience/images/ex_logo_ldos.png"
            ]
        },{
            name: 'Computer Sciences Corporation',
            title: 'Logistics Engineer, Professional',
            start: 1309132800000,
            end: 1443225600000,
            isCurrent: false,
            descr: 'Provide key analysis necessary for demonstrating program success in the form of Operational Availability. ' +
                    'Developed unique Provisioning algorithm for generating spares procurement recommendations. ' +
                    'Generate recommendations to maximize return on investment of program assets. ' +
                    'Developed and utilize database for management and analysis of program trouble tickets',
            images: [
                "templates/pages/experience/images/ex_logo_csc.png"
            ]
        },
        {
            name: 'Occidental Petroleum',
            title: 'Assistant Regulatory Analyst',
            start: 1280646000000,
            end: 1306911600000,
            isCurrent: false,
            descr: 'Quality Assurance for new drill & existing well modification specifications. ' +
                    'As part of a self driven initiative; created an Access database to track leased land plot, incident reports.  Used to nominate leases' +
                    ' for a Clean Lease award with the Department of Gas & Geothermal Resources.',
            images: [
                "templates/pages/experience/images/ex_logo_oxy.png"
            ]
        }
    ];

angular.module('myApp')
    .controller('exCtrl', function() {
        this.positions = companies;
        navDisplay();
});