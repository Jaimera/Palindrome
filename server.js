var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var http = require('http')
var routes = require('./routes')
//var palindrome = require('./routes/palindrome')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(express.static(__dirname + '/views'));                 
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

var port = process.env.PORT || 8080;        

var router = express.Router(); 

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});

router.get('/', function(req, res) {
    res.render('index.html');
});

function replaceSpecialChars(str)
{
	if (str == null || str.trim() == "")
		return null;
	
	var r=str.toLowerCase();
	r = r.replace(new RegExp("\\s", 'g'),"");
	r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
	r = r.replace(new RegExp("æ", 'g'),"ae");
	r = r.replace(new RegExp("ç", 'g'),"c");
	r = r.replace(new RegExp("[èéêë]", 'g'),"e");
	r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
	r = r.replace(new RegExp("ñ", 'g'),"n");                            
	r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
	r = r.replace(new RegExp("œ", 'g'),"oe");
	r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
	r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
	r = r.replace(new RegExp("\\W", 'g'),"");
	return r;
}

router.route('/palindrome')
	// http://localhost:8080/api/palindrome
    .post(function(req, res) {
		console.log(req.body);
		
		var word = replaceSpecialChars(req.body.word);
		
		if (word == null){
			res.status(500).send({ message: 'Invalid param' });
		}
        else if (word == word.split('').reverse().join('')) {
			res.json({ message: req.body.word + ' is a palindrome! ' });
		}
		else {
			res.status(500).send({ message: req.body.word + ' is not a palindrome! ' });
		}
	
		res.json({ message: 'Aèee!' });
        
    });
	
//app.use(express.static('views'))
app.use('/', router);

app.listen(port);
console.log('Connected port: ' + port);