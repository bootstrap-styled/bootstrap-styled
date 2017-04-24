import { TYPE_ROTATE } from '../typeEnums';

export function makeFlip({ perspective }) {
  return {
    from: {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -360deg)`,
      'animation-timing-function': 'ease-out',
    },
    '40%': {
      transform: `perspective(${perspective}) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)`,
      'animation-timing-function': 'ease-out',
    },
    '50%': {
      transform: `perspective(${perspective}) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px)`,
      'animation-timing-function': 'ease-in',
    },
    '80%': {
      transform: `perspective(${perspective}) scale3d(.90, .90, .90)`,
      'animation-timing-function': 'ease-in',
    },
    to: {
      transform: `perspective(${perspective})`,
      'animation-timing-function': 'ease-in',
    },
  };
}

makeFlip.type = TYPE_ROTATE;

export function makeFlipX({ perspective }) {
  return {
    from: {
      transform: `perspective(${perspective}) rotate3d(1, 0, 0, 90deg)`,
      'animation-timing-function': 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: `perspective(${perspective}) rotate3d(1, 0, 0, -20deg)`,
      'animation-timing-function': 'ease-in',
    },
    '60%': {
      transform: `perspective(${perspective}) rotate3d(1, 0, 0, 10deg)`,
      opacity: 1,
    },
    '80%': {
      transform: `perspective(${perspective}) rotate3d(1, 0, 0, -5deg)`,
    },
    to: {
      transform: `perspective(${perspective})`,
    },
  };
}

makeFlipX.type = TYPE_ROTATE;

export function makeFlipY({ perspective }) {
  return {
    from: {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, 90deg)`,
      'animation-timing-function': 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -20deg)`,
      'animation-timing-function': 'ease-in',
    },
    '60%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, 10deg)`,
      opacity: 1,
    },
    '80%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -5deg)`,
    },
    to: {
      transform: `perspective(${perspective})`,
    },
  };
}

makeFlipY.type = TYPE_ROTATE;

