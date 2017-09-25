'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BounceRight = exports.BounceLeft = exports.BounceUp = exports.BounceDown = exports.Bounce = undefined;

var _styledBounce = require('./styledBounce');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

var _composeAmplification = require('../templates/composeAmplification');

var _composeAmplification2 = _interopRequireDefault(_composeAmplification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bounce animation components
var Bounce = exports.Bounce = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledBounce.makeBounce), '$motion-bounce-amplification');
var BounceDown = exports.BounceDown = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledBounce.makeBounceDown), '$motion-bounce-down-distance');
var BounceUp = exports.BounceUp = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledBounce.makeBounceUp), '$motion-bounce-up-distance');
var BounceLeft = exports.BounceLeft = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledBounce.makeBounceLeft), '$motion-bounce-left-distance');
var BounceRight = exports.BounceRight = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledBounce.makeBounceRight), '$motion-bounce-right-distance');