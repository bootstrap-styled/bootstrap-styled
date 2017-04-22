'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSlideDown = makeSlideDown;
exports.makeSlideUp = makeSlideUp;
exports.makeSlideLeft = makeSlideLeft;
exports.makeSlideRight = makeSlideRight;
exports.makeSlideRightLeft = makeSlideRightLeft;
function makeSlideDown(distance) {
  return {
    from: {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideUp(distance) {
  return {
    from: {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideLeft(distance) {
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideRight(distance) {
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideRightLeft(distance) {
  return {
    from: {
      transform: 'translate3d(0, 0, 0)'
    },
    '50%': {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}