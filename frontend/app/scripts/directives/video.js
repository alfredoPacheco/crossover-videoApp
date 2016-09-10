'use strict';

/**
 * @ngdoc directive
 * @name iqsApp.directive:videoDirective
 * @description
 * # videoDirective
 */
angular.module('videosApp').directive('videoDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/videoDirective.html',
        link: function postLink(scope, element, attrs) {}
    };
}).directive('videoDirectiveReadonly', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/videoDirectiveReadonly.html',
        link: function postLink(scope, element, attrs) {}
    };
});
