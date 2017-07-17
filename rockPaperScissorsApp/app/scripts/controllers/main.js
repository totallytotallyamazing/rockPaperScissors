'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
  .controller('MainCtrl', function ($scope, ChoiceService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.state1 = 'unChosen';

    $scope.state2 = 'unPlayed';

	$scope.data = {};

	$scope.error = {};

	$scope.userScore = 0;

	$scope.computerScore = 0;

    $scope.resultColor = 'black';

    // button_active script [START]
    $scope.setActive = function(type) {
        $scope.active = type;
    };
    $scope.isActive = function(type) {
        return type === $scope.active;
    };
    // button_active script [END]

    $scope.addChoice = function() {

    	$scope.state1 = 'unChosen';
        $scope.state2 = 'unPlayed';

    	console.log('state1 ', $scope.state1, 'state2 ', $scope.state2);

    	ChoiceService.addChoiceToAPI($scope.choose).then(function(response) {
    		$scope.data = response.data;

            $scope.resultColor = 'black';

    		if($scope.data.result === 'win') {
    			$scope.userScore++;
                $scope.resultColor = 'green';
    		} else if ($scope.data.result === 'lose') {
    			$scope.computerScore++;
                $scope.resultColor = 'red';
    		} else {
                $scope.resultColor = 'black';
            }

    		console.log($scope.data);
    		$scope.state2 = 'default';
    		console.log('state2 ', $scope.state2);
        
	    }, function(error){
	    	$scope.error = error.data;

	      console.log('Error occured ', $scope.error);
	    });
    };

  });
