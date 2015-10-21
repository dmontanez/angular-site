// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    database,
    url = 'mongodb://localhost:27017/schools';

// Connect to the database.
MongoClient.connect(url, function(err, db) {
    database = db.db('schools');
    console.log("Connected to database...");
    insertDocument();
});

// Returns all records in the collection.
exports.findAll = function(req, res) {
    var name = req.query["name"];
    database.collection('schools', function(err, collection) {
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

exports.findById = function(req, res) {
    var id = parseInt(req.params.id);
    database.collection('schools', function(err, collection) {
        collection.findOne({'id': id}, function (err,item) {
            res.jsonp(item);
        });
    });
};

// Creating Data for our school database. (Inserting a document.)
var insertDocument = function() {
    console.log('Populating schools database...');
    var schools = [
        {
            "id": 1,
            "name": "Pennsylvania State University",
            "degree": 'M.E.',
            "major": 'Software Engineering',
            "minor": '',
            "start": 1346482800000,
            "end": 1408086000000,
            "courses": [
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
            "images": [
                "templates/pages/education/images/ed_psu_logo.png",
                "templates/pages/education/images/lgo_psu.png",
                "templates/pages/education/images/sl_psu.png"
            ]
        },
        {
            "id": 2,
            "name": 'California State University Bakersfield',
            "degree": 'B.S.',
            "major": 'Computer Science',
            "minor": 'Philosophy',
            "start": 1126594800000,
            "end": 1308121200000,
            "courses": [
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
            "images": [
                "templates/pages/education/images/ed_csub_logo.png",
                "templates/pages/education/images/lgo_csub.png",
                "templates/pages/education/images/sl_csub.png"
            ]
        }
    ];
    
    database.collection('schools', function(err, collection) {
       collection.insert(schools, {safe:true}, function(err, res){}); 
    });
};

