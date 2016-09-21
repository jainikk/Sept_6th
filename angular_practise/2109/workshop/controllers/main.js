 function showbookform() {
     $("#bookeditingform").show();
     $("#bookdetails").hide();
 };

 function showauthorform() {
     $("#authorform").show();
     $("#authordetails").hide();
 };

 var module = angular.module('bookDemoApp', ['ngRoute', 'ngResource']);
 module.config(['$routeProvider', function($routeProvider) {
     $routeProvider
         .when("/", {
             templateUrl: "Partials/table.html",
         })
         .when("/addauthor", {
             templateUrl: "Partials/addauthor.html",
             controller: "addAuthor"
         })

     .when("/addbook", {
             templateUrl: "Partials/addbook.html",
             controller: "addBook"
         })
         .when("/authordetails", {
             templateUrl: "Partials/authordetails.html",
             controller: "edit_delete-author"
         })
         .when("/bookdetails", {
             templateUrl: "Partials/bookdetails.html",
             controller: "edit_delete-book"
         });
 }]);




 module.controller("bookctrl", function($scope, $http, $rootScope, $location) {
     $http.get("http://172.27.12.104:3000/book/list").then(function(response) {
         $rootScope.myData = response.data;
         console.log($scope.myData.availableOn);
     });

     $http.get("http://172.27.12.104:3000/author/list").then(function(response) {
         $rootScope.myAuthor = response.data;
         console.log($scope.myAuthor);
     });

     var config = {
         headers: {
             'content-type': 'application/x-www-form-urlencoded'
         }
     }

 });