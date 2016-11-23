var myApp = angular.module('myApp',[]);


 myApp.controller('PalindromeCtrl', ['$scope', function($scope) {
	$scope.word = 'abá';
	
	$scope.click = function () {
		console.log($scope.word);
		
		var data = {
			word: $scope.word
		};
		
		var sucesso = function(response, status){
			alert(response.message + " " + status);
		};
		// var erro = function(response, status){
			// alert(response.message + " " + status); 
		// };
		
		$.post("palindrome", data, sucesso)
			.fail(function(xhr, status, error) {
				alert(xhr.responseJSON.message);
			});;
	}
 }]);