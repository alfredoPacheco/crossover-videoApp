'use strict';

/**
 * @ngdoc factory
 * @name videosApp.authService
 * @description
 * # authService
 * Factory in the videosApp.
 */
angular.module('videosApp').factory('authService', function($http, $q, localStorageService, appConfig, userService, $rootScope, md5) {
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function(registration) {

        _logOut();

        return $http.post(appConfig.API_URL + 'account/register', '=' + JSON.stringify(registration)).then(function(response) {
            return response;
        });

    };

    var _login = function(loginData) {
        var loginDataOut = {
            username: loginData.username,
            password: md5.createHash(loginData.password)
        };

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: appConfig.API_URL + '/user/auth',
            data: loginDataOut
        })

        // $http.post(appConfig.API_URL + 'user/auth', loginData)
        .then(function(response) {

            if (response.data.status === 'error') {
                deferred.reject(response.data.error);

            } else {
                localStorageService.set('authenticationData', {
                    sessionId: response.data.sessionId,
                    userName: response.data.username
                });

                _authentication.isAuth = true;
                _authentication.userName = response.data.username;

                $rootScope.currentUser = response.data.username;

                deferred.resolve();
            }


        }, function(err) {
            _logOut();
            deferred.reject(err);
        });


        return deferred.promise;

    };

    var _logOut = function() {

        localStorageService.remove('authenticationData');

        _authentication.isAuth = false;
        _authentication.userName = '';

        $rootScope.currentUser = '';

    };

    var _fillAuthData = function() {

        var authData = localStorageService.get('authenticationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            $rootScope.currentUser = _authentication.userName;
        }
    };

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
});
