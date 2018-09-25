import makeOriginal from './makeOriginal';
/**
 * Extends of Bootstrap original
 *
 * You can add new bootstrap-styled variable here
 * @param original
 * @param userTheme
 */
export default function makeExtend(original = makeOriginal(), userTheme = {}) {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  const v = original;
  const u = userTheme;

  // Label
  v['$label-margin-bottom'] = u['$label-margin-bottom'] || '.5rem';


  return {
    ...u,
    ...v,
  };
}
