// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'otherQuals',
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
    var otherQuals = [
        {
            "id": 1,
            "name": 'Communication',
            "acts": [
                'Monthly interaction with the PMO, and Foreign Customer, providing a summary of analysis that has been performed ' +
                'and subsequent recommendations for program improvement: Skilled in professional presentation and delivery of information.'
            ]
        },
        {
             "id": 2,
            "name": 'Leadership',
            "acts": [
                'Implemented a Trouble Ticket Review Board which provides input for multiple facets of current program organization.',
                'Chair of Program Integrated Product Team, tasked with documenting Business Process Model Flowcharts for all program activities.'
            ],
        },
        {
             "id": 3,
            "name": 'Activities',
            "acts": [
                'Four year letter winner for CSUB’s Division I Wrestling Team (2006 – 2010)',
                'Assistant Wrestling Coach for Cathedral Catholic High School (2013 – Present)'
            ]
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(otherQuals, {safe:true}, function(err, res){}); 
    });
};



