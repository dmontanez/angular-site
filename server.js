var express = require('express'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var app = express();
    
var
    schools = require('./paths/school'),
    companies = require('./paths/company'),
    technologies = require('./paths/technology'),
    activities = require('./paths/activity'),
    otherQuals = require('./paths/otherQual'),
    quotes = require('./paths/quote'),
    abtImgs = require('./paths/aboutImg'),
    contact = require('./paths/contact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow for Cross Origin Resource Sharing
app.all('/api/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// Serve up the webpage @ /.
app.use('/', serveStatic(__dirname));

// School API
app.get('/api/schools', schools.findAll);
app.get('/api/schools/:id', schools.findById);

// Company API
app.get('/api/companies', companies.findAll);
app.get('/api/companies/:id', companies.findById);

// Technology API
app.get('/api/technologies', technologies.findAll);
app.get('/api/technologies/:id', technologies.findById);

// Activity API
app.get('/api/activities', activities.findAll);
app.get('/api/activities/:id', activities.findById);

// OtherQual API
app.get('/api/otherQuals', otherQuals.findAll);
app.get('/api/otherQuals/:id', otherQuals.findById);

// Quote API
app.get('/api/quotes', quotes.findAll);
app.get('/api/quotes/:id', quotes.findById);

// About-Image API
app.get('/api/abt-imgs', abtImgs.findAll);

// Contact API
app.get('/api/contact', contact.findAll);

app.listen(3000);
console.log('Listening on port 3000...');