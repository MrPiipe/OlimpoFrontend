'use strict';

describe('Controller: RegisterartistCtrl', function () {

  // load the controller's module
  beforeEach(module('olimpoApp'));

  var RegisterartistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterartistCtrl = $controller('RegisterartistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterartistCtrl.awesomeThings.length).toBe(3);
  });
});
