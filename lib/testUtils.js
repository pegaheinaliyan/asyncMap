(function () {
  'use strict';

  // spy on native methods
  beforeEach(function () {
    spyOn(Array.prototype, 'map');
    spyOn(Array.prototype, 'indexOf');
    spyOn(Array.prototype, 'forEach');
    spyOn(Array.prototype, 'filter');
    spyOn(Array.prototype, 'reduce');
    spyOn(Array.prototype, 'every');
    spyOn(Array.prototype, 'some');
  });

  // stop spying on native methods
  afterEach(function () {
    Array.prototype.map.calls.reset();
    Array.prototype.indexOf.calls.reset();
    Array.prototype.forEach.calls.reset();
    Array.prototype.filter.calls.reset();
    Array.prototype.reduce.calls.reset();
    Array.prototype.every.calls.reset();
    Array.prototype.some.calls.reset();
  });

  // make sure we are not using native methods
  window.testForNativeMethods = function (loscoreMethod) {
    it('should not use native methods its implementation', function() {
      loscoreMethod();
      expect(Array.prototype.map).not.toHaveBeenCalled();
      expect(Array.prototype.indexOf).not.toHaveBeenCalled();
      expect(Array.prototype.forEach).not.toHaveBeenCalled();
      expect(Array.prototype.filter).not.toHaveBeenCalled();
      expect(Array.prototype.reduce).not.toHaveBeenCalled();
      expect(Array.prototype.every).not.toHaveBeenCalled();
      expect(Array.prototype.some).not.toHaveBeenCalled();
    });
  };
}());