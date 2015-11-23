var app=angular.module('RoutingApp', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/first', {
				templateUrl: 'first.html',
				controller : 'firstCtrl as first'
			})
			.when('/second', {
				templateUrl: 'second.html',
				controller : 'secondCtrl as second'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);


app.controller('firstCtrl', function($scope) {
			$scope.y="Hello";
			console.log($scope.y)
});


app.controller('secondCtrl', function($scope) {
			$scope.x="Hi";
			
});
