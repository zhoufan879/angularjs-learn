var controllers = angular.module("controllers", []);

controllers.factory("DATA", function(){
	return {
		books : {}
	}
});

controllers.controller("bookController", function($scope, $routeParams, DATA){
	console.log(DATA);
	console.log($routeParams);
	
	var id = $routeParams.id;
	var books = DATA.books;
	
	for(var book in books) {
		if(books[book].id==id){
			$scope.book = books[book];
			break;
		}
	}
	
	console.log($scope.book);
	$scope.pageClass = "book";
});
	
controllers.controller("booksController", function($scope, $http, DATA){
	var url = "http://127.0.0.1:8020/AngularjsDemo/route/books.json";
	$http.get(url).success(function(res){
		console.log(res);
		$scope.books = res.list;
		DATA.books = res.list;
	});
	$scope.pageClass = "books";
})
	
controllers.controller("helloController", function($scope, $http){
	$scope.getting = {
		text : "hello,angularjs."
	};
});
