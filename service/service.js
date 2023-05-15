var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'127.0.0.1',
    port:'3306',
    username: "root",
    password:'null', //empty for window
    database: 'real_state216'

});