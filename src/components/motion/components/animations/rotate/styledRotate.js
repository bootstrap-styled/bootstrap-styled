import { keyframes } from 'styled-components';

let rotateIn;
let rotateLeft;
let rotateRight;
let rotateUpLeft;
let rotateUpRight;

export function makeRotateIn() {
  if (!rotateIn) {
    rotateIn = keyframes`
      from {
        transform-origin: center;
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0; 
      }
  
      to {
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rotateIn;
}

export function makeRotateLeft() {
  if (!rotateLeft) {
    rotateLeft = keyframes`
      from {
        transform-origin: left bottom;
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
  
      to {
        transform-origin: left bottom;
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rotateLeft;
}

export function makeRotateRight() {
  if (!rotateRight) {
    rotateRight = keyframes`
      from {
        transform-origin: right bottom;
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }
    
      to {
        transform-origin: right bottom;
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rotateRight;
}

export function makeRotateUpLeft() {
  if (!rotateUpLeft) {
    rotateUpLeft = keyframes`
      from {
        transform-origin: left bottom;
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
      }
  
      to {
        transform-origin: left bottom;
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rotateUpLeft;
}

export function makeRotateUpRight() {
  if (!rotateUpRight) {
    rotateUpRight = keyframes`
      from {
        transform-origin: right bottom;
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
  
      to {
        transform-origin: right bottom;
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rotateUpRight;
}
