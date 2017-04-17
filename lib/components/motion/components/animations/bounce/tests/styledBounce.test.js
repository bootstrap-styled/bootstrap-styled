'use strict';

var _styledBounce = require('../styledBounce');

describe('styledBounce', function () {
  describe('makeBounce', function () {
    var makeBounceResult = (0, _styledBounce.makeBounce)();
    it('should returns keyframe name', function () {
      expect(makeBounceResult).toEqual('bGJZDZ');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBounceResult2 = (0, _styledBounce.makeBounce)();
      expect(makeBounceResult2).toEqual(makeBounceResult);
    });
  });
  describe('makeBounceDown', function () {
    var distance = '10px';
    var makeBounceDownResult = (0, _styledBounce.makeBounceDown)(distance);
    it('should returns keyframe name', function () {
      expect(makeBounceDownResult).toEqual('iQmzxR');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBounceDownResult2 = (0, _styledBounce.makeBounceDown)(distance);
      expect(makeBounceDownResult2).toEqual(makeBounceDownResult);
    });
  });
  describe('makeBounceUp', function () {
    var distance = '10px';
    var makeBounceUpResult = (0, _styledBounce.makeBounceUp)(distance);
    it('should returns keyframe name', function () {
      expect(makeBounceUpResult).toEqual('fAvSFW');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBounceUpResult2 = (0, _styledBounce.makeBounceUp)(distance);
      expect(makeBounceUpResult2).toEqual(makeBounceUpResult);
    });
  });
  describe('makeBounceLeft', function () {
    var distance = '10px';
    var makeBounceLeftResult = (0, _styledBounce.makeBounceLeft)(distance);
    it('should returns keyframe name', function () {
      expect(makeBounceLeftResult).toEqual('loBvxI');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBounceLeftResult2 = (0, _styledBounce.makeBounceLeft)(distance);
      expect(makeBounceLeftResult2).toEqual(makeBounceLeftResult);
    });
  });
  describe('makeBounceRight', function () {
    var distance = '10px';
    var makeBounceRightResult = (0, _styledBounce.makeBounceRight)(distance);
    it('should returns keyframe name', function () {
      expect(makeBounceRightResult).toEqual('fVeTvX');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeBounceRightResult2 = (0, _styledBounce.makeBounceRight)(distance);
      expect(makeBounceRightResult2).toEqual(makeBounceRightResult);
    });
  });
}); /**
     * Testing our styled Bounces utils
     */