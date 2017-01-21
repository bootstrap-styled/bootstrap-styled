import color from 'color';

export function bgVariant(parent, bgColor) {
  return '\n    &' + parent + ' {\n      background: ' + bgColor + ' !important;\n    }\n    a' + parent + ' {\n      background-color: ' + color(bgColor).darken(0.1).toString() + ';\n    }\n  ';
}

export default {
  bgVariant: bgVariant
};