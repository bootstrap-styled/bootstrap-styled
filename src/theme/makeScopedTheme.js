import { makeTheme } from './makeTheme';

const makeScopedTheme = (userTheme = { [scopeName]: {} }, scopeName, override = true) => {
  if (scopeName === undefined) return console.warn('You may have forgotten to set the scope name in the makeScopedTheme function.');
  const u = userTheme[scopeName] || {};
  const newTheme = { [scopeName]: {} };
  const v = newTheme[scopeName];

  Object.keys(userTheme).forEach((variable) => {
    v[variable] = u[variable] || userTheme[variable];
  });

  /**
  * If you wish to re-use a variable of bs but used with a different colour then the one used in the rest of the site,
  * you can keep the original variable as is and the new one with your own value.
  *
  * ex: '$font-size-h2' can be set in the scope as a new value
  *
  * {
  *     '$font-size-h2': 15px,
  *     scopeTheme: {
  *         '$font-size-h2': 30px,
  *     }
  * }
  *
  * or it can be overriden
  *
  * {
  *     '$font-size-h2': 30px,
  *     scopeTheme: {
  *         '$font-size-h2': 30px,
  *     }
  * }
  *
  **/

  const result = override ? { ...newTheme, ...userTheme } : { ...newTheme };
  return makeTheme({ ...result });
};

export default makeScopedTheme;
