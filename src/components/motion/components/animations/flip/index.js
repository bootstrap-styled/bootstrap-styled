import {
  makeFlip,
  makeFlipX,
  makeFlipY,
} from './styledFlip';

import composeAnimation from '../../../templates/composeAnimation';

// Flip animation components
export const Flip = composeAnimation(makeFlip);
export const FlipX = composeAnimation(makeFlipX);
export const FlipY = composeAnimation(makeFlipY);
