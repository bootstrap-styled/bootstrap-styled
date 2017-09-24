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
  makeDropshadow,
} from './styledFilter';

import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
import composeRotation from '../templates/composeRotation';
import composeDistance from '../templates/composeDistance';

export const Blur = composeDistance(composeAnimation(makeBlur), '$motion-blur-distance');
export const Contrast = composeAmplification(composeAnimation(makeContrast), '$motion-contrast-amplification');
export const Brightness = composeAmplification(composeAnimation(makeBrightness), '$motion-brightness-amplification');
export const Grayscale = composeAmplification(composeAnimation(makeGrayscale), '$motion-grayscale-amplification');
export const HueRotate = composeRotation(composeAnimation(makeHueRotate), '$motion-hue-rotate-rotation');
export const Invert = composeAmplification(composeAnimation(makeInvert), '$motion-invert-amplification');
export const Opacity = composeAmplification(composeAnimation(makeOpacity), '$motion-opacity-amplification');
export const Saturate = composeAmplification(composeAnimation(makeSaturate), '$motion-saturate-amplification');
export const Sepia = composeAmplification(composeAnimation(makeSepia), '$motion-sepia-amplification');
export const Dropshadow = composeAmplification(composeAnimation(makeDropshadow), '$motion-drop-shadow-amplification');
