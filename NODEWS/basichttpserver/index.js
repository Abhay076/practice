const http = require('http');
const port = 8000;

const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('server is running on: ',port);
})