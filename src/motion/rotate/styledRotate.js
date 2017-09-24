import { TYPE_ROTATE } from '../typeEnums';

export function makeRotateIn({ rotation }) {
  return {
    from: {
      'transform-origin': 'center',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateIn.type = TYPE_ROTATE;

export function makeRotateLeft({ rotation }) {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateLeft.type = TYPE_ROTATE;

export function makeRotateRight({ rotation }) {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: `rotate3d(0, 0, 1, ${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateRight.type = TYPE_ROTATE;

export function makeRotateUpLeft({ rotation }) {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: `rotate3d(0, 0, 1, ${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateUpLeft.type = TYPE_ROTATE;

export function makeRotateUpRight({ rotation }) {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateUpRight.type = TYPE_ROTATE;
