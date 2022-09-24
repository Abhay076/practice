const http = require('http');
const port = 8000;
function requestHandler(req,res){
    console.log(req.url);
    res.end('Hello World');
}
const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('server is running on: ',port);
})
