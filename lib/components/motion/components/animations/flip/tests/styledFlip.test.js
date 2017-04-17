'use strict';

var _styledFlip = require('../styledFlip');

describe('styledRotate', function () {
  describe('makeFlip', function () {
    var makeFlipResult = (0, _styledFlip.makeFlip)();
    it('should returns keyframe name', function () {
      expect(makeFlipResult).toEqual('bFRVYp');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFlipResult2 = (0, _styledFlip.makeFlip)();
      expect(makeFlipResult2).toEqual(makeFlipResult);
    });
  });
  describe('makeFlipX', function () {
    var makeFlipXResult = (0, _styledFlip.makeFlipX)();
    it('should returns keyframe name', function () {
      expect(makeFlipXResult).toEqual('kMwdJm');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFlipXResult2 = (0, _styledFlip.makeFlipX)();
      expect(makeFlipXResult2).toEqual(makeFlipXResult);
    });
  });
  describe('makeFlipY', function () {
    var makeFlipYResult = (0, _styledFlip.makeFlipY)();
    it('should returns keyframe name', function () {
      expect(makeFlipYResult).toEqual('kmnyUX');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFlipYResult2 = (0, _styledFlip.makeFlipY)();
      expect(makeFlipYResult2).toEqual(makeFlipYResult);
    });
  });
}); /**
     * Testing our styled Flips utils
     */