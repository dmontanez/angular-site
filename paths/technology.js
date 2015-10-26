// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'technologies',
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
    var technologies = [
        {
            "id": 1,
            "level": 'Proficient',
            "items": [
                {
                    "name": 'VBA',
                    "num": '-'
                },
                {
                    "name": 'SQL',
                    "num": 2
                },
                {
                    "name": 'ADT',
                    "num": 3
                },
                {
                    "name": 'Eclipse',
                    "num": 2
                }
		      ]
        },
        {
            "id": 2,
            "level": 'Moderately Proficient',
            "items": [
                {
                    "name": 'Java',
                    "num": 4
                },
                {
			        "name": 'HTML',
                    "num": '-'
                },
                {
			        "name": 'CSS',
                    "num": '-'
                },
                {
			        "name": 'XML',
                    "num": '-'
                }
            ]
        },
        {
            "id": 3,
            "level": 'Prior Experience',
            "items": [
                {
                    "name": 'C++',
                    "num": 2
                },
                {
			        "name": 'C#',
                    "num": '-'
                },
                {
			        "name": 'PHP',
                    "num": '-'
                },
                {
			        "name": 'R',
                    "num": '-'
                }
            ]
        },
        {
            "id": 4,
            "level": 'Currently Learning',
            "items": [
                {
                    "name": 'Angular.JS',
                    "num": '-'
                },
                {
                    "name": 'Bootstrap',
                    "num": '-'
                },
                {
                    "name": 'Node.JS',
                    "num": '-'
                },
                {
                    "name": 'MongoDB',
                    "num": '-'
                },
                {
                    "name": 'Spring Framework',
                    "num": '-'
                },
                {
                    "name": 'Python',
                    "num": '-'
                },
                {
                    "name": 'Ruby on Rails',
                    "num": '-'
                }
            ]
        },
        {
            "id": 5,
            "level": 'Others',
            "items": [
                {
                    "name": 'Software Engineering',
                    "num": 7
                },
                {
			        "name": 'Software Development',
                    "num": 6
                },
                {
			        "name": 'Analysis',
                    "num": 6
                },
                {
			        "name": 'Program Management',
                    "num": 3
                }
            ]
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(technologies, {safe:true}, function(err, res){}); 
    });
};



