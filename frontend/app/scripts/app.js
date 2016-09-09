'use strict';

/**
 * @ngdoc overview
 * @name videosApp
 * @description
 * # videosApp
 *
 * Main module of the application.
 */
angular.module('videosApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngActivityIndicator',
    'LocalStorageModule',
    'infinite-scroll'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
});
