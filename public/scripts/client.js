var app = angular.module('app', ['ngRoute', 'ngMaterial']);

console.log('app sourced to index');

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController as mc'
    }).when('/rent', {
        templateUrl: 'views/rentview.html',
        controller: 'RentController as rc'
    }).when('/buy', {
        templateUrl: 'views/buyview.html',
        controller: 'BuyController as bc'
    }).when('/add', {
        templateUrl: 'views/addview.html',
        controller: 'AddController as ac'
    }).otherwise({
        redirectTo: '/'
    });
})