import { clearfix } from '../mixins/clearfix';

export function getClearfixUtilities() {
  return `
   ${getClearfix()}
  `;
}

export function getClearfix() {
  return `
    .clearfix {
      ${clearfix()};
    }
  `;
}

export default {
  getClearfixUtilities,
  getClearfix,
};
