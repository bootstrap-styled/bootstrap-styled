'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeInRight = exports.FadeInLeft = exports.FadeInUp = exports.FadeInDown = exports.FadeIn = undefined;

var _styledFade = require('./styledFade');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fade animation components
var FadeIn = exports.FadeIn = (0, _composeAnimation2.default)(_styledFade.makeFadeIn);
var FadeInDown = exports.FadeInDown = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledFade.makeFadeDown), '$motion-fade-in-down-distance');
var FadeInUp = exports.FadeInUp = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledFade.makeFadeUp), '$motion-fade-in-up-distance');
var FadeInLeft = exports.FadeInLeft = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledFade.makeFadeLeft), '$motion-fade-in-left-distance');
var FadeInRight = exports.FadeInRight = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledFade.makeFadeRight), '$motion-fade-in-right-distance');