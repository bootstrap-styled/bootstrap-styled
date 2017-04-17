import {
  makeRotateIn,
  makeRotateLeft,
  makeRotateRight,
  makeRotateUpRight,
  makeRotateUpLeft,
} from './styledRotate';

import composeAnimation from '../../../templates/composeAnimation';

// Rotating animation components
export const RotateIn = composeAnimation(makeRotateIn);
export const RotateLeft = composeAnimation(makeRotateLeft);
export const RotateRight = composeAnimation(makeRotateRight);
export const RotateUpLeft = composeAnimation(makeRotateUpRight);
export const RotateUpRight = composeAnimation(makeRotateUpLeft);
