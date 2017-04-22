'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLightIn = makeLightIn;
exports.makeLightOut = makeLightOut;
function makeLightIn(distance) {
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0) skew(-30deg)',
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

function makeLightOut(distance) {
  return {
    from: {
      opacity: 1
    },
    to: {
      transform: 'translate3d(-' + distance + ', 0, 0) skew(30deg)',
      opacity: 0
    }
  };
}