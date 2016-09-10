'use strict';

/**
 * @ngdoc service
 * @name videosApp.videoService
 * @description
 * # videoService
 * Service in the videosApp.
 */
angular.module('videosApp').service('videoService', function(crudFactory, $sce, appConfig) {

    var crudInstance = new crudFactory({
        entityName: '',
        catalogs: [],
        adapter: function(theEntity, self) {
            theEntity.videoConfig = {
                sources: [{ src: $sce.trustAsResourceUrl(appConfig.API_URL + '/' + theEntity.url), type: 'video/mp4' }],
                tracks: [],
                theme: 'bower_components/videogular-themes-default/videogular.css',
                poster: {
                    url: $sce.trustAsResourceUrl('./images/video-poster.jpg')
                },
                plugins: {

                }
            };

            theEntity.pristineRate = self.generalRate(theEntity);
        },
        adapterOut: function() {

        },
        dependencies: []
    });

    crudInstance.generalRate = function(video) {
        if (video && video.ratings && video.ratings.length > 0) {
            return video.ratings.reduce(function(oldValue, currentValue) {
                return oldValue + currentValue;
            }) / video.ratings.length;
        } else {
            return 0;
        }
    };

    return crudInstance;
});
