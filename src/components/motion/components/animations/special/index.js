import {
  makeFlash,
  makeRollOut,
  makeRollIn,
  makeRubber,
  makeSwing,
  makeZoom,
  makeHinge,
  makePulse,
  makeExpandUp,
  makeEntrance,
  makeHatch,
} from './styledSpecial';

import composeAnimation from '../../../templates/composeAnimation';

export const Flash = composeAnimation(makeFlash);
export const RollOut = composeAnimation(makeRollOut);
export const RollIn = composeAnimation(makeRollIn);
export const Rubber = composeAnimation(makeRubber);
export const Swing = composeAnimation(makeSwing);
export const Zoom = composeAnimation(makeZoom);
export const Hinge = composeAnimation(makeHinge);
export const Pulse = composeAnimation(makePulse);
export const ExpandUp = composeAnimation(makeExpandUp);
export const Entrance = composeAnimation(makeEntrance);
export const Hatch = composeAnimation(makeHatch);
