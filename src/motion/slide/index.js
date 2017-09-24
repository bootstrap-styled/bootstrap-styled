import { makeSlideDown, makeSlideUp, makeSlideLeft, makeSlideRight, makeSlideRightLeft } from './styledSlide';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';

export const SlideUp = composeDistance(composeAnimation(makeSlideDown), '$motion-slide-up-distance');
export const SlideDown = composeDistance(composeAnimation(makeSlideUp), '$motion-slide-down-distance');
export const SlideRight = composeDistance(composeAnimation(makeSlideRight), '$motion-slide-right-distance');
export const SlideLeft = composeDistance(composeAnimation(makeSlideLeft), '$motion-slide-left-distance');
export const SlideRightLeft = composeDistance(composeAnimation(makeSlideRightLeft), '$motion-slide-right-left-distance');
