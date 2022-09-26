                         >module - 2 => My "First Express App :: A List of Contacts!"

## Why express=> 
`ExpressJS is a prebuilt NodeJS framework that can help you in creating server-side web applications faster and smarter`
## What is the extended name for MVC?=> 
`model view controller`

## what are the package.json contains=> 
`this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.`

## What does the 'node_modules' folder contain?=> 
  `Libraries the NodeJs required.`

## Setting Up express server => 
                             ``` javascript 
                             const express = require('express');
                             const port = 8000;
                             const app = express();
                             app.listen(port,function(err){
                                if(err){
                                    console.log('Error',err);
                                    return;
                                }
                                console.log('My express server is Running on the Port: ',port);
                             });
                             ```