'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBlur = makeBlur;
exports.makeOpacity = makeOpacity;
exports.makeContrast = makeContrast;
exports.makeBrightness = makeBrightness;
exports.makeGrayscale = makeGrayscale;
exports.makeHueRotate = makeHueRotate;
exports.makeInvert = makeInvert;
exports.makeSaturate = makeSaturate;
exports.makeSepia = makeSepia;
exports.makeDropshadow = makeDropshadow;
function makeBlur(_ref) {
  var distance = _ref.distance;

  return {
    '0%': {
      filter: 'blur(0px)'
    },
    '100%': {
      filter: 'blur(' + distance + ')'
    }
  };
}

function makeOpacity(_ref2) {
  var amplification = _ref2.amplification;

  return {
    '0%': {
      filter: 'opacity(0%)'
    },
    '100%': {
      filter: 'opacity(' + amplification * 100 + '%)'
    }
  };
}

function makeContrast(_ref3) {
  var amplification = _ref3.amplification;

  return {
    '0%': {
      filter: 'contrast(0%)'
    },
    '100%': {
      filter: 'contrast(' + amplification * 100 + '%)'
    }
  };
}

function makeBrightness(_ref4) {
  var amplification = _ref4.amplification;

  return {
    '0%': {
      filter: 'brightness(0%)'
    },
    '100%': {
      filter: 'brightness(' + amplification * 100 + '%)'
    }
  };
}

function makeGrayscale(_ref5) {
  var amplification = _ref5.amplification;

  return {
    '0%': {
      filter: 'grayscale(0%)'
    },
    '100%': {
      filter: 'grayscale(' + amplification * 100 + '%)'
    }
  };
}

function makeHueRotate(_ref6) {
  var rotation = _ref6.rotation;

  return {
    '0%': {
      filter: 'hue-rotate(0deg)'
    },
    '100%': {
      filter: 'hue-rotate(' + rotation + ')'
    }
  };
}

function makeInvert(_ref7) {
  var amplification = _ref7.amplification;

  return {
    '0%': {
      filter: 'invert(0%)'
    },
    '100%': {
      filter: 'invert(' + amplification * 100 + '%)'
    }
  };
}

function makeSaturate(_ref8) {
  var amplification = _ref8.amplification;

  return {
    '0%': {
      filter: 'saturate(0%)'
    },
    '100%': {
      filter: 'saturate(' + amplification * 8 + '%)'
    }
  };
}

function makeSepia(_ref9) {
  var amplification = _ref9.amplification;

  return {
    '0%': {
      filter: 'sepia(0%)'
    },
    '100%': {
      filter: 'sepia(' + amplification * 100 + '%)'
    }
  };
}

function makeDropshadow(_ref10) {
  var amplification = _ref10.amplification;

  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)'
    },
    '100%': {
      filter: 'drop-shadow(' + amplification * 5 + 'px ' + amplification * 5 + 'px ' + amplification * 5 + 'px #000)'
    }
  };
}