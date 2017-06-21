'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLightIn = makeLightIn;
exports.makeLightOut = makeLightOut;
function makeLightIn(_ref) {
  var distance = _ref.distance,
      rotation = _ref.rotation;

  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0) skew(-' + rotation + ')',
      opacity: 0
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}

function makeLightOut(_ref2) {
  var distance = _ref2.distance,
      rotation = _ref2.rotation;

  return {
    from: {
      opacity: 1
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'translate3d(-' + distance + ', 0, 0) skew(' + rotation + ')',
      opacity: 0
    }
  };
}