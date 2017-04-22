export function makeRotateIn() {
  return {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -200deg)',
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

export function makeRotateLeft() {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -45deg)',
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

export function makeRotateRight() {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, 45deg)',
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

export function makeRotateUpLeft() {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, 45deg)',
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

export function makeRotateUpRight() {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -45deg)',
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}
