import {
  makeLightIn,
  makeLightOut,
} from './styledLight';

import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
import composeRotation from '../templates/composeRotation';

// Lightspeed animation components
export const LightIn = composeRotation(composeDistance(composeAnimation(makeLightIn), '$motion-light-in-distance'), '$motion-light-in-rotation');
export const LightOut = composeRotation(composeDistance(composeAnimation(makeLightOut), '$motion-light-out-distance'), '$motion-light-out-rotation');
