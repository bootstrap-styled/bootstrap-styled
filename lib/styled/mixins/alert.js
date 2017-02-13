import color from 'color';

export function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + color(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + color(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}

export default {
  alertVariant: alertVariant
};