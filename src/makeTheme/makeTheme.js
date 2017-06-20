import makeOriginal from './makeOriginal';
import makeExtend from './makeExtend';

/**
 * makeTheme is used to extend our bootstrap styled
 * @param userTheme
 * @returns {object} theme or extended theme
 */
export default function makeTheme(userTheme = {}) {
  return makeExtend(makeOriginal(userTheme), userTheme);
}
