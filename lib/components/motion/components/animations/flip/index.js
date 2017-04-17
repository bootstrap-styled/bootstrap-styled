'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipY = exports.FlipX = exports.Flip = undefined;

var _styledFlip = require('./styledFlip');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Flip animation components
var Flip = exports.Flip = (0, _composeAnimation2.default)(_styledFlip.makeFlip);
var FlipX = exports.FlipX = (0, _composeAnimation2.default)(_styledFlip.makeFlipX);
var FlipY = exports.FlipY = (0, _composeAnimation2.default)(_styledFlip.makeFlipY);