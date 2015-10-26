// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'about-images',
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
    var images = [
        {
            "id": 1,
            "descr": 'My first year, wedding anniversarry on Cornodo Beach.',
            "imgURL": "templates/pages/about-me/images/1-year-anni.jpg"
        },
        {
            "id": 2,
            "descr": 'All of my pups, from right-to-left: Scrappy, Sophie, Chica.',
            "imgURL": "templates/pages/about-me/images/pups.jpg"
        },
        {
            "id": 3,
            "descr": 'Competing in a wrestling match in college.',
            "imgURL": "templates/pages/about-me/images/wrestling.jpg"
        },
        {
            "id": 4,
            "descr": 'Custom mini bar that I designed and built myself.',
            "imgURL": "templates/pages/about-me/images/mini-bar.jpg"
        },
        {
            "id": 5,
            "descr": 'Stock photo of my motorcycle; Triumph Thruxton.',
            "imgURL": "templates/pages/about-me/images/thruxton.jpg"
        },
        {
            "id": 6,
            "descr": 'Getting ready for a ride with the wife!',
            "imgURL": "templates/pages/about-me/images/bike-ride.png"
        },
        {
            "id": 7,
            "descr": 'Just a picture of my dog, Sophie being playful.',
            "imgURL": "templates/pages/about-me/images/soph-play.png"
        },
        {
            "id": 8,
            "descr": 'One of my favorite things to do, walk on the beach.',
            "imgURL": "templates/pages/about-me/images/beach-hike.png"
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(images, {safe:true}, function(err, res){}); 
    });
};



