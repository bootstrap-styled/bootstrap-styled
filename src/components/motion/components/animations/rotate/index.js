import {
  makeRotateIn,
  makeRotateLeft,
  makeRotateRight,
  makeRotateUpRight,
  makeRotateUpLeft,
} from './styledRotate';

import composeAnimation from '../../../templates/composeAnimation';
import composeRotation from '../../../templates/composeRotation';

// Rotating animation components
export const RotateIn = composeRotation(composeAnimation(makeRotateIn), '$motion-rotate-in-degree');
export const RotateLeft = composeRotation(composeAnimation(makeRotateLeft), '$motion-rotate-left-degree');
export const RotateRight = composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-degree');
export const RotateUpLeft = composeRotation(composeAnimation(makeRotateUpRight), '$motion-rotate-up-left-degree');
export const RotateUpRight = composeRotation(composeAnimation(makeRotateUpLeft), '$motion-rotate-up-right-degree');
