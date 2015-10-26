// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'activities',
    database,
    url = 'mongodb://localhost:27017/' + collection;

// Connect to the database.
MongoClient.connect(url, function(err, db) {
    database = db.db(collection);
    console.log("Connected to " + collection + "...");
    
    // Check if the collection exists, and if not, create it and add the data.
    db.listCollections({name: collection})
        .next(function (err, collinfo) {
            if(collinfo) {
                console.log("Collection " + collection + " already exists.");
            } else {
                console.log("Creating collection " + collection + "...");
                insertDocument();
            }
    });
    
});

// Returns all records in the collection.
exports.findAll = function(req, res) {
    var name = req.query["name"];
    database.collection(collection, function(err, collection) {
        if (name) {
            collection.find({"name" : new RegExp(name, "i")}).toArray(function(err, items) {
                res.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                res.jsonp(items);
            })
        }
    });
};

// Returns record with the given id.
exports.findById = function(req, res) {
    var id = parseInt(req.params.id);
    database.collection(collection, function(err, collection) {
        collection.findOne({'id': id}, function (err,item) {
            res.jsonp(item);
        });
    });
};

// Creating Data for our database. (Inserting a document.)
var insertDocument = function() {
    console.log('Populating ' + collection + ' database...');
    var activities = [
        {
            "id": 1,
            "name": 'Website',
            "link": "https://github.com/dmontanez/myAngularSite",
            "images": [
                "templates/pages/projects/images/blue_hex_1.png"
            ],
            "uses": [
                'HTML',
                'CSS',
                'JavaScript',
                'jQuery',
                'Angular.JS',
                'Twitter Bootstrap'
            ],
            "descr": 'This is the website you are currently viewing!  I developed this site using Angular.JS, and Twitter Bootstrap, to help organize some information about myself' +
                    ' and showcase what I am about.  You will find most (if not all) of this site is compiled of information that can be found on my resume and LinkedIn Profile.  ' +
                    'I will be working in available APIs periodically, such as the LinkedIn API to keep my Skills and associated merit badges up to date.  The Other and ' +
                    ' about me sections will provide some insight into me as an individual, and provides a better look at what isn\'t necessarily apparent from other sources.  ' +
                    'Feel free to reach out on social media or email if you\'d like to discuss anything referenced on the site, or just network a little bit!'
        },
        {
            "id": 2,
            "name": 'Resume App',
            "link": "https://github.com/dmontanez/MyResume",
            "images": [
                "templates/pages/projects/images/ic_resume_app.png"
            ],
            "uses": [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            "descr": 'This App is my second attempt at building an Android Application.  I had a lot of fun working on the Budget Notebook App as part of a team while completing my ' +
                    'Masters Degree through Penn State, so I decided that another App would be fun too!  This App takes all the same information that is presented on my resume, and ' +
                    'presents it in a different medium.'
        },
        {
            "id": 3,
            "name": 'Budget Notebook',
            link: "https://github.com/jzz128/BudgeNotes",
            images: [
                "templates/pages/projects/images/ic_budget_notebook.png"
            ],
            "uses": [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            "descr": 'My responsibilities included: Initial draft of System Requirements Specifications, Use Case Specifications, Database Model, UI Flow design, coding for major' +
                    ' functionality including future account balance prediction, transaction activity reporting, and recommendation generation.'
        },
        {
            "id": 4,
            "name": 'Tournament Creator',
            "link": "http://cs.csubak.edu/~dmontane/tournament/",
            "images": [
                "templates/pages/projects/images/ic_tourn_create.png"
            ],
            "uses": [
                'HTML',
                'PHP'
            ],
            "descr": 'I created this web app to assist in running the summer team wrestling camp tournament that is run each year at CSUB. The application takes a list of teams, ' +
                    'and generates a tournament schedule to be run "Round Robin" style.'
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(activities, {safe:true}, function(err, res){}); 
    });
};



