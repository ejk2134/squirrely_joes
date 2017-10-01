var app = angular.module('app', ['ngRoute']);

console.log('app sourced to index');

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'ListingController as LC'
    }).when('/listing', {
        templateUrl: 'views/listingview.html',
        controller: 'ListingController as LC'
    }).otherwise({
        redirectTo: '/'
    });
})