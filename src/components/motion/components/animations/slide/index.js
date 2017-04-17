import { makeSlideDown, makeSlideUp, makeSlideLeft, makeSlideRight, makeSlideRightLeft } from './styledSlide';
import composeAnimation from '../../../templates/composeAnimation';

export const SlideUp = composeAnimation(makeSlideDown);
export const SlideDown = composeAnimation(makeSlideUp);
export const SlideRight = composeAnimation(makeSlideRight);
export const SlideLeft = composeAnimation(makeSlideLeft);
export const SlideRightLeft = composeAnimation(makeSlideRightLeft);
