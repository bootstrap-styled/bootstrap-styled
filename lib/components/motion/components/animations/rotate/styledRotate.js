'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRotateIn = makeRotateIn;
exports.makeRotateLeft = makeRotateLeft;
exports.makeRotateRight = makeRotateRight;
exports.makeRotateUpLeft = makeRotateUpLeft;
exports.makeRotateUpRight = makeRotateUpRight;
function makeRotateIn() {
  return {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -200deg)',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}

function makeRotateLeft() {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -45deg)',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

function makeRotateRight() {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, 45deg)',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

function makeRotateUpLeft() {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, 45deg)',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}

function makeRotateUpRight() {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -45deg)',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}