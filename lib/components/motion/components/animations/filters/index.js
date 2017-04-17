'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sepia = exports.Saturate = exports.Opacity = exports.Invert = exports.HueRotate = exports.Grayscale = exports.Brightness = exports.Contrast = exports.Blur = undefined;

var _styledFilter = require('./styledFilter');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blur = exports.Blur = (0, _composeAnimation2.default)(_styledFilter.makeBlur);
var Contrast = exports.Contrast = (0, _composeAnimation2.default)(_styledFilter.makeContrast);
var Brightness = exports.Brightness = (0, _composeAnimation2.default)(_styledFilter.makeBrightness);
var Grayscale = exports.Grayscale = (0, _composeAnimation2.default)(_styledFilter.makeGrayscale);
var HueRotate = exports.HueRotate = (0, _composeAnimation2.default)(_styledFilter.makeHueRotate);
var Invert = exports.Invert = (0, _composeAnimation2.default)(_styledFilter.makeInvert);
var Opacity = exports.Opacity = (0, _composeAnimation2.default)(_styledFilter.makeOpacity);
var Saturate = exports.Saturate = (0, _composeAnimation2.default)(_styledFilter.makeSaturate);
var Sepia = exports.Sepia = (0, _composeAnimation2.default)(_styledFilter.makeSepia);