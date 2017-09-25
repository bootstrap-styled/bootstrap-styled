'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipY = exports.FlipX = exports.Flip = undefined;

var _styledFlip = require('./styledFlip');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composePerspective = require('../templates/composePerspective');

var _composePerspective2 = _interopRequireDefault(_composePerspective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Flip animation components
var Flip = exports.Flip = (0, _composePerspective2.default)((0, _composeAnimation2.default)(_styledFlip.makeFlip), '$motion-flip-perspective');
var FlipX = exports.FlipX = (0, _composePerspective2.default)((0, _composeAnimation2.default)(_styledFlip.makeFlipX), '$motion-flip-perspective');
var FlipY = exports.FlipY = (0, _composePerspective2.default)((0, _composeAnimation2.default)(_styledFlip.makeFlipY), '$motion-flip-perspective');