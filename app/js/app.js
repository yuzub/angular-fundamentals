;
(function() {
	'use strict';

	angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/newEvent', {
          templateUrl: 'templates/NewEvent.html',
          controller: 'EditEventController'
        })
        .when('/', {
          template: '<h2>Index Page</h2>',
          controller: 'EditEventController'
        })
        .when('/events', {
          templateUrl: 'templates/EventList.html',
          controller: 'EventListController'
        });

        $locationProvider.html5Mode(true);
    })
    .factory('myCache', function($cacheFactory) {
      return $cacheFactory('myCache', {capacity: 3});
    });

}());
