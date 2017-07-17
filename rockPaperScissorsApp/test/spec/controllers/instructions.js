'use strict';

describe('Controller: instructionsCtrl', function () {

  // load the controller's module
  beforeEach(module('rockPaperScissorsApp'));

  var instructionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    instructionsCtrl = $controller('instructionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(instructionsCtrl.awesomeThings.length).toBe(3);
  });
});
