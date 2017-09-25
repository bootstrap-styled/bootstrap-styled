'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeTheme;

var _makeOriginal = require('./makeOriginal');

var _makeOriginal2 = _interopRequireDefault(_makeOriginal);

var _makeExtend = require('./makeExtend');

var _makeExtend2 = _interopRequireDefault(_makeExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * makeTheme is used to extend our bootstrap styled
 * @param userTheme
 * @returns {object} theme or extended theme
 */
function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _makeExtend2.default)((0, _makeOriginal2.default)(userTheme), userTheme);
}
module.exports = exports['default'];