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
```javascript 
const express = require('express');
const port = 8000;
const server = express();
server.listen(port,function(err){
  if(err){
    console.log('Error',err);
    return;
  }
 console.log('My express server is Running on the Port: ',port);
});

```
## Return response from the server
```javascript
server.get('/',function(req,res){
    res.send('<h1>Hello World! </h1>');
});

```
## HTTP Methods or requests?

1. `GET: This is used for fetching details from the server and is basically a read-only operation.`
1. `POST: This method is used for the creation of new resources on the server.`
1. `PUT: This method is used to update the old/existing resource on the server or to replace the resource.`
1. `DELETE: This method is used to delete the resource on the server.`
1. `PATCH: This is used for modifying the resource on the server.`
1. `OPTIONS: This fetches the list of supported options of resources present on the server.`

`The POST, GET, PUT, DELETE corresponds to the create, read, update, delete operations which are most commonly called CRUD Operations.`

