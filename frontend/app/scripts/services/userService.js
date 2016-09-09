'use strict';

/**
 * @ngdoc service
 * @name videosApp.userService
 * @description
 * # userService
 * Service in the videosApp.
 */
angular.module('videosApp').service('userService', function(crudFactory) {

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
