export function makeBlur({ distance }) {
  return {
    '0%': {
      filter: 'blur(0px)',
    },
    '100%': {
      filter: `blur(${distance})`,
    },
  };
}

export function makeOpacity({ amplification }) {
  return {
    '0%': {
      filter: 'opacity(0%)',
    },
    '100%': {
      filter: `opacity(${amplification * 100}%)`,
    },
  };
}

export function makeContrast({ amplification }) {
  return {
    '0%': {
      filter: 'contrast(0%)',
    },
    '100%': {
      filter: `contrast(${amplification * 100}%)`,
    },
  };
}

export function makeBrightness({ amplification }) {
  return {
    '0%': {
      filter: 'brightness(0%)',
    },
    '100%': {
      filter: `brightness(${amplification * 100}%)`,
    },
  };
}

export function makeGrayscale({ amplification }) {
  return {
    '0%': {
      filter: 'grayscale(0%)',
    },
    '100%': {
      filter: `grayscale(${amplification * 100}%)`,
    },
  };
}

export function makeHueRotate({ rotation }) {
  return {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: `hue-rotate(${rotation})`,
    },
  };
}

export function makeInvert({ amplification }) {
  return {
    '0%': {
      filter: 'invert(0%)',
    },
    '100%': {
      filter: `invert(${amplification * 100}%)`,
    },
  };
}

export function makeSaturate({ amplification }) {
  return {
    '0%': {
      filter: 'saturate(0%)',
    },
    '100%': {
      filter: `saturate(${amplification * 8}%)`,
    },
  };
}

export function makeSepia({ amplification }) {
  return {
    '0%': {
      filter: 'sepia(0%)',
    },
    '100%': {
      filter: `sepia(${amplification * 100}%)`,
    },
  };
}

export function makeDropshadow({ amplification }) {
  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)',
    },
    '100%': {
      filter: `drop-shadow(${amplification * 5}px ${amplification * 5}px ${amplification * 5}px #000)`,
    },
  };
}
