"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgFluid = imgFluid;
exports.imgRetina = imgRetina;
// Image Mixins
// - Responsive image
// - Retina image


// Responsive image
//
// Keep images from scaling beyond the width of their parents.

function imgFluid() {
  return "\n    /* Part 1: Set a maximum relative to the parent */\n    max-width: 100%;\n    /* Part 2: Override the height to auto, otherwise images will be stretched */\n    /* when setting a width and height attribute on the img element. */\n    height: auto;\n  ";
}

// Retina image
//
// Short retina mixin for setting background-image and -size.
function imgRetina(file1x, file2x, width1x, height1x) {
  return "\n    background-image: url(" + file1x + ");\n\n    /* Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio, */\n    /* but doesn't convert dppx=>dpi. */\n    /* There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard. */\n    /* Compatibility info: http://caniuse.com/#feat=css-media-resolution */\n    @media only screen and (min-resolution: 192dpi), /* IE9-11 don't support dppx */\n      only screen and (min-resolution: 2dppx) { /* Standardized */\n        background-image: url(" + file2x + ");\n        background-size: " + width1x + " " + height1x + ";\n    }\n  ";
}

exports.default = {
  imgFluid: imgFluid,
  imgRetina: imgRetina
};