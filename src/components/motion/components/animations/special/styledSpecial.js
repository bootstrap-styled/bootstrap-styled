import { keyframes } from 'styled-components';

// Special Animation
let flash;
let rollIn;
let rollOut;
let rubber;
let swing;
let zoom;
let hinge;
let pulse;
let expandUp;
let entrance;
let hatch;

export function makeFlash() {
  if (!flash) {
    flash = keyframes`
      from {
        opacity: 1;
      }
    
      25% {
        opacity: 0;
      }
    
      50% {
        opacity: 1;
      }
    
      75% {
        opacity: 0;
      }
    
      to {
        opacity: 1;
      }
    `;
  }
  return flash;
}

export function makeRollIn(distance) {
  if (!rollIn) {
    rollIn = keyframes`
      from {
        transform: translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -120deg);
        opacity: 0;
      }
    
      to {
        transform: none;
        opacity: 1;
      }
    `;
  }
  return rollIn;
}

export function makeRollOut(distance) {
  if (!rollOut) {
    rollOut = keyframes`
      from {
        opacity: 1;
      }
    
      to {
        transform: translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, 120deg);
        opacity: 0;
      }
    `;
  }
  return rollOut;
}

export function makeRubber() {
  if (!rubber) {
    rubber = keyframes`
      from {
        transform: scale3d(1, 1, 1);
      }
    
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
    
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
    
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
    
      65% {
        transform: scale3d(.95, 1.05, 1);
      }
    
      75% {
        transform: scale3d(1.05, .95, 1);
      }
    
      to {
        transform: scale3d(1, 1, 1);
      }
    `;
  }
  return rubber;
}

export function makeSwing() {
  if (!swing) {
    swing = keyframes`
      20% {
        transform: rotate3d(0, 0, 1, 15deg);
      }
    
      40% {
        transform: rotate3d(0, 0, 1, -10deg);
      }
    
      60% {
        transform: rotate3d(0, 0, 1, 5deg);
      }
    
      80% {
        transform: rotate3d(0, 0, 1, -5deg);
      }
    
      to {
        transform: rotate3d(0, 0, 1, 0deg);
      }
  `;
  }
  return swing;
}

export function makeZoom() {
  if (!zoom) {
    zoom = keyframes`
      from {
        opacity: 0;
        transform: scale3d(.4, .4, .4);
      }
    
      to {
        opacity: 1;
      }
  `;
  }
  return zoom;
}

export function makeHinge() {
  if (!hinge) {
    hinge = keyframes`
      from {
        transform-origin: top-left;
        animation-timing-function: ease-in-out;
        opacity: 1;
      }
    
      20%, 40% {
        transform-origin: top-left;
        transform: rotate(0, 0, 1, 80deg);
        animation-timing-function: ease-in-out;
        opacity: 1;
      }
    
      60%, 80% {
        transform-origin: top-left;
        transform: rotate(0, 0, 1, 20deg);
        animation-timing-function: ease-in-out;
        opacity: 1;
      }
    
      to {
        transform: translate3d(0, 700px, 0);
        opacity: 0;
      }
    `;
  }
  return hinge;
}

export function makePulse() {
  if (!pulse) {
    pulse = keyframes`
      from {
        transform: scale3d(1, 1, 1);
      }
    
      50% {
        transform: scale3d(1.4, 1.4, 1.4);
      }
    
      to {
        transform: scale3d(1, 1, 1);
      }
    `;
  }
  return pulse;
}

export function makeExpandUp() {
  if (!expandUp) {
    expandUp = keyframes`
      0% {
        transform: translateY(100%) scale(0.6) scaleY(0.5);
      }
    
      60%{
        transform: translateY(-7%) scaleY(1.12);
      }
    
      75%{
        transform: translateY(3%);
      }
    
      100% {
        transform: translateY(0%) scale(1) scaleY(1);
      }
    `;
  }
  return expandUp;
}

export function makeEntrance() {
  if (!entrance) {
    entrance = keyframes`
      0% {
        transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);
        opacity: 0.1;
      }
  
      30% {
        transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);
        opacity: 1;
      }
  
      45% {
        transform: scale(0.98);
        opacity: 1;
      }
  
      60% {
        transform: scale(1.01);
        opacity: 1;
      }
  
      75% {
        transform: scale(0.99);
        opacity: 1;
      }
  
      90% {
        transform: scale(1.01);
        opacity: 1;
      }
  
      100% {
        transform: scale(1);
        opacity: 1;
      }
    `;
  }
  return entrance;
}

export function makeHatch() {
  if (!hatch) {
    hatch = keyframes`
      0% {
        transform: scaleY(0.6);
      }
  
      20% {
        transform: rotate(-2deg) scaleY(1.05);
      }
  
      35% {
        transform: rotate(2deg) scaleY(1);
      }
  
      50% {
        transform: rotate(-2deg);
      }
  
      65% {
        transform: rotate(1deg);
      }
  
      80% {
        transform: rotate(-1deg);
      }
  
      100% {
        transform: none;
      }
    `;
  }
  return hatch;
}
