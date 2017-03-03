import { srOnly, srOnlyFocusable } from '../mixins/screen-reader';

export function getScreenReadersUtilities() {
  return '\n    .sr-only {\n      ' + srOnly() + '\n    }\n    \n    .sr-only-focusable {\n      ' + srOnlyFocusable() + '\n    }\n  ';
}

export default {
  getScreenReadersUtilities: getScreenReadersUtilities
};