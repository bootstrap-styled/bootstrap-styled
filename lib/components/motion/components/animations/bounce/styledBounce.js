'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBounce = makeBounce;
exports.makeBounceDown = makeBounceDown;
exports.makeBounceUp = makeBounceUp;
exports.makeBounceLeft = makeBounceLeft;
exports.makeBounceRight = makeBounceRight;
function makeBounce() {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)'
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)'
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)'
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)'
    }
  };
}

function makeBounceDown(_ref) {
  var distance = _ref.distance;

  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, 25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, -15px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, 5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeBounceUp(_ref2) {
  var distance = _ref2.distance;

  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, -25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

function makeBounceLeft(_ref3) {
  var distance = _ref3.distance;

  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(-10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}

function makeBounceRight(_ref4) {
  var distance = _ref4.distance;

  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(-25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(-5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}