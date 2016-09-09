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
    var infiniteScrollAdd = 10;
    $scope.retrieveVideos = function() {

        videoService.customGet('videos?limit=' + infiniteScrollAdd).then(function(data) {
            $scope.videoList = data;
            infiniteScrollAdd += 1;
        });
    }
});
