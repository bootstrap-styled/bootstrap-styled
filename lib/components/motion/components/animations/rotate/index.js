'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateUpRight = exports.RotateUpLeft = exports.RotateRight = exports.RotateLeft = exports.RotateIn = undefined;

var _styledRotate = require('./styledRotate');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rotating animation components
var RotateIn = exports.RotateIn = (0, _composeAnimation2.default)(_styledRotate.makeRotateIn);
var RotateLeft = exports.RotateLeft = (0, _composeAnimation2.default)(_styledRotate.makeRotateLeft);
var RotateRight = exports.RotateRight = (0, _composeAnimation2.default)(_styledRotate.makeRotateRight);
var RotateUpLeft = exports.RotateUpLeft = (0, _composeAnimation2.default)(_styledRotate.makeRotateUpRight);
var RotateUpRight = exports.RotateUpRight = (0, _composeAnimation2.default)(_styledRotate.makeRotateUpLeft);