'use strict';

angular.module('eventsApp')
  .controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};

    $scope.getGravatarUrl = function(email) {
      console.log('getGravatarUrl() works');
      return gravatarUrlBuilder.buildGravatarUrl(email);
    }
  });
