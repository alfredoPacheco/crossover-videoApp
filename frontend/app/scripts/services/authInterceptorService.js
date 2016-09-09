'use strict';

/**
 * @ngdoc factory
 * @name videosApp.authInterceptorService
 * @description
 * # authInterceptorService
 * Factory in the videosApp.
 */
angular.module('videosApp').factory('authInterceptorService', function($q, $location, localStorageService, appConfig) {
    var authInterceptorServiceFactory = {};


    var _request = function(config) {
        config.params = config.params || {};
        var authData = localStorageService.get('authenticationData');
        if (authData) {
            switch (config.method) {
                case 'GET':
                    switch (config.url) {
                        case appConfig.API_URL + '/videos':
                            config.params.sessionId = authData.sessionId;
                            break;
                    }
                case 'POST':
                    config.params.sessionId = authData.sessionId;
                    break;
                default:
                    break;
            }
        }

        return config;
    }

    var _responseError = function(rejection) {
        if (rejection.status === 401) {
            localStorageService.remove('authenticationData');
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
});
