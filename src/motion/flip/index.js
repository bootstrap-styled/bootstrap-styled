import {
  makeFlip,
  makeFlipX,
  makeFlipY,
} from './styledFlip';

import composeAnimation from '../templates/composeAnimation';
import composePerspective from '../templates/composePerspective';

// Flip animation components
export const Flip = composePerspective(composeAnimation(makeFlip), '$motion-flip-perspective');
export const FlipX = composePerspective(composeAnimation(makeFlipX), '$motion-flip-perspective');
export const FlipY = composePerspective(composeAnimation(makeFlipY), '$motion-flip-perspective');
