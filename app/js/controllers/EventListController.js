'use strict';

angular.module('eventsApp')
  .controller('EventListController', function EventListController($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();
  });
