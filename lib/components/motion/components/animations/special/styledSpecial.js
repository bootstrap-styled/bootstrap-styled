'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFlash = makeFlash;
exports.makeRollIn = makeRollIn;
exports.makeRollOut = makeRollOut;
exports.makeRubber = makeRubber;
exports.makeSwing = makeSwing;
exports.makeZoom = makeZoom;
exports.makeHinge = makeHinge;
exports.makePulse = makePulse;
exports.makeExpandUp = makeExpandUp;
exports.makeEntrance = makeEntrance;
exports.makeHatch = makeHatch;

var _typeEnums = require('../typeEnums');

function makeFlash() {
  return {
    from: {
      opacity: 1
    },
    '25%': {
      opacity: 0
    },
    '50%': {
      opacity: 1
    },
    '75%': {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  };
}

function makeRollIn(_ref) {
  var distance = _ref.distance,
      amplification = _ref.amplification;

  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0) rotate3d(0, 0, 1, -' + amplification * 120 + 'deg)',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}

makeRollIn.type = _typeEnums.TYPE_ROTATE;

function makeRollOut(_ref2) {
  var distance = _ref2.distance,
      amplification = _ref2.amplification;

  return {
    from: {
      opacity: 1
    },
    to: {
      transform: 'translate3d(' + distance + ', 0, 0) rotate3d(0, 0, 1, ' + amplification * 120 + 'deg)',
      opacity: 0
    }
  };
}

makeRollOut.type = _typeEnums.TYPE_ROTATE;

function makeRubber(_ref3) {
  var amplification = _ref3.amplification;

  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '30%': {
      transform: 'scale3d(' + amplification * 1.25 + ', ' + amplification * 0.75 + ', ' + amplification * 1 + ')'
    },
    '40%': {
      transform: 'scale3d(' + amplification * 0.75 + ', ' + amplification * 1.25 + ', ' + amplification * 1 + ')'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.15 + ', ' + amplification * 0.85 + ', ' + amplification * 1 + ')'
    },
    '65%': {
      transform: 'scale3d(' + amplification * 0.95 + ', ' + amplification * 1.05 + ', ' + amplification * 1 + ')'
    },
    '75%': {
      transform: 'scale3d(' + amplification * 1.05 + ', ' + amplification * 0.95 + ', ' + amplification * 1 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}

function makeSwing(_ref4) {
  var amplification = _ref4.amplification;

  return {
    '20%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 15 + 'deg)'
    },
    '40%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 10 + 'deg)'
    },
    '60%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 5 + 'deg)'
    },
    '80%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 5 + 'deg)'
    },
    to: {
      transform: 'rotate3d(0, 0, 1, 0deg)'
    }
  };
}

makeSwing.type = _typeEnums.TYPE_ROTATE;

function makeZoom(_ref5) {
  var amplification = _ref5.amplification;

  return {
    from: {
      opacity: 0,
      transform: 'scale3d(' + amplification * 0.4 + ', ' + amplification * 0.4 + ', ' + amplification * 0.4 + ')'
    },
    to: {
      opacity: 1
    }
  };
}

function makeHinge(_ref6) {
  var amplification = _ref6.amplification;

  return {
    from: {
      'transform-origin': 'top-left',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '20%, 40%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 80 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '60%, 80%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 20 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    to: {
      transform: 'translate3d(0, ' + amplification * 700 + 'px, 0)',
      opacity: 0
    }
  };
}

function makePulse(_ref7) {
  var amplification = _ref7.amplification;

  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.4 + ', ' + amplification * 1.4 + ', ' + amplification * 1.4 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}

function makeExpandUp(_ref8) {
  var amplification = _ref8.amplification;

  return {
    '0%': {
      transform: 'translateY(100%) scale(' + amplification * 0.6 + ') scaleY(' + amplification * 0.5 + ')'
    },
    '60%': {
      transform: 'translateY(-' + amplification * 7 + '%) scaleY(' + amplification * 1.12 + ')'
    },
    '75%': {
      transform: 'translateY(' + amplification * 3 + '%)'
    },
    '100%': {
      transform: 'translateY(0%) scale(' + amplification * 1 + ') scaleY(' + amplification * 1 + ')'
    }
  };
}

function makeEntrance(_ref9) {
  var amplification = _ref9.amplification;

  return {
    '0%': {
      transform: 'scale(' + amplification * 0.3 + ') rotate(' + amplification * 6 + 'deg) translateX(-' + amplification * 30 + '%) translateY(' + amplification * 30 + '%)',
      opacity: 0.1
    },
    '30%': {
      transform: 'scale(' + amplification * 1.03 + ') rotate(-' + amplification * 2 + 'deg) translateX(' + amplification * 2 + '%) translateY(-' + amplification * 2 + '%)',
      opacity: 1
    },
    '45%': {
      transform: 'scale(' + amplification * 0.98 + ')',
      opacity: 1
    },
    '60%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '75%': {
      transform: 'scale(' + amplification * 0.99 + ')',
      opacity: 1
    },
    '90%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  };
}

function makeHatch(_ref10) {
  var amplification = _ref10.amplification;

  return {
    '0%': {
      transform: 'scaleY(0.6)'
    },
    '20%': {
      transform: 'rotate(-' + amplification * 2 + 'deg) scaleY(' + amplification * 1.05 + ')'
    },
    '35%': {
      transform: 'rotate(' + amplification * 2 + 'deg) scaleY(' + amplification + ')'
    },
    '50%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '65%': {
      transform: 'rotate(' + amplification + 'deg)'
    },
    '80%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '100%': {
      transform: 'none'
    }
  };
}