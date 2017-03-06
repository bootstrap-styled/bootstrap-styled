"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srOnly = srOnly;
exports.srOnlyFocusable = srOnlyFocusable;
// Only display content to screen readers
//
// See: http://a11yproject.com/posts/how-to-hide-content

function srOnly() {
  return "\n    position: absolute !important;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  ";
}

// Use in conjunction with .sr-only to only display content when it's focused.
//
// Useful for 'Skip to main content' links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
//
// Credit: HTML5 Boilerplate

function srOnlyFocusable() {
  return "\n    &:active,\n    &:focus {\n      position: static;\n      width: auto;\n      height: auto;\n      margin: 0;\n      overflow: visible;\n      clip: auto;\n    }\n  ";
}

exports.default = {
  srOnly: srOnly,
  srOnlyFocusable: srOnlyFocusable
};