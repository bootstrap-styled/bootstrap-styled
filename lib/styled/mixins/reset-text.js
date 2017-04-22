'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetText = resetText;
var defaultProps = exports.defaultProps = {
  '$font-family-base': true,
  '$font-weight-normal': true,
  '$line-height-base': true
};

function resetText() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$font-family-base'];
  var fontWeightNormal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$font-weight-normal'];
  var lineHeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$line-height-base'];

  return '\n    font-family: ' + fontFamilyBase + ';\n    /* We deliberately do NOT reset font-size or word-wrap. */\n    font-style: normal;\n    font-weight: ' + fontWeightNormal + ';\n    letter-spacing: normal;\n    line-break: auto;\n    line-height: ' + lineHeightBase + ';\n    text-align: left; /* Fallback for where \'start\' is not supported */\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    white-space: normal;\n    word-break: normal;\n    word-spacing: normal;\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  resetText: resetText
};