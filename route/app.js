var bookstore = angular.module("BookStore", ["ngRoute", "ngAnimate", "controllers"]);

bookstore.config(function($routeProvider){
	$routeProvider.when("/hello", {
		templateUrl: "hello.html",
		controller: "helloController"
	}).when("/book/:id", {
		templateUrl: "book.html",
		controller: "bookController"
	}).when("/books", {
		templateUrl: "list.html",
		controller: "booksController"
	}).otherwise({
		redirectTo: "/books"
	});
});
