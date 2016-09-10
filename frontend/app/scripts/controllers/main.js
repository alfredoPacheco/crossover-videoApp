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
    $scope.modalVideo = {};
    
    var infiniteScrollAdd = 10;
    
    $scope.retrieveVideos = function() {

        videoService.customGet('videos?limit=' + infiniteScrollAdd + '&skip=' + $scope.videoList.length).then(function(data) {
            data.forEach(function(oVideoToAdd) {
                var oVideoFound = $scope.videoList.find(function(oVideoAlreadyAdded) {
                    return oVideoAlreadyAdded._id == oVideoToAdd._id;
                });
                if (!oVideoFound) {
                    $scope.videoList.push(oVideoToAdd);
                }
            });
            infiniteScrollAdd += 5;
        });
    };

    $scope.openModalVideo = function(video) {
        $scope.modalVideo = video;
        angular.element('#modal-video').modal('show');
        angular.element('#modal-video').off('hidden.bs.modal').on('hidden.bs.modal', function(e) {
            $scope.$apply(function() {
                $scope.on_closeModal();
            });
        })
    };

    $scope.on_closeModal = function() {
        $scope.modalVideo = {};
    };

});
