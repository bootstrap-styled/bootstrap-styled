'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRotateIn = makeRotateIn;
exports.makeRotateLeft = makeRotateLeft;
exports.makeRotateRight = makeRotateRight;
exports.makeRotateUpLeft = makeRotateUpLeft;
exports.makeRotateUpRight = makeRotateUpRight;

var _typeEnums = require('../typeEnums');

function makeRotateIn(_ref) {
  var rotation = _ref.rotation;

  return {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}

makeRotateIn.type = _typeEnums.TYPE_ROTATE;

function makeRotateLeft(_ref2) {
  var rotation = _ref2.rotation;

  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

makeRotateLeft.type = _typeEnums.TYPE_ROTATE;

function makeRotateRight(_ref3) {
  var rotation = _ref3.rotation;

  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

makeRotateRight.type = _typeEnums.TYPE_ROTATE;

function makeRotateUpLeft(_ref4) {
  var rotation = _ref4.rotation;

  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

makeRotateUpLeft.type = _typeEnums.TYPE_ROTATE;

function makeRotateUpRight(_ref5) {
  var rotation = _ref5.rotation;

  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

makeRotateUpRight.type = _typeEnums.TYPE_ROTATE;