const express = require('express');
const port = 8000;
const server = express();

server.get('/profile',function(req,res){
    res.send('<h1>Hello World! </h1>');
});



server.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('My express server is running on the port: ',port);
})