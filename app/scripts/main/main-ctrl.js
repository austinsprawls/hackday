'use strict';

angular.module('rr')

  .controller('MainCtrl', function ($scope) {
    $scope.selectedCuisine = "";
    $scope.cuisines = ["American", "Chinese", "Greek", "Thai", "Jamacian", "Mexican" ];

    $scope.selectedDistance = "";
    $scope.distances = ['0.5 Mile', '1 Mile', '2 Miles', '3 Miles', '4 Miles'];

  });





// angular.forEach($scope.awesomeThings, function(awesomeThing) {
//   awesomeThing.rank = Math.random();
// });
