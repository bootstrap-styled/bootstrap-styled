'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropshadow = exports.Sepia = exports.Saturate = exports.Opacity = exports.Invert = exports.HueRotate = exports.Grayscale = exports.Brightness = exports.Contrast = exports.Blur = undefined;

var _styledFilter = require('./styledFilter');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeAmplification = require('../templates/composeAmplification');

var _composeAmplification2 = _interopRequireDefault(_composeAmplification);

var _composeRotation = require('../templates/composeRotation');

var _composeRotation2 = _interopRequireDefault(_composeRotation);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blur = exports.Blur = (0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledFilter.makeBlur), '$motion-blur-distance');
var Contrast = exports.Contrast = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeContrast), '$motion-contrast-amplification');
var Brightness = exports.Brightness = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeBrightness), '$motion-brightness-amplification');
var Grayscale = exports.Grayscale = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeGrayscale), '$motion-grayscale-amplification');
var HueRotate = exports.HueRotate = (0, _composeRotation2.default)((0, _composeAnimation2.default)(_styledFilter.makeHueRotate), '$motion-hue-rotate-rotation');
var Invert = exports.Invert = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeInvert), '$motion-invert-amplification');
var Opacity = exports.Opacity = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeOpacity), '$motion-opacity-amplification');
var Saturate = exports.Saturate = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeSaturate), '$motion-saturate-amplification');
var Sepia = exports.Sepia = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeSepia), '$motion-sepia-amplification');
var Dropshadow = exports.Dropshadow = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledFilter.makeDropshadow), '$motion-drop-shadow-amplification');