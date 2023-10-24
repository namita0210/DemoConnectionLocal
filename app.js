var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

http.createServer(onRequest).listen(7000);

function onRequest(request , response){
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.write(module2.typeIt);
    module1.myFunc();
    response.end();
}