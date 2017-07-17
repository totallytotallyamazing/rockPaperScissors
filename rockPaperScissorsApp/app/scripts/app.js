'use strict';

/**
 * @ngdoc overview
 * @name rockPaperScissorsApp
 * @description
 * # rockPaperScissorsApp
 *
 * Main module of the application.
 */
angular
  .module('rockPaperScissorsApp', [   
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'instructionsCtrl',
        controllerAs: 'instructions'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
