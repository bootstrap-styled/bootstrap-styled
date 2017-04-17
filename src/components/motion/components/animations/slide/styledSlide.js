import { keyframes } from 'styled-components';

let slideDown;
let slideUp;
let slideLeft;
let slideRight;
let slideRightLeft;

export function makeSlideDown(distance) {
  if (!slideDown) {
    slideDown = keyframes`
      from {
        transform: translate3d(0, -${distance}, 0);
      }
  
      to {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
  return slideDown;
}

export function makeSlideUp(distance) {
  if (!slideUp) {
    slideUp = keyframes`
      from {
        transform: translate3d(0, ${distance}, 0);
      }
  
      to {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
  return slideUp;
}

export function makeSlideLeft(distance) {
  if (!slideLeft) {
    slideLeft = keyframes`
      from {
        transform: translate3d(-${distance}, 0, 0);
      }
  
      to {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
  return slideLeft;
}

export function makeSlideRight(distance) {
  if (!slideRight) {
    slideRight = keyframes`
      from {
        transform: translate3d(${distance}, 0, 0);
      }
  
      to {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
  return slideRight;
}

export function makeSlideRightLeft(distance) {
  if (!slideRightLeft) {
    slideRightLeft = keyframes`
      from {
        transform: translate3d(0, 0, 0);
      }
      
      50% {
        transform: translate3d(${distance}, 0, 0);
      }
  
      to {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
  return slideRightLeft;
}
