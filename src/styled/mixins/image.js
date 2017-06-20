// Image Mixins
// - Responsive image
// - Retina image


// Responsive image
//
// Keep images from scaling beyond the width of their parents.

export function imgFluid() {
  return `
    /* Part 1: Set a maximum relative to the parent */
    max-width: 100%;
    /* Part 2: Override the height to auto, otherwise images will be stretched */
    /* when setting a width and height attribute on the img element. */
    height: auto;
  `;
}


// Retina image
//
// Short retina mixin for setting background-image and -size.
export function imgRetina(file1x, file2x, width1x, height1x) {
  return `
    background-image: url(${file1x});

    /* Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio, */
    /* but doesn't convert dppx=>dpi. */
    /* There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard. */
    /* Compatibility info: http://caniuse.com/#feat=css-media-resolution */
    @media only screen and (min-resolution: 192dpi), /* IE9-11 don't support dppx */
      only screen and (min-resolution: 2dppx) { /* Standardized */
        background-image: url(${file2x});
        background-size: ${width1x} ${height1x};
    }
  `;
}

export default {
  imgFluid,
  imgRetina,
};
