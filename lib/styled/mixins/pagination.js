import { borderLeftRadius, borderRightRadius } from './border-radius';

export var defaultProps = {
  '$enable-rounded': true
};
// Pagination
/**
 * Wrapper for paginationSizeBootstrap
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
export function paginationSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadius = arguments[4];

  return paginationSizeBootstrap(enableRounded, paddingY, paddingX, fontSize, null, borderRadius);
}

/**
 * This is the original function, however, lineHeight is never used (only with null values)
 * we wrap and keep it for history
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
export function paginationSizeBootstrap() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var lineHeight = arguments[4];
  var borderRadius = arguments[5];

  return '\n    .page-link {\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          ' + borderLeftRadius(enableRounded, borderRadius) + '\n        }\n      }\n      &:last-child {\n        .page-link {\n          ' + borderRightRadius(enableRounded, borderRadius) + '\n        }\n      }\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  paginationSize: paginationSize,
  paginationSizeBootstrap: paginationSizeBootstrap
};