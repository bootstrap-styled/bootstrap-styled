export function makeLightIn(distance) {
  return {
    from: {
      transform: `translate3d(${distance}, 0, 0) skew(-30deg)`,
      opacity: 0,
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

export function makeLightOut(distance) {
  return {
    from: {
      opacity: 1,
    },
    to: {
      transform: `translate3d(-${distance}, 0, 0) skew(30deg)`,
      opacity: 0,
    },
  };
}
