// Everything we need to establish our connection to MongoDB.
var MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    collection = 'companies',
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
    var companies = [
         {
            "id": 1,
            "name": 'Leidos',
            "title": 'Software Engineer',
            "start": 1444057200000,
            "end": 1444057200000,
            "isCurrent": true,
            "descr": '',
            "images": [
                "templates/pages/experience/images/ex_logo_ldos.png"
            ]
        },{
            "id": 2,
            "name": 'Computer Sciences Corporation',
            "title": 'Logistics Engineer, Professional',
            "start": 1309132800000,
            "end": 1443225600000,
            "isCurrent": false,
            "descr": 'Provide key analysis necessary for demonstrating program success in the form of Operational Availability. ' +
                    'Developed unique Provisioning algorithm for generating spares procurement recommendations. ' +
                    'Generate recommendations to maximize return on investment of program assets. ' +
                    'Developed and utilize database for management and analysis of program trouble tickets',
            "images": [
                "templates/pages/experience/images/ex_logo_csc.png"
            ]
        },
        {
            "id": 3,
            "name": 'Occidental Petroleum',
            "title": 'Assistant Regulatory Analyst',
            "start": 1280646000000,
            "end": 1306911600000,
            "isCurrent": false,
            "descr": 'Quality Assurance for new drill & existing well modification specifications. ' +
                    'As part of a self driven initiative; created an Access database to track leased land plot, incident reports.  Used to nominate leases' +
                    ' for a Clean Lease award with the Department of Gas & Geothermal Resources.',
            "images": [
                "templates/pages/experience/images/ex_logo_oxy.png"
            ]
        }
    ];
    
    database.collection(collection, function(err, collection) {
       collection.insert(companies, {safe:true}, function(err, res){}); 
    });
};

