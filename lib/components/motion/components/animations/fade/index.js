'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FadeInRight = exports.FadeInLeft = exports.FadeInUp = exports.FadeInDown = exports.FadeIn = undefined;

var _styledFade = require('./styledFade');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fade animation components
var FadeIn = exports.FadeIn = (0, _composeAnimation2.default)(_styledFade.makeFadeIn);
var FadeInDown = exports.FadeInDown = (0, _composeAnimation2.default)(_styledFade.makeFadeDown);
var FadeInUp = exports.FadeInUp = (0, _composeAnimation2.default)(_styledFade.makeFadeUp);
var FadeInLeft = exports.FadeInLeft = (0, _composeAnimation2.default)(_styledFade.makeFadeLeft);
var FadeInRight = exports.FadeInRight = (0, _composeAnimation2.default)(_styledFade.makeFadeRight);