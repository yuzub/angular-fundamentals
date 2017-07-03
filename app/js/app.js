;
(function() {
	'use strict';

	angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/newEvent', {
          templateUrl: 'templates/newEvent.html',
          controller: 'EditEventController'
        })
        .when('/', {
          template: '<h2>Index Page</h2>',
          controller: 'EditEventController'
        });

        $locationProvider.html5Mode(true);
    })
    .factory('myCache', function($cacheFactory) {
      return $cacheFactory('myCache', {capacity: 3});
    });

}());
