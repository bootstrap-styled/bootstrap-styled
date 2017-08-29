'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFadeIn = makeFadeIn;
exports.makeFadeLeft = makeFadeLeft;
exports.makeFadeRight = makeFadeRight;
exports.makeFadeDown = makeFadeDown;
exports.makeFadeUp = makeFadeUp;
function makeFadeIn() {
  return {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  };
}

function makeFadeLeft(_ref) {
  var distance = _ref.distance;

  return {
    from: {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}

function makeFadeRight(_ref2) {
  var distance = _ref2.distance;

  return {
    from: {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}

function makeFadeDown(_ref3) {
  var distance = _ref3.distance;

  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}

function makeFadeUp(_ref4) {
  var distance = _ref4.distance;

  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}