export function makeFadeIn() {
  return {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  };
}

export function makeFadeLeft({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}

export function makeFadeRight({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}

export function makeFadeDown({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(0, -${distance}, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}

export function makeFadeUp({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(0, ${distance}, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}
