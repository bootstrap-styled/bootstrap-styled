import { srOnly, srOnlyFocusable } from '../mixins/screen-reader';

export function getScreenReadersUtilities() {
  return `
    .sr-only {
      ${srOnly()}
    }
    
    .sr-only-focusable {
      ${srOnlyFocusable()}
    }
  `;
}

export default {
  getScreenReadersUtilities,
};
