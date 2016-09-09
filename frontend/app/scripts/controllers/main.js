'use strict';

/**
 * @ngdoc function
 * @name videosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videosApp
 */
angular.module('videosApp').controller('MainCtrl', function($scope, videoService) {
    $scope.videoList = [];
    $scope.retrieveVideos = function() {
        $scope.videoList.push({name:'hi'});
    }
});
