export function makeSlideDown({ distance }) {
  return {
    from: {
      transform: `translate3d(0, -${distance}, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

export function makeSlideUp({ distance }) {
  return {
    from: {
      transform: `translate3d(0, ${distance}, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

export function makeSlideLeft({ distance }) {
  return {
    from: {
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

export function makeSlideRight({ distance }) {
  return {
    from: {
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

export function makeSlideRightLeft({ distance }) {
  return {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    '50%': {
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}
