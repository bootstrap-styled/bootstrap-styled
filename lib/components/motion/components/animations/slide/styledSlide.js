'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSlideDown = makeSlideDown;
exports.makeSlideUp = makeSlideUp;
exports.makeSlideLeft = makeSlideLeft;
exports.makeSlideRight = makeSlideRight;
exports.makeSlideRightLeft = makeSlideRightLeft;
function makeSlideDown(_ref) {
  var distance = _ref.distance;

  return {
    from: {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideUp(_ref2) {
  var distance = _ref2.distance;

  return {
    from: {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideLeft(_ref3) {
  var distance = _ref3.distance;

  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideRight(_ref4) {
  var distance = _ref4.distance;

  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeSlideRightLeft(_ref5) {
  var distance = _ref5.distance;

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