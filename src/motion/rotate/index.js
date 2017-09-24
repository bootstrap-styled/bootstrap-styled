import {
  makeRotateIn,
  makeRotateLeft,
  makeRotateRight,
  makeRotateUpRight,
  makeRotateUpLeft,
} from './styledRotate';

import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';

// Rotating animation components
export const RotateIn = composeRotation(composeAnimation(makeRotateIn), '$motion-rotate-in-rotation');
export const RotateLeft = composeRotation(composeAnimation(makeRotateLeft), '$motion-rotate-left-rotation');
export const RotateRight = composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-rotation');
export const RotateUpLeft = composeRotation(composeAnimation(makeRotateUpRight), '$motion-rotate-up-left-rotation');
export const RotateUpRight = composeRotation(composeAnimation(makeRotateUpLeft), '$motion-rotate-up-right-rotation');
