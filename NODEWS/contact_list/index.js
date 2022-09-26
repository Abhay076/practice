const express = require('express');
const port = 8000;
const server = express();
server.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('My express server is running on the port: ',port);
})