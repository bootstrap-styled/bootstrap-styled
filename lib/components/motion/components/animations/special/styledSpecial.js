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

function makeRollIn(distance) {
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0) rotate3d(0, 0, 1, -120deg)',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}

function makeRollOut(distance) {
  return {
    from: {
      opacity: 1
    },
    to: {
      transform: 'translate3d(' + distance + ', 0, 0) rotate3d(0, 0, 1, 120deg)',
      opacity: 0
    }
  };
}

function makeRubber() {
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '30%': {
      transform: 'scale3d(1.25, 0.75, 1)'
    },
    '40%': {
      transform: 'scale3d(0.75, 1.25, 1)'
    },
    '50%': {
      transform: 'scale3d(1.15, 0.85, 1)'
    },
    '65%': {
      transform: 'scale3d(.95, 1.05, 1)'
    },
    '75%': {
      transform: 'scale3d(1.05, .95, 1)'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}

function makeSwing() {
  return {
    '20%': {
      transform: 'rotate3d(0, 0, 1, 15deg)'
    },
    '40%': {
      transform: 'rotate3d(0, 0, 1, -10deg)'
    },
    '60%': {
      transform: 'rotate3d(0, 0, 1, 5deg)'
    },
    '80%': {
      transform: 'rotate3d(0, 0, 1, -5deg)'
    },
    to: {
      transform: 'rotate3d(0, 0, 1, 0deg)'
    }
  };
}

function makeZoom() {
  return {
    from: {
      opacity: 0,
      transform: 'scale3d(.4, .4, .4)'
    },
    to: {
      opacity: 1
    }
  };
}

function makeHinge() {
  return {
    from: {
      'transform-origin': 'top-left',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '20%, 40%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, 80deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '60%, 80%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, 20deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    to: {
      transform: 'translate3d(0, 700px, 0)',
      opacity: 0
    }
  };
}

function makePulse() {
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '50%': {
      transform: 'scale3d(1.4, 1.4, 1.4)'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}

function makeExpandUp() {
  return {
    '0%': {
      transform: 'translateY(100%) scale(0.6) scaleY(0.5)'
    },
    '60%': {
      transform: 'translateY(-7%) scaleY(1.12)'
    },
    '75%': {
      transform: 'translateY(3 %)'
    },
    '100%': {
      transform: 'translateY(0%) scale(1) scaleY(1)'
    }
  };
}

function makeEntrance() {
  return {
    '0%': {
      transform: 'scale(0.3) rotate(6deg) translateX(-30%) translateY(30%)',
      opacity: 0.1
    },
    '30%': {
      transform: 'scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%)',
      opacity: 1
    },
    '45%': {
      transform: 'scale(0.98)',
      opacity: 1
    },
    '60%': {
      transform: 'scale(1.01)',
      opacity: 1
    },
    '75%': {
      transform: 'scale(0.99)',
      opacity: 1
    },
    '90%': {
      transform: 'scale(1.01)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  };
}

function makeHatch() {
  return {
    '0%': {
      transform: 'scaleY(0.6)'
    },
    '20%': {
      transform: 'rotate(-2deg) scaleY(1.05)'
    },
    '35%': {
      transform: 'rotate(2deg) scaleY(1)'
    },
    '50%': {
      transform: 'rotate(-2deg)'
    },
    '65%': {
      transform: 'rotate(1deg)'
    },
    '80%': {
      transform: 'rotate(-1deg)'
    },
    '100%': {
      transform: 'none'
    }
  };
}