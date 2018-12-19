import deepMerge from 'lodash.merge';
/**
 * Convert a theme or a scopedTheme into a makeTheme.
 * @param theme
 *
 *
 * @example
 * const darkTheme = originalMakeTheme({
 *    '$body-bg': 'dark',
 *    '$body-color': 'white',
 *    '$btn-primary-bg': 'red',
 * });
 *
 * const darkMakeTheme = toMakeTheme(darkTheme);
 *
 * Now you can create a new theme starting from the personalized theme as default theme rather than the default original theme.
 * This allows others to build from your theme as a starting point and makes it a lot easier to share and make new themes.
 *
 * const anotherDarkTheme = darkMakeTheme({
 *     '$body-bg': '#121212'
 * });
 *
 * The method also takes care of scopedTheme so that you don't have to worry about a thing.
 *
 * const loginFormTheme = makeScopedTheme('loginForm', {
 *    '$body-bg': 'dark',
 *    '$body-color': 'white',
 *    '$btn-primary-bg': 'red',
 * })
 *
 * const loginFormMakeTheme = toMakeTheme(loginFormTheme);
 *
 * const anotherLoginFormTheme = loginFormMakeTheme({
 *     loginForm: {
 *        '$body-bg': '#121212'
 *     }
 * });
 */
export const toMakeTheme = (theme) => (userTheme) => { // eslint-disable-line arrow-body-style
  return deepMerge({}, theme, userTheme);
};

function makeThemeFromList(list, theme) {
  const all = [].concat(list);
  let t = theme;
  let mt;
  while (mt = all.pop()) { // eslint-disable-line
    t = mt(t);
  }
  return t;
}

/**
 * Create a makeTheme using a list of makeThemes.
 * @param list
 * @returns {function(*=): *}
 */
export default function createMakeTheme(list) {
  return (theme) => makeThemeFromList(list, theme);
}

/**
* Creates a scoped makeTheme. Used for creating components or modules with their own variables.
* @param scopeName string
* @param userTheme
*
**/

export function makeScopedTheme(scopeName, userTheme = { [scopeName]: {} }) {
  if (scopeName === undefined || typeof scopeName !== 'string') return console.warn('You may have forgotten to set the scope name in the makeScopedTheme function.'); // eslint-disable-line no-console
  const newTheme = { [scopeName]: {} };
  const v = newTheme[scopeName];
  const u = userTheme[scopeName] || {};

  Object.keys(userTheme).forEach((variable) => {
    v[variable] = u[variable] || userTheme[variable];
  });

  return { [scopeName]: { ...userTheme, ...v } };
}
