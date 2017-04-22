'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideRightLeft = exports.SlideLeft = exports.SlideRight = exports.SlideDown = exports.SlideUp = undefined;

var _styledSlide = require('./styledSlide');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideUp = exports.SlideUp = (0, _composeAnimation2.default)(_styledSlide.makeSlideDown);
var SlideDown = exports.SlideDown = (0, _composeAnimation2.default)(_styledSlide.makeSlideUp);
var SlideRight = exports.SlideRight = (0, _composeAnimation2.default)(_styledSlide.makeSlideRight);
var SlideLeft = exports.SlideLeft = (0, _composeAnimation2.default)(_styledSlide.makeSlideLeft);
var SlideRightLeft = exports.SlideRightLeft = (0, _composeAnimation2.default)(_styledSlide.makeSlideRightLeft);