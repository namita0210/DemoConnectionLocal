var http = require('http');
http.createServer(onRequest).listen(8000);

function onRequest(request , response){
    response.writeHead(200,{'Content-Type':'Text/Plain'});
    response.write("Hello World");
    response.end();
}