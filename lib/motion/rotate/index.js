'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateUpRight = exports.RotateUpLeft = exports.RotateRight = exports.RotateLeft = exports.RotateIn = undefined;

var _styledRotate = require('./styledRotate');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeRotation = require('../templates/composeRotation');

var _composeRotation2 = _interopRequireDefault(_composeRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rotating animation components
var RotateIn = exports.RotateIn = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledRotate.makeRotateIn), '$motion-rotate-in-rotation');
var RotateLeft = exports.RotateLeft = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledRotate.makeRotateLeft), '$motion-rotate-left-rotation');
var RotateRight = exports.RotateRight = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledRotate.makeRotateRight), '$motion-rotate-right-rotation');
var RotateUpLeft = exports.RotateUpLeft = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledRotate.makeRotateUpRight), '$motion-rotate-up-left-rotation');
var RotateUpRight = exports.RotateUpRight = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledRotate.makeRotateUpLeft), '$motion-rotate-up-right-rotation');