'use strict';

/**
 * @ngdoc service
 * @name videosApp.videoService
 * @description
 * # videoService
 * Service in the videosApp.
 */
angular.module('videosApp').service('videoService', function(crudFactory) {

    var crudInstance = new crudFactory({
        entityName: '',
        catalogs: [],
        adapter: function() {

        },
        adapterOut: function() {

        },
        dependencies: []
    });

    return crudInstance;
});
