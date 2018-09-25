import makeOriginal from '../theme/makeOriginal';

export const makeThemeList = [
  makeOriginal,
];

/* eslint-disable */
/**
 * This makeTheme can build from a list of makeTheme also
 * @param list
 * @param theme
 * @returns {*}
 */
export function makeTheme(list, theme) {
  if (!Array.isArray(list)) {
    theme = list;
    list = makeThemeList;
  }
  const all = [].concat(list);
  let t = theme;
  let mt;

  while (mt = all.shift()) {
    t = mt(t);
  }
  return t;
}

const theme = makeTheme();

export default theme;

