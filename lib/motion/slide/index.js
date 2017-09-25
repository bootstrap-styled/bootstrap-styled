'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideRightLeft = exports.SlideLeft = exports.SlideRight = exports.SlideDown = exports.SlideUp = undefined;

var _styledSlide = require('./styledSlide');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideUp = exports.SlideUp = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledSlide.makeSlideDown), '$motion-slide-up-distance');
var SlideDown = exports.SlideDown = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledSlide.makeSlideUp), '$motion-slide-down-distance');
var SlideRight = exports.SlideRight = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledSlide.makeSlideRight), '$motion-slide-right-distance');
var SlideLeft = exports.SlideLeft = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledSlide.makeSlideLeft), '$motion-slide-left-distance');
var SlideRightLeft = exports.SlideRightLeft = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledSlide.makeSlideRightLeft), '$motion-slide-right-left-distance');