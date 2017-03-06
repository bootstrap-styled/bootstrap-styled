'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizingUtilities = getSizingUtilities;
var defaultProps = exports.defaultProps = {
  $sizes: {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  }
};

function getSizingUtilities() {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$sizes'];
  // eslint-disable-line dot-notation
  var abbrev = {
    width: 'w',
    height: 'h'
  };

  var sizingList = [];
  Object.keys(abbrev).forEach(function (cssProp) {
    Object.keys(sizes).forEach(function (size) {
      sizingList.push('\n        .' + abbrev[cssProp] + '-' + size + ' { ' + cssProp + ': ' + sizes[size] + ' !important; }\n      ');
    });
  });

  return '\n    ' + sizingList.join('\n') + '\n    .mw-100 { max-width: 100% !important; }\n    .mh-100 { max-height: 100% !important; }\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  getSizingUtilities: getSizingUtilities
};