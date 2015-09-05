var phoneApp = angular.module("phoneApp", 
[
	"ngRoute",
	"ngResource"
]);

phoneApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/list", {
		templateUrl : "phonecat/list.html",
		controller : "listController"
	}).when("/detail/:name", {
		templateUrl : "phonecat/detail.html",
		controller : "detailController"
	}).otherwise({
		redirectTo : "/list"
	});
}]);

phoneApp.controller("listController", ["$scope", "$resource", function($scope, $resource){
	var listApi = $resource("http://127.0.0.1:8020/AngularjsDemo/phonecat/model/list.json");
	listApi.query(function(data){
		$scope.list = data;
	});
	
	var orderApi = $resource("http://127.0.0.1:8020/AngularjsDemo/phonecat/model/order.json");
	orderApi.query(function(data){
		$scope.orders = data;
	});
}]);

phoneApp.controller("detailController", ["$scope", "$resource", "$routeParams", function($scope, $resource, $routeParams){
	console.log($routeParams);
	
	var iphone4 = $resource("http://127.0.0.1:8020/AngularjsDemo/phonecat/model/:name.json");
	iphone4.get({name:$routeParams.name}, function(data){
		$scope.phone = data;
	});
}]);
