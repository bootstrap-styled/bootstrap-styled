/**
 * Helper used to keep false values provided by userTheme
 * @param userValue
 * @param defaultValue
 * @returns {*}
 */
export function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}
