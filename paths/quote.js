// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'quotes',
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
    var quotes = [
        {
            "id": 1,
            "author": 'Anthony Hopkins',
            "text": '"My philosophy is: It\'s none of my business what people say of me and think of me. ' + 
                    'I am what I am and I do what I do. I expect nothing and accept everything. And it makes life so much easier."'
        },
        {
            "id": 2,
            "author": 'Michael Scott',
            "text": '"That\'s what she said."'
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(quotes, {safe:true}, function(err, res){}); 
    });
};



