var
    connect = require('connect'),
    serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000);
console.log('Now listening on port 3000');