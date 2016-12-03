var express = require('express');
var path = require('path');
var palindrome = require('../app/palindrome');
var router = express.Router();

router.post('/', function(req, res) {
	var isPalindrome = palindrome.verifyWord(req.body.word);

    if (isPalindrome) {
		res.json({ message: req.body.word + ' is a palindrome! ' });
	}

	res.status(400).json({ message: req.body.word + ' is not a palindrome! ' });
});

module.exports = router;