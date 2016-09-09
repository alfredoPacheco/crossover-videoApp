'use strict';

describe('Service: listController', function () {

  // load the service's module
  beforeEach(module('videosApp'));

  // instantiate service
  var listController;
  beforeEach(inject(function (_listController_) {
    listController = _listController_;
  }));

  it('should do something', function () {
    expect(!!listController).toBe(true);
  });

});
