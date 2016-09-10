'use strict';

/**
 * @ngdoc directive
 * @name iqsApp.directive:videoDirective
 * @description
 * # videoDirective
 */
angular.module('videosApp').directive('videoDirective', function(videoService) {
    return {
        restrict: 'E',
        templateUrl: 'views/videoDirective.html',
        scope: {
            video: "="
        },
        link: postLink.bind(this, videoService)
    };
}).directive('videoDirectiveReadonly', function(videoService) {
    return {
        restrict: 'E',
        templateUrl: 'views/videoDirectiveReadonly.html',
        scope: {
            video: "="
        },
        link: postLink.bind(this, videoService)
    };
});


function postLink(videoService, scope, element, attrs) {
    scope.on_before_rated = function(rateValue) {
        return videoService.customPost('video/ratings', {
            videoId: scope.video._id,
            rating: rateValue
        }).then(function(updatedVideo) {
            scope.video.ratings = updatedVideo.ratings;
        });
    };
    scope.generalRate = function() {
        return videoService.generalRate(scope.video);
    }
}
