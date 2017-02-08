import color from 'color';

export function bgVariant(selector, bgColor) {
  return '\n    ' + selector + ' {\n      background: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      background-color: ' + color(bgColor).darken(0.1).toString() + ';\n    }\n  ';
}

export default {
  bgVariant: bgVariant
};