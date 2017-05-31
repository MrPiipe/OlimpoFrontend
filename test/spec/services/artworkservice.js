'use strict';

describe('Service: artworkservice', function () {

  // load the service's module
  beforeEach(module('olimpoApp'));

  // instantiate service
  var artworkservice;
  beforeEach(inject(function (_artworkservice_) {
    artworkservice = _artworkservice_;
  }));

  it('should do something', function () {
    expect(!!artworkservice).toBe(true);
  });

});
