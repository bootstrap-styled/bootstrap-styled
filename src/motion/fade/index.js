import {
  makeFadeIn,
  makeFadeDown,
  makeFadeUp,
  makeFadeLeft,
  makeFadeRight,
} from './styledFade';

import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';

// fade animation components
export const FadeIn = composeAnimation(makeFadeIn);
export const FadeInDown = composeDistance(composeAnimation(makeFadeDown), '$motion-fade-in-down-distance');
export const FadeInUp = composeDistance(composeAnimation(makeFadeUp), '$motion-fade-in-up-distance');
export const FadeInLeft = composeDistance(composeAnimation(makeFadeLeft), '$motion-fade-in-left-distance');
export const FadeInRight = composeDistance(composeAnimation(makeFadeRight), '$motion-fade-in-right-distance');
