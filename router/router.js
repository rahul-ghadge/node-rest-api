const express = require("express");

const app = express();



    var hello = app.get("/", (req, res, next) => {
        res.status(200).send({"hello" : 'Oh Hi There!'});
    });


    var superHeros = app.get("/super-heros", (req, res, next) => {
        res.status(200).send([
            {
                "name":"Wade", 
                "superName":"Deadpool", 
                "profession":"Street fighter", 
                "age":28,
                "canFly": true
            },
            {
                "name":"Bruce",
                "superName":"Hulk",
                "profession":"Doctore",
                "age":50,
                "canFly": false
            },
            {
                "name":"Steve",
                "superName": "Captain America",
                "profession":"Solder",
                "age":120,
                "canFly": false
            },
            {
                "name":"Tony", 
                "superName": "Iron Man", 
                "profession":"Business man",
                "age":45,
                "canFly": true
            },
            {
                "name":"Peter",
                "superName": "Spider Man", 
                "profession":"Student", 
                "age":21,
                "canFly": true
            }        
        ]);
    });


module.exports = hello, superHeros;