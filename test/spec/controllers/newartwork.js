'use strict';

describe('Controller: NewartworkCtrl', function () {

  // load the controller's module
  beforeEach(module('olimpoApp'));

  var NewartworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewartworkCtrl = $controller('NewartworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewartworkCtrl.awesomeThings.length).toBe(3);
  });
});
