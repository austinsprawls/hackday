'use strict';

angular.module('rr')

  .controller('MainCtrl', function ($scope) {
    $scope.selectedCuisine = "";
    $scope.cuisines = ["American", "Chinese", "Greek", "Thai", "Jamacian", "Mexican" ];

    $scope.selectedDistance = "";
    $scope.distances = ['0-1 Mile', '1-5 Miles', '5+ Miles'];

  });





// angular.forEach($scope.awesomeThings, function(awesomeThing) {
//   awesomeThing.rank = Math.random();
// });
