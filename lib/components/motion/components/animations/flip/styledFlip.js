'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFlip = makeFlip;
exports.makeFlipX = makeFlipX;
exports.makeFlipY = makeFlipY;

var _typeEnums = require('../typeEnums');

function makeFlip(_ref) {
  var perspective = _ref.perspective;

  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -360deg)',
      'animation-timing-function': 'ease-out'
    },
    '40%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      'animation-timing-function': 'ease-out'
    },
    '50%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px)',
      'animation-timing-function': 'ease-in'
    },
    '80%': {
      transform: 'perspective(' + perspective + ') scale3d(.90, .90, .90)',
      'animation-timing-function': 'ease-in'
    },
    to: {
      transform: 'perspective(' + perspective + ')',
      'animation-timing-function': 'ease-in'
    }
  };
}

makeFlip.type = _typeEnums.TYPE_ROTATE;

function makeFlipX(_ref2) {
  var perspective = _ref2.perspective;

  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}

makeFlipX.type = _typeEnums.TYPE_ROTATE;

function makeFlipY(_ref3) {
  var perspective = _ref3.perspective;

  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}

makeFlipY.type = _typeEnums.TYPE_ROTATE;