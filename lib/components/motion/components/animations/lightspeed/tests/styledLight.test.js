'use strict';

var _styledLight = require('../styledLight');

describe('styledRotate', function () {
  describe('makeLightIn', function () {
    var makeLightInResult = (0, _styledLight.makeLightIn)();
    it('should returns keyframe name', function () {
      expect(makeLightInResult).toEqual('fWPlCM');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeLightInResult2 = (0, _styledLight.makeLightIn)();
      expect(makeLightInResult2).toEqual(makeLightInResult);
    });
  });
  describe('makeLightOut', function () {
    var makeLightOutResult = (0, _styledLight.makeLightOut)();
    it('should returns keyframe name', function () {
      expect(makeLightOutResult).toEqual('fWPlCM');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeLightOutResult2 = (0, _styledLight.makeLightOut)();
      expect(makeLightOutResult2).toEqual(makeLightOutResult);
    });
  });
}); /**
     * Testing our styled Lights utils
     */