'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightOut = exports.LightIn = undefined;

var _styledLight = require('./styledLight');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lightspeed animation components
var LightIn = exports.LightIn = (0, _composeAnimation2.default)(_styledLight.makeLightIn);
var LightOut = exports.LightOut = (0, _composeAnimation2.default)(_styledLight.makeLightOut);