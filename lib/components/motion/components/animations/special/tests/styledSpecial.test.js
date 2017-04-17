'use strict';

var _styledSpecial = require('../styledSpecial');

describe('styledSpecial', function () {
  describe('makeFlash', function () {
    var makeFlashResult = (0, _styledSpecial.makeFlash)();
    it('should returns keyframe name', function () {
      expect(makeFlashResult).toEqual('SMqY');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeFlashResult2 = (0, _styledSpecial.makeFlash)();
      expect(makeFlashResult2).toEqual(makeFlashResult);
    });
  });
  describe('makeRollIn', function () {
    var distance = '10px';
    var makeRollInResult = (0, _styledSpecial.makeRollIn)(distance);
    it('should returns keyframe name', function () {
      expect(makeRollInResult).toEqual('fsznfI');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRollInResult2 = (0, _styledSpecial.makeRollIn)(distance);
      expect(makeRollInResult2).toEqual(makeRollInResult);
    });
  });
  describe('makeRollOut', function () {
    var makeRollOutResult = (0, _styledSpecial.makeRollOut)();
    it('should returns keyframe name', function () {
      expect(makeRollOutResult).toEqual('habgPa');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRollOutResult2 = (0, _styledSpecial.makeRollOut)();
      expect(makeRollOutResult2).toEqual(makeRollOutResult);
    });
  });
  describe('makeRubber', function () {
    var makeRubberResult = (0, _styledSpecial.makeRubber)();
    it('should returns keyframe name', function () {
      expect(makeRubberResult).toEqual('eLAOjJ');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeRubberResult2 = (0, _styledSpecial.makeRubber)();
      expect(makeRubberResult2).toEqual(makeRubberResult);
    });
  });
  describe('makeSwing', function () {
    var makeSwingResult = (0, _styledSpecial.makeSwing)();
    it('should returns keyframe name', function () {
      expect(makeSwingResult).toEqual('edjYBQ');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeSwingResult2 = (0, _styledSpecial.makeSwing)();
      expect(makeSwingResult2).toEqual(makeSwingResult);
    });
  });
  describe('makeZoom', function () {
    var makeZoomResult = (0, _styledSpecial.makeZoom)();
    it('should returns keyframe name', function () {
      expect(makeZoomResult).toEqual('jDtmwQ');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeZoomResult2 = (0, _styledSpecial.makeZoom)();
      expect(makeZoomResult2).toEqual(makeZoomResult);
    });
  });
  describe('makeHinge', function () {
    var makeHingeResult = (0, _styledSpecial.makeHinge)();
    it('should returns keyframe name', function () {
      expect(makeHingeResult).toEqual('kpAQww');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeHingeResult2 = (0, _styledSpecial.makeHinge)();
      expect(makeHingeResult2).toEqual(makeHingeResult);
    });
  });
  describe('makePulse', function () {
    var makePulseResult = (0, _styledSpecial.makePulse)();
    it('should returns keyframe name', function () {
      expect(makePulseResult).toEqual('dZZFRs');
    });
    it('should returns the same keyframe name as last test', function () {
      var makePulseResult2 = (0, _styledSpecial.makePulse)();
      expect(makePulseResult2).toEqual(makePulseResult);
    });
  });
  describe('makeExpandUp', function () {
    var makeExpandUpResult = (0, _styledSpecial.makeExpandUp)();
    it('should returns keyframe name', function () {
      expect(makeExpandUpResult).toEqual('jGTkUn');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeExpandUpResult2 = (0, _styledSpecial.makeExpandUp)();
      expect(makeExpandUpResult2).toEqual(makeExpandUpResult);
    });
  });
  describe('makeEntrance', function () {
    var makeEntranceResult = (0, _styledSpecial.makeEntrance)();
    it('should returns keyframe name', function () {
      expect(makeEntranceResult).toEqual('bHRTcH');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeEntranceResult2 = (0, _styledSpecial.makeEntrance)();
      expect(makeEntranceResult2).toEqual(makeEntranceResult);
    });
  });
  describe('makeHatch', function () {
    var makeHatchResult = (0, _styledSpecial.makeHatch)();
    it('should returns keyframe name', function () {
      expect(makeHatchResult).toEqual('hzejgT');
    });
    it('should returns the same keyframe name as last test', function () {
      var makeHatchResult2 = (0, _styledSpecial.makeHatch)();
      expect(makeHatchResult2).toEqual(makeHatchResult);
    });
  });
}); /**
     * Testing our styled Special utils
     */