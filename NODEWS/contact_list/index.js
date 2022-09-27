const express = require('express');
const port = 8000;
const server = express();
const path = require('path');

server.set('view engine','ejs');
server.set('views',path.join(__dirname,'views'));

server.get('/',function(req,res){
    res.send('<h1>Hello World! </h1>');
});

server.get('/profile',function(req,res){
     return res.render('home');
});

server.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('My express server is running on the port: ',port);
})