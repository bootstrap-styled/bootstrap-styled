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

import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
import composeDistance from '../templates/composeDistance';

export const Flash = composeAnimation(makeFlash);
export const RollOut = composeDistance(composeAmplification(composeAnimation(makeRollOut), '$motion-roll-out-amplification'), '$motion-roll-out-distance');
export const RollIn = composeDistance(composeAmplification(composeAnimation(makeRollIn), '$motion-roll-in-amplification'), '$motion-roll-in-distance');
export const Rubber = composeAmplification(composeAnimation(makeRubber), '$motion-rubber-amplification');
export const Swing = composeAmplification(composeAnimation(makeSwing), '$motion-swing-amplification');
export const Zoom = composeAmplification(composeAnimation(makeZoom), '$motion-zoom-amplification');
export const Hinge = composeAmplification(composeAnimation(makeHinge), '$motion-hinge-amplification');
export const Pulse = composeAmplification(composeAnimation(makePulse), '$motion-pulse-amplification');
export const ExpandUp = composeAmplification(composeAnimation(makeExpandUp), '$motion-expand-up-amplification');
export const Entrance = composeAmplification(composeAnimation(makeEntrance), '$motion-entrance-amplification');
export const Hatch = composeAmplification(composeAnimation(makeHatch), '$motion-hatch-amplification');
