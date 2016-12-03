var myApp = angular.module('myApp',[]);


 myApp.controller('PalindromeCtrl', ['$scope', function($scope) {
 	var self = $scope;
	self.word = 'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!';
	self.isPalindrome = true;

	self.validatePalindrome = function (){

		if (self.word == '')
			return "";
		return self.isPalindrome ? "valid" : "invalid";
	}

	self.click = function () {
		var data = {
			word: self.word
		};
		
		var sucesso = function(response, status){
			self.isPalindrome = true;
			self.$apply();
		};
		
		$.post("palindrome", data, sucesso)
			.fail(function(xhr, status, error) {
				self.isPalindrome = false;
				self.$apply();
			});;
	}
 }]);