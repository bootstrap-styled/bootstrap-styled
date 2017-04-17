// Filter animation

import { keyframes } from 'styled-components';

let blur;
let brightness;
let contrast;
let grayscale;
let hueRotate;
let invert;
let opacity;
let saturate;
let sepia;

export function makeBlur() {
  if (!blur) {
    blur = keyframes`
      0% {
        filter: blur(0px);
      }

      100% {
        filter: blur(5px);
      }
    `;
  }
  return blur;
}

export function makeOpacity() {
  if (!opacity) {
    opacity = keyframes`
      0% { 
        filter: opacity(0%);
      }
      
      100% { 
        filter: opacity(100%);
      }
    `;
  }
  return opacity;
}

export function makeContrast() {
  if (!contrast) {
    contrast = keyframes`
      0% { 
        filter: contrast(0%);
      }
      
      100% { 
        filter: contrast(100%);
      }
    `;
  }
  return contrast;
}

export function makeBrightness() {
  if (!brightness) {
    brightness = keyframes`
      0% { 
        filter: brightness(0%);
      }
      
      100% { 
        filter: brightness(100%);
      }
    `;
  }
  return brightness;
}

export function makeGrayscale() {
  if (!grayscale) {
    grayscale = keyframes`
      0% { 
        filter: grayscale(0%);
      }
      
      100% { 
        filter: grayscale(100%);
      }
    `;
  }
  return grayscale;
}

export function makeHueRotate() {
  if (!hueRotate) {
    hueRotate = keyframes`
      0% { 
        filter: hue-rotate(0deg);
      }
      
      100% { 
        filter: hue-rotate(360deg);
      }
    `;
  }
  return hueRotate;
}

export function makeInvert() {
  if (!invert) {
    invert = keyframes`
      0% { 
        filter: invert(0%);
      }
      
      100% { 
        filter: invert(100%);
      }
    `;
  }
  return invert;
}

export function makeSaturate() {
  if (!saturate) {
    saturate = keyframes`
      0% { 
        filter: saturate(0%);
      }
      
      100% { 
        filter: saturate(8%);
      }
    `;
  }
  return saturate;
}

export function makeSepia() {
  if (!sepia) {
    sepia = keyframes`
      0% { 
        filter: sepia(0%);
      }
      
      100% { 
        filter: sepia(100%);
      }
    `;
  }
  return sepia;
}
