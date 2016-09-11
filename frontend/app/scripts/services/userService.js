'use strict';

/**
 * @ngdoc service
 * @name videosApp.userService
 * @description
 * # userService
 * Service in the videosApp.
 */
angular.module('videosApp').service('userService', function(CrudFactory) {

    var crudInstance = new CrudFactory({
        entityName: '/user',
        catalogs: [],
        adapter: function() {

        },
        adapterOut: function() {

        },
        dependencies: []
    });

    return crudInstance;
});
