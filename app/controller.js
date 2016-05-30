var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope, $http) {
	$http.get("https://api.coinmarketcap.com/v1/ticker/")
    .then(function (response) {
    	console.log(response.data[0]);
    	$scope.coins = response.data;
    	// $scope.names = response.data.records;
    });
	setInterval(function() {
	    $http.get("https://api.coinmarketcap.com/v1/ticker/")
	    .then(function (response) {
	    	console.log(response.data[0]);
	    	$scope.coins = response.data;
	    	// $scope.names = response.data.records;
	    });
	}, 12000);
});