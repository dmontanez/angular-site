// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'schools',
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
    
    database.collection(collection, function(err, collection) {
       collection.insert(schools, {safe:true}, function(err, res){}); 
    });
};
