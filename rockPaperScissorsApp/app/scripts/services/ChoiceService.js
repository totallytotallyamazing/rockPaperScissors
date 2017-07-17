'use strict';


angular.module('rockPaperScissorsApp')
	.factory('ChoiceService', ['$http', function($http){
	  	var fac = {};

	  	fac.addChoiceToAPI = function(choose) {
	  		// return promise back to original service call ".then" ($scope.addChoice)
	  		return $http.post('http://localhost:3000/match', choose);
	  	};

	  	return fac;
	}]);