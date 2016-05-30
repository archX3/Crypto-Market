var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope, $http) {
	$http.get("https://api.coinmarketcap.com/v1/ticker/")
    .then(function (response) {
    	$scope.coins = response.data;
    });
	setInterval(function() {
	    $http.get("https://api.coinmarketcap.com/v1/ticker/")
	    .then(function (response) {
	    	$scope.coins = response.data;
	    });
	}, 12000);
});