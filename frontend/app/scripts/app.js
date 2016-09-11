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
    'infinite-scroll',
    'angular-md5',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'ngRateIt',
    'ngFx',
    'ngAnimate'
], function($httpProvider) {
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
}).config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'loginn'
        })
        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push('authInterceptorService');

}).run(function(authService) {
    authService.fillAuthData();
});
