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
            }
        },
        adapterOut: function() {

        },
        dependencies: []
    });

    return crudInstance;
});
