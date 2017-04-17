'use strict';

var _styledSlide = require('../styledSlide');

describe('styledSlide', function () {
  describe('makeSlideDown', function () {
    var distance = '10px';
    var makeSlideDownResult = (0, _styledSlide.makeSlideDown)(distance);
    it('should returns keyframe name', function () {
      expect(makeSlideDownResult).toEqual('gSZpQE');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSlideDownResult2 = (0, _styledSlide.makeSlideDown)(distance);
      expect(makeSlideDownResult2).toEqual(makeSlideDownResult);
    });
  });
  describe('makeSlideUp', function () {
    var distance = '10px';
    var makeSlideUpResult = (0, _styledSlide.makeSlideUp)(distance);
    it('should returns keyframe name', function () {
      expect(makeSlideUpResult).toEqual('cBBYct');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSlideUpResult2 = (0, _styledSlide.makeSlideUp)(distance);
      expect(makeSlideUpResult2).toEqual(makeSlideUpResult);
    });
  });
  describe('makeSlideLeft', function () {
    var distance = '10px';
    var makeSlideLeftResult = (0, _styledSlide.makeSlideLeft)(distance);
    it('should returns keyframe name', function () {
      expect(makeSlideLeftResult).toEqual('gJmLYA');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSlideLeftResult2 = (0, _styledSlide.makeSlideLeft)(distance);
      expect(makeSlideLeftResult2).toEqual(makeSlideLeftResult);
    });
  });
  describe('makeSlideRight', function () {
    var distance = '10px';
    var makeSlideRightResult = (0, _styledSlide.makeSlideRight)(distance);
    it('should returns keyframe name', function () {
      expect(makeSlideRightResult).toEqual('dJxhKL');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSlideRightResult2 = (0, _styledSlide.makeSlideRight)(distance);
      expect(makeSlideRightResult2).toEqual(makeSlideRightResult);
    });
  });
  describe('makeSlideRightLeft', function () {
    var distance = '10px';
    var makeSlideRightLeftResult = (0, _styledSlide.makeSlideRightLeft)(distance);
    it('should returns keyframe name', function () {
      expect(makeSlideRightLeftResult).toEqual('eXcoAr');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSlideRightLeftResult2 = (0, _styledSlide.makeSlideRightLeft)(distance);
      expect(makeSlideRightLeftResult2).toEqual(makeSlideRightLeftResult);
    });
  });
}); /**
     * Testing our styled Slides utils
     */