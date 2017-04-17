import {
  makeFadeIn,
  makeFadeDown,
  makeFadeUp,
  makeFadeLeft,
  makeFadeRight,
} from './styledFade';

import composeAnimation from '../../../templates/composeAnimation';

// fade animation components
export const FadeIn = composeAnimation(makeFadeIn);
export const FadeInDown = composeAnimation(makeFadeDown);
export const FadeInUp = composeAnimation(makeFadeUp);
export const FadeInLeft = composeAnimation(makeFadeLeft);
export const FadeInRight = composeAnimation(makeFadeRight);
