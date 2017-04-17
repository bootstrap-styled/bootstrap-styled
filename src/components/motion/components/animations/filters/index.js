import {
  makeBlur,
  makeContrast,
  makeBrightness,
  makeGrayscale,
  makeHueRotate,
  makeInvert,
  makeOpacity,
  makeSaturate,
  makeSepia,
} from './styledFilter';

import composeAnimation from '../../../templates/composeAnimation';

export const Blur = composeAnimation(makeBlur);
export const Contrast = composeAnimation(makeContrast);
export const Brightness = composeAnimation(makeBrightness);
export const Grayscale = composeAnimation(makeGrayscale);
export const HueRotate = composeAnimation(makeHueRotate);
export const Invert = composeAnimation(makeInvert);
export const Opacity = composeAnimation(makeOpacity);
export const Saturate = composeAnimation(makeSaturate);
export const Sepia = composeAnimation(makeSepia);

