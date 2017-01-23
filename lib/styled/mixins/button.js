import color from 'color';
import { borderRadius } from './border-radius';
import { hover } from './hover';
import { boxShadow } from './box-shadow';

export var defaultProps = {
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$enable-shadows': false,
  '$enable-rounded': true
};

export function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];

  var activeBackground = color(background).darken(0.1).toString();
  var activeBorder = color(border).darken(0.12).toString();

  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + boxShadow(enableShadows, btnActiveBoxShadow) + ';\n  \n    ' + hover('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n          border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n          border-color: ' + activeBorder + ';\n    }\n  \n    &:active,\n    &.active,\n    .open > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n          border-color: ' + activeBorder + ';\n      /* Remove the gradient for the pressed/active state */\n      background-image: none;\n    ' + boxShadow(enableShadows, btnActiveBoxShadow) + ';\n  \n      &:hover,\n      &:focus,\n      &.focus {\n        color: ' + buttonColor + ';\n        background-color: ' + color(background).darken(0.17).toString() + ';\n            border-color: ' + color(border).darken(0.25).toString() + ';\n      }\n    }\n  \n    &.disabled,\n    &:disabled {\n      &:focus,\n      &.focus {\n        background-color: ' + background + ';\n            border-color: ' + border + ';\n      }\n      ' + hover('\n        background-color: ' + background + ';\n            border-color: ' + border + ';\n      ') + '\n    }\n  ';
}

export function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';

  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + hover('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n          border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n          border-color: ' + buttonColor + ';\n    }\n  \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n          border-color: ' + buttonColor + ';\n  \n      &:hover,\n      &:focus,\n      &.focus {\n        color: ' + buttonColorHover + ';\n        background-color: ' + color(buttonColor).darken(0.17).toString() + ';\n            border-color: ' + color(buttonColor).darken(0.25).toString() + ';\n      }\n    }\n  \n    &.disabled,\n    &:disabled {\n      &:focus,\n      &.focus {\n        border-color: ' + color(buttonColor).lighten(0.2).toString() + ';\n      }\n      ' + hover('\n        border-color: ' + color(buttonColor).lighten(0.2).toString() + ';\n      ') + '\n    }\n  ';
}

// Button sizes
export function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];

  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + borderRadius(enableRounded, btnBorderRadius) + '\n  ';
}

export default {
  defaultProps: defaultProps,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize
};