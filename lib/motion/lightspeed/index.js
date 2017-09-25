'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightOut = exports.LightIn = undefined;

var _styledLight = require('./styledLight');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

var _composeRotation = require('../templates/composeRotation');

var _composeRotation2 = _interopRequireDefault(_composeRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lightspeed animation components
var LightIn = exports.LightIn = (0, _composeRotation2.default)((0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledLight.makeLightIn), '$motion-light-in-distance'), '$motion-light-in-rotation');
var LightOut = exports.LightOut = (0, _composeRotation2.default)((0, _composeDistance2.default)((0, _composeAnimation2.default)(_styledLight.makeLightOut), '$motion-light-out-distance'), '$motion-light-out-rotation');