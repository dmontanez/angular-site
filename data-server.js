var
    connect = require('connect'),
    app = connect();

app.use('/', function(req, res, next) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end('{"name" : "daniel"}');
});

app.listen(8080);