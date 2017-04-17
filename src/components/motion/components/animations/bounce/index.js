import {
  makeBounce,
  makeBounceDown,
  makeBounceUp,
  makeBounceLeft,
  makeBounceRight,
} from './styledBounce';

import composeAnimation from '../../../templates/composeAnimation';

// Bounce animation components
export const Bounce = composeAnimation(makeBounce);
export const BounceDown = composeAnimation(makeBounceDown);
export const BounceUp = composeAnimation(makeBounceUp);
export const BounceLeft = composeAnimation(makeBounceLeft);
export const BounceRight = composeAnimation(makeBounceRight);
