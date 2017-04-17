import { keyframes } from 'styled-components';

let lightIn;
let lightOut;

export function makeLightIn(distance) {
  if (!lightIn) {
    lightIn = keyframes`
      from {
        transform: translate3d(${distance}, 0, 0) skew(-30deg);
        opacity: 0;
      }
  
      40% {
        transform: skew(20deg);
        opacity: 1;
      }
  
      80% {
        transform: skew(-5deg);
        opacity: 1;
      }
  
      to {
        transform: none;
        opacity: 1;
      }
    `;
  }
  return lightIn;
}

export function makeLightOut(distance) {
  if (!lightOut) {
    lightOut = keyframes`
      from {
        opacity: 1;
      }
  
      to {
        transform: translate3d(-${distance}, 0, 0) skew(30deg);
        opacity: 0;
      }
  `;
  }
  return lightIn;
}
