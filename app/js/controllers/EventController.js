'use strict';

angular.module('eventsApp')
  .controller('EventController', function EventController($scope, eventData, $log, $anchorScroll) {

    $scope.myclass = 'blue';
    $scope.buttonDisabled = true;

    $scope.sortorder = 'name';

    // eventData.getEvent()
    //   .then(function(response) {
    //     $scope.event = response.data;
    //   }, function(response) {
    //     $log.warn(response);
    //   });

    // $scope.event = eventData.getEvent();
    eventData.getEvent()
      .$promise
      .then(function (event) {
        $scope.event = event;
        console.log(event);
      })
      .catch(function (response) {
        console.log(response);
      });

    // (function (event) {
    // console.log('successcb() work', event);
    //   $scope.event = event;
    // });

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    };

    $scope.scrollToSession = function () {
      $log.info('$anchorScroll()');
      $anchorScroll();
    };
  });
