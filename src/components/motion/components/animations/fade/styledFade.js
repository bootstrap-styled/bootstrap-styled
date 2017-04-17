import { keyframes } from 'styled-components';

let fadeIn;
let fadeLeft;
let fadeRight;
let fadeDown;
let fadeUp;

export function makeFadeIn() {
  if (!fadeIn) {
    fadeIn = keyframes`
      0% {
        opacity: 0;
      }
  
      100% {
        opacity: 1;
      }
    `;
  }
  return fadeIn;
}

export function makeFadeLeft(distance) {
  if (!fadeLeft) {
    fadeLeft = keyframes`
      from {
        opacity: 0;
        transform: translate3d(-${distance}, 0, 0);
      }
  
      to {
        opacity: 1;
        transform: none;
      }
    `;
  }
  return fadeLeft;
}

export function makeFadeRight(distance) {
  if (!fadeRight) {
    fadeRight = keyframes`
      from {
        opacity: 0;
        transform: translate3d(${distance}, 0, 0);
      }
  
      to {
        opacity: 1;
        transform: none;
      }
    `;
  }
  return fadeRight;
}

export function makeFadeDown(distance) {
  if (!fadeDown) {
    fadeDown = keyframes`
      from {
        opacity: 0;
        transform: translate3d(0, -${distance}, 0);
      }
  
      to {
        opacity: 1;
        transform: none;
      }
    `;
  }
  return fadeDown;
}

export function makeFadeUp(distance) {
  if (!fadeUp) {
    fadeUp = keyframes`
      from {
        opacity: 0;
        transform: translate3d(0, ${distance}, 0);
      }
  
      to {
        opacity: 1;
        transform: none;
      }
    `;
  }
  return fadeUp;
}
