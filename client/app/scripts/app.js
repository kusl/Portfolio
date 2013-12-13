'use strict';

//modules
var portfolioWebApp = angular.module('portfolioWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'portfolioControllers',
    'portfolioServices',
    'portfolioAnimations'
]);

//routes
portfolioWebApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/projects/:name', {
      controller: 'ProjectDetailCtrl',
      templateUrl: 'views/partials/project-detail.html'
    })
    .when('/projects', {
        controller: 'ProjectListCtrl',
        templateUrl: 'views/projects.html'//,
        // resolve:{
        //   projects:['Projects', function (Projects) {
        //     //TODO: fetch only for the current user
        //     return Projects.query();
        //   }]
        // }
    })
    .otherwise({
        redirectTo: '/'
    });
}]);