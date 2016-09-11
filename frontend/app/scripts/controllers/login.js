'use strict';

/**
 * @ngdoc function
 * @name videosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the videosApp
 */
angular.module('videosApp').controller('LoginCtrl', function($scope, $activityIndicator, authService, $location) {
    $activityIndicator.stopAnimating();
    alertify.closeAll();
    $scope.message = '';
    $scope.loginData = {
        username: "",
        password: ""
    };

    $scope.login = function() {
        $scope.message = '';
        authService.login($scope.loginData).then(function() {
            $location.path('/');
        }, function(data) {
            $scope.message = data;
        });
    };
});
