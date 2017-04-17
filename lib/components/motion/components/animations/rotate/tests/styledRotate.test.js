'use strict';

var _styledRotate = require('../styledRotate');

describe('styledRotate', function () {
  describe('makeRotateIn', function () {
    var makeRotateInResult = (0, _styledRotate.makeRotateIn)();
    it('should returns keyframe name', function () {
      expect(makeRotateInResult).toEqual('cxMKCH');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRotateInResult2 = (0, _styledRotate.makeRotateIn)();
      expect(makeRotateInResult2).toEqual(makeRotateInResult);
    });
  });
  describe('makeRotateLeft', function () {
    var makeRotateLeftResult = (0, _styledRotate.makeRotateLeft)();
    it('should returns keyframe name', function () {
      expect(makeRotateLeftResult).toEqual('lpoUit');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRotateLeftResult2 = (0, _styledRotate.makeRotateLeft)();
      expect(makeRotateLeftResult2).toEqual(makeRotateLeftResult);
    });
  });
  describe('makeRotateRight', function () {
    var makeRotateRightResult = (0, _styledRotate.makeRotateRight)();
    it('should returns keyframe name', function () {
      expect(makeRotateRightResult).toEqual('fIDweJ');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRotateRightResult2 = (0, _styledRotate.makeRotateRight)();
      expect(makeRotateRightResult2).toEqual(makeRotateRightResult);
    });
  });
  describe('makeRotateUpLeft', function () {
    var makeRotateUpLeftResult = (0, _styledRotate.makeRotateUpLeft)();
    it('should returns keyframe name', function () {
      expect(makeRotateUpLeftResult).toEqual('cEUyXs');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeLightOutResult2 = (0, _styledRotate.makeRotateUpLeft)();
      expect(makeLightOutResult2).toEqual(makeRotateUpLeftResult);
    });
  });
  describe('makeRotateUpRight', function () {
    var makeRotateUpRightResult = (0, _styledRotate.makeRotateUpRight)();
    it('should returns keyframe name', function () {
      expect(makeRotateUpRightResult).toEqual('hQkJpn');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRotateUpRightResult2 = (0, _styledRotate.makeRotateUpRight)();
      expect(makeRotateUpRightResult2).toEqual(makeRotateUpRightResult);
    });
  });
}); /**
     * Testing our styled Rotates utils
     */