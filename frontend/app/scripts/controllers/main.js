'use strict';

/**
 * @ngdoc function
 * @name videosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videosApp
 */
angular.module('videosApp').controller('MainCtrl', function($scope, videoService, userService, authService, $location, $timeout) {
    alertify.closeAll();

    var videosToAdd = [];
    $scope.videoList = [];
    $scope.modalVideo = {};

    var infiniteScrollAdd = 10;

    $scope.retrieveVideos = function() {
        if (!isAddingVideos) {
            videoService.customGet('videos?limit=' + infiniteScrollAdd + '&skip=' + videosToAdd.length).then(function(data) {
                data.forEach(function(oVideoToAdd) {
                    var oVideoFound = videosToAdd.find(function(oVideoAlreadyAdded) {
                        return oVideoAlreadyAdded._id == oVideoToAdd._id;
                    });
                    if (!oVideoFound) {
                        videosToAdd.push(oVideoToAdd);
                    }
                });
                addVideos();
                infiniteScrollAdd = 5;
            });
        }
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

    $scope.logout = function() {
        userService.customGet('logout').then(function(data) {
            authService.logOut();
            $location.path('/login');
        });
    };


    //Animation:
    var isAddingVideos = false;
    var addVideos = function(index) {
        isAddingVideos = true;
        if (index === undefined) {
            index = 0;
        }

        var oVideoToAdd = videosToAdd[index];
        if (oVideoToAdd) {

            var oVideoFound = $scope.videoList.find(function(oVideoAlreadyAdded) {
                return oVideoAlreadyAdded._id == oVideoToAdd._id;
            });
            if (!oVideoFound) {
                $timeout(function() {
                    $scope.videoList.push(oVideoToAdd);
                    addVideos(++index);
                }, 100);
            } else {
                addVideos(++index);
            }
        } else {
            isAddingVideos = false;
            return;
        }
    };

});
