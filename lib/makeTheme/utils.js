"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowFalseValue = allowFalseValue;
/**
 * Helper used to keep false values provided by userTheme
 * @param userValue
 * @param defaultValue
 * @returns {*}
 */
function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}