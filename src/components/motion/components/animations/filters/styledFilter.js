export function makeBlur() {
  return {
    '0%': {
      filter: 'blur(0px)',
    },
    '100%': {
      filter: 'blur(5px)',
    },
  };
}

export function makeOpacity() {
  return {
    '0%': {
      filter: 'opacity(0%)',
    },
    '100%': {
      filter: 'opacity(100%)',
    },
  };
}

export function makeContrast() {
  return {
    '0%': {
      filter: 'contrast(0%)',
    },
    '100%': {
      filter: 'contrast(100%)',
    },
  };
}

export function makeBrightness() {
  return {
    '0%': {
      filter: 'brightness(0%)',
    },
    '100%': {
      filter: 'brightness(100%)',
    },
  };
}

export function makeGrayscale() {
  return {
    '0%': {
      filter: 'grayscale(0%)',
    },
    '100%': {
      filter: 'grayscale(100%)',
    },
  };
}

export function makeHueRotate() {
  return {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: 'hue-rotate(360deg)',
    },
  };
}

export function makeInvert() {
  return {
    '0%': {
      filter: 'invert(0%)',
    },
    '100%': {
      filter: 'invert(100%)',
    },
  };
}

export function makeSaturate() {
  return {
    '0%': {
      filter: 'saturate(0%)',
    },
    '100%': {
      filter: 'saturate(8%)',
    },
  };
}

export function makeSepia() {
  return {
    '0%': {
      filter: 'sepia(0%)',
    },
    '100%': {
      filter: 'sepia(100%)',
    },
  };
}
