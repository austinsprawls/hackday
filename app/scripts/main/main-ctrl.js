'use strict';

angular.module('rr')
  .controller('MainCtrl', function ($scope) {
    $scope.selectedCuisine = "";
    $scope.cuisines = ["American", "Chinese", "Greek", "Thai", "Jamacian", "Mexican" ];

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
