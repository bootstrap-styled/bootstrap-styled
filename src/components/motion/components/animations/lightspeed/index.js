import {
  makeLightIn,
  makeLightOut,
} from './styledLight';

import composeAnimation from '../../../templates/composeAnimation';

// Lightspeed animation components
export const LightIn = composeAnimation(makeLightIn);
export const LightOut = composeAnimation(makeLightOut);
