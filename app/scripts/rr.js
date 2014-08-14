'use strict';

angular.module('rr', ['mgcrea.ngStrap','mgcrea.ngStrap.tooltip','mgcrea.ngStrap.typeahead']);


	// var ipLocate = $.getJSON('http://ip-api.com/json'),
	// located = $.parseJSON(ipLocate.responseText);

	var ipLocate = $http({method: 'GET', url: 'http://ip-api.com/json'}).
	   success(function(data, status, headers, config) {
	     // this callback will be called asynchronously
	     // when the response is available
	     console.log("fucking worked!");
	   }).
	   error(function(data, status, headers, config) {
	     // called asynchronously if an error occurs
	     // or server returns response with an error status.
	     console.log("dammit!");
	   });





	var longi = located.lon,
	lat = located.lat,
	clientId = 'RS2U4S0ERDPWHVWPBCGMGSYC2SZ13YS5FF4X4HEXHQTHKFS0',
	clientSecret = ' 5LN5C5XWFLWIFOTS2PBYZZRLNWBSL5NJFPNXG5VYVUTAM4AV';
	// formattedDate =
    var fsRequest = $.getJSON('https://api.foursquare.com/v2/venues/search?intent=browse&near=' + lat + ', ' + longi + '&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Restaurant&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=' + formattedDate);
