import bsTheme from 'theme';

/**
 * getRebootUtils
 *
 * Return the reboot using mixins :global injection
 */
export function getRebootUtils(
  fontFamilyBase = bsTheme['$font-family-base'],
  fontSizeBase = bsTheme['$font-size-base'],
  fontWeightBase = bsTheme['$font-weight-base'],
  lineHeightBase = bsTheme['$line-height-base'],
  bodyColor = bsTheme['$body-color'],
  bodyBg = bsTheme['$body-bg'],
) {
  return `
    :global(html) {
      ${html()}
    }
    :global(@-ms-viewport) {
      ${ie10FixViewport()}
    }
    :global(*, *::before, *::after) {
      ${boxSizing()}
    }
    :global(body) {
      ${body(
        fontFamilyBase,
        fontSizeBase,
        fontWeightBase,
        lineHeightBase,
        bodyColor,
        bodyBg,
      )}
    }
    :global([tabindex="-1"]:focus) {
      ${tabIndex()}
    }
    :global(svg:not(:root)) {
      ${svg()}
    }
    :global([hidden]) {
      ${ie10FixHidden()}
    }
    :global(::-webkit-file-upload-button) {
      ${webkitFileUploadButton()}
    }
  `;
}

/**
 * getRebootUtility
 *
 * This utility MUST return only things that can ONLY be injected in global styles
 */
export function getGlobalStyles(
  fontFamilyBase = bsTheme['$font-family-base'],
  fontSizeBase = bsTheme['$font-size-base'],
  fontWeightBase = bsTheme['$font-weight-base'],
  lineHeightBase = bsTheme['$line-height-base'],
  bodyColor = bsTheme['$body-color'],
  bodyBg = bsTheme['$body-bg'],
) {
  return `
    html {
      ${html()}
    }
    *,
    *::before,
    *::after {
      ${boxSizing()}
    }
    @-ms-viewport { 
      ${ie10FixViewport()} 
    }
    body {
      ${body(
        fontFamilyBase,
        fontSizeBase,
        fontWeightBase,
        lineHeightBase,
        bodyColor,
        bodyBg,
      )} 
    }
    [tabindex="-1"]:focus {
      ${tabIndex()}
    }
    svg:not(:root) {
      ${svg()}
    }
    [hidden] {
      ${ie10FixHidden()}
    }
    ::-webkit-file-upload-button {
      ${webkitFileUploadButton()}
    }
  `;
}

// Document
//
// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
// 2. Change the default font family in all browsers.
// 3. Correct the line height in all browsers.
// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.
export function html() {
  return `
    box-sizing: border-box;
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  `;
}

export function boxSizing() {
  return `
    box-sizing: inherit;
  `;
}

// IE10+ doesn't honor `<meta name="viewport">` in some cases.
export function ie10FixViewport() {
  return `
    width: device-width;
  `;
}

// Body
//
// 1. Remove the margin in all browsers.
// 2. As a best practice, apply a default `background-color`.
export function body(
  fontFamilyBase = bsTheme['$font-family-base'],
  fontSizeBase = bsTheme['$font-size-base'],
  fontWeightBase = bsTheme['$font-weight-base'],
  lineHeightBase = bsTheme['$line-height-base'],
  bodyColor = bsTheme['$body-color'],
  bodyBg = bsTheme['$body-bg'],
) {
  return `
    margin: 0;
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase};
    font-weight: ${fontWeightBase};
    line-height: ${lineHeightBase};
    color: ${bodyColor};
    background-color: ${bodyBg};
  `;
}

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
export function tabIndex() {
  return `
    outline: none !important;
  `;
}

// Hide the overflow in IE
export function svg() {
  return `
    overflow: hidden;
  `;
}

// Always hide an element with the `hidden` HTML attribute (from PureCSS).
// Needed for proper display in IE 10-.
export function ie10FixHidden() {
  return `
    display: none !important;
  `;
}

export function webkitFileUploadButton() {
  return `
    font: inherit;
    -webkit-appearance: button;
  `;
}

export default {
  html,
  boxSizing,
  ie10FixViewport,
  body,
  tabIndex,
  svg,
  ie10FixHidden,
  getGlobalStyles,
  getRebootUtils,
  webkitFileUploadButton,
};
