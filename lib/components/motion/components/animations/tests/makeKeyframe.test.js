'use strict';

var _makeKeyframe = require('../makeKeyframe');

var _makeKeyframe2 = _interopRequireDefault(_makeKeyframe);

var _styledFade = require('../fade/styledFade');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('motion keyframes utils', function () {
  var sampleKeyframeObject = void 0;

  var userKeyframes = {
    from: {
      width: '10%'
    },
    '60%': {
      width: '25%'
    },
    to: {
      width: '100%'
    }
  };

  beforeAll(function () {
    sampleKeyframeObject = {
      from: {
        width: '0%'
      },
      '20%, 40%': {
        width: '75%'
      },
      '60%': {
        width: '25%'
      },
      to: {
        width: '100%'
      }
    };
  });

  describe('makeKeyframe', function () {
    it('should makeKeyframe', function () {
      var distance = '10px';
      expect((0, _makeKeyframe2.default)(_styledFade.makeFadeIn, { distance: distance }, userKeyframes).length).toEqual(6);
    });

    it('should makeKeyframe and apply user keyframe', function () {
      var distance = '10px';
      var userKeyframe = {
        '20%, 40%': {
          width: '60%'
        },
        '50%': {
          width: '30%'
        }
      };
      expect((0, _makeKeyframe2.default)(_styledFade.makeFadeIn, { distance: distance }, userKeyframe).length).toEqual(6);
    });
  });

  describe('toKeyframeString', function () {
    it('should convert objet to keyframe string', function () {
      expect((0, _makeKeyframe.toKeyframeString)(sampleKeyframeObject)).toBe('from{width:0%;}20%, 40%{width:75%;}60%{width:25%;}to{width:100%;}');
    });
  });
});