import {
  makeBounce,
  makeBounceDown,
  makeBounceUp,
  makeBounceLeft,
  makeBounceRight,
} from './styledBounce';

import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
import composeAmplification from '../templates/composeAmplification';

// Bounce animation components
export const Bounce = composeAmplification(composeAnimation(makeBounce), '$motion-bounce-amplification');
export const BounceDown = composeDistance(composeAnimation(makeBounceDown), '$motion-bounce-down-distance');
export const BounceUp = composeDistance(composeAnimation(makeBounceUp), '$motion-bounce-up-distance');
export const BounceLeft = composeDistance(composeAnimation(makeBounceLeft), '$motion-bounce-left-distance');
export const BounceRight = composeDistance(composeAnimation(makeBounceRight), '$motion-bounce-right-distance');
