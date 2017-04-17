'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BounceRight = exports.BounceLeft = exports.BounceUp = exports.BounceDown = exports.Bounce = undefined;

var _styledBounce = require('./styledBounce');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bounce animation components
var Bounce = exports.Bounce = (0, _composeAnimation2.default)(_styledBounce.makeBounce);
var BounceDown = exports.BounceDown = (0, _composeAnimation2.default)(_styledBounce.makeBounceDown);
var BounceUp = exports.BounceUp = (0, _composeAnimation2.default)(_styledBounce.makeBounceUp);
var BounceLeft = exports.BounceLeft = (0, _composeAnimation2.default)(_styledBounce.makeBounceLeft);
var BounceRight = exports.BounceRight = (0, _composeAnimation2.default)(_styledBounce.makeBounceRight);