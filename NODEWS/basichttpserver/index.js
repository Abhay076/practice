const http = require('http');
const port = 8000;
const fs = require('fs');
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    // res.end('<h1>Hello World</h1>');
   let filePath;
   switch(req.url){
      case '/':
        filePath ='./index.html'
        break;
      case '/profile.html':
        filePath = './profile.html'
        break;
      case '/abhay.html':
        filePath='./abhay.html'
        break;
      default:
        filePath='./404.html';
        break;
   }
   fs.readFile(filePath,function(err,data){
       if(err){
        console.log('Error',err);
        return res.end('<h1>Error</h1>');
       }
       return res.end(data);
   });
}
const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('server is running on: ',port);
})
