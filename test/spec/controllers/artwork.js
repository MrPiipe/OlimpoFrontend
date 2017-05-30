'use strict';

describe('Controller: ArtworkCtrl', function () {

  // load the controller's module
  beforeEach(module('olimpoApp'));

  var ArtworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtworkCtrl = $controller('ArtworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArtworkCtrl.awesomeThings.length).toBe(3);
  });
});
