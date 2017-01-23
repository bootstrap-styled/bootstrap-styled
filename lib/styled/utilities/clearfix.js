import { clearfix } from '../mixins/clearfix';

export function getClearfixUtilities() {
  return '\n   ' + getClearfix() + '\n  ';
}

export function getClearfix() {
  return '\n    .clearfix {\n      ' + clearfix() + ';\n    }\n  ';
}

export default {
  getClearfixUtilities: getClearfixUtilities,
  getClearfix: getClearfix
};