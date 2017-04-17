'use strict';

var _styledFade = require('../styledFade');

describe('styledFade', function () {
  describe('makeFadeIn', function () {
    var makeFadeInResult = (0, _styledFade.makeFadeIn)();
    it('should returns keyframe name', function () {
      expect(makeFadeInResult).toEqual('bcCCNc');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFadeInResult2 = (0, _styledFade.makeFadeIn)();
      expect(makeFadeInResult2).toEqual(makeFadeInResult);
    });
  });
  describe('makeFadeLeft', function () {
    var distance = '10px';
    var makeFadeLeftResult = (0, _styledFade.makeFadeLeft)(distance);
    it('should returns keyframe name', function () {
      expect(makeFadeLeftResult).toEqual('jtWtJi');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFadeLeftResult2 = (0, _styledFade.makeFadeLeft)(distance);
      expect(makeFadeLeftResult2).toEqual(makeFadeLeftResult);
    });
  });
  describe('makeFadeRight', function () {
    var distance = '10px';
    var makeFadeRightResult = (0, _styledFade.makeFadeRight)(distance);
    it('should returns keyframe name', function () {
      expect(makeFadeRightResult).toEqual('iDeTOB');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFadeRightResult2 = (0, _styledFade.makeFadeRight)(distance);
      expect(makeFadeRightResult2).toEqual(makeFadeRightResult);
    });
  });
  describe('makeFadeDown', function () {
    var distance = '10px';
    var makeFadeDownResult = (0, _styledFade.makeFadeDown)(distance);
    it('should returns keyframe name', function () {
      expect(makeFadeDownResult).toEqual('czWqDm');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFadeDownResult2 = (0, _styledFade.makeFadeDown)(distance);
      expect(makeFadeDownResult2).toEqual(makeFadeDownResult);
    });
  });
  describe('makeFadeUp', function () {
    var distance = '10px';
    var makeFadeUpResult = (0, _styledFade.makeFadeUp)(distance);
    it('should returns keyframe name', function () {
      expect(makeFadeUpResult).toEqual('FzTce');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFadeUpResult2 = (0, _styledFade.makeFadeUp)(distance);
      expect(makeFadeUpResult2).toEqual(makeFadeUpResult);
    });
  });
}); /**
     * Testing our styled Fades utils
     */