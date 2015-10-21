var express = require('express'),
    schools = require('./paths/school'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/home/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.use('/home', serveStatic(__dirname));
app.get('/home/schools', schools.findAll);
app.get('/home/schools/:id', schools.findById);

app.listen(3000);
console.log('Listening on port 3000...');