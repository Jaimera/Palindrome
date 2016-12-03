var express = require('express'); 
var path = require('path');
var app = express(); 
var bodyParser = require('body-parser');
var http = require('http')
var routes = require('./routes/index');
var palindrome = require('./routes/palindrome');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname + '/views')));                
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

var port = process.env.PORT || 8080;        

var router = express.Router(); 
	
app.use('/', router);
app.use('/palindrome', palindrome);

app.listen(port);