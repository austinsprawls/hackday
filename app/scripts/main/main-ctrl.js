'use strict';

angular.module('rr')


  .controller('MainCtrl', function ($scope, $http) {

    $scope.selectedCuisine = "";
    $scope.cuisines = [];

    $scope.selectedDistance = "";
    $scope.distances = ['0.5 Mile', '1 Mile', '2 Miles', '3 Miles', '4 Miles'];

    $scope.rest1 = {};
    $scope.rest2 = {};
    $scope.change = "";

    var clientId = 'RS2U4S0ERDPWHVWPBCGMGSYC2SZ13YS5FF4X4HEXHQTHKFS0',
    clientSecret = '5LN5C5XWFLWIFOTS2PBYZZRLNWBSL5NJFPNXG5VYVUTAM4AV',
    // formattedDate = date.format("{FullYear}{Month:2}{Date:2}"),
    status,
    lat,
    longi,
    fsRequest,
    setData;

    setData = function(data) {
       status = data.status;
       var lat = data.lat;
       longi = data.lon;
       fsRequest = ('https://api.foursquare.com/v2/venues/search?intent=browse&near=' + lat + ',' + longi + '&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Restaurant&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20140814');
       // console.log("variables received for 4s call");
       // console.log(fsRequest);
       $http({method: 'GET', url: fsRequest}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          // console.log("4square object received");
          // console.log(data.response.venues);
          var restaurantArray = data.response.venues;
          // for(var i=0; i < restaurantArray.length; i++) {
          //   $scope.result = restaurantArray[i];
          // }
          var randomized = Math.floor(Math.random() * (restaurantArray.length)) - 1;
          $scope.rest1 = restaurantArray[randomized];
          randomized = Math.floor(Math.random() * (restaurantArray.length)) - 1;
          $scope.rest2 = restaurantArray[randomized];
          // console.log($scope.rest1);
          // console.log($scope.rest2);

          for(var i=0; i < restaurantArray.length; i++) {
            $scope.cuisines.push(restaurantArray[i].categories[0].shortName);
                    }
          // console.log($scope.rest1.categories[0].shortName);
          // console.log($scope.cuisines);

          // console.log($scope.selectedCuisine);
          $scope.changeCuisine = function(selectedCuisine) {
            for(var i=0; i < restaurantArray.length; i++) {
              if(restaurantArray[i].categories[0].shortName === selectedCuisine) {
                $scope.cuisines.push(restaurantArray[i].categories[0].shortName);
              }
            }
          };

          $scope.changeDistance = function(distance) {

          };

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          // console.log("4s call not received");
        });

     };

    $http({method: 'GET', url: 'http://ip-api.com/json'}).
     success(function(data, status, headers, config) {
       // this callback will be called asynchronously
       // when the response is available
       // console.log("location object received");
       setData(data);

     }).
     error(function(data, status, headers, config) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       // console.log("location not received");
     });

  });





// angular.forEach($scope.awesomeThings, function(awesomeThing) {
//   awesomeThing.rank = Math.random();
// });
