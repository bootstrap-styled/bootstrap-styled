'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hatch = exports.Entrance = exports.ExpandUp = exports.Pulse = exports.Hinge = exports.Zoom = exports.Swing = exports.Rubber = exports.RollIn = exports.RollOut = exports.Flash = undefined;

var _styledSpecial = require('./styledSpecial');

var _composeAnimation = require('../../../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flash = exports.Flash = (0, _composeAnimation2.default)(_styledSpecial.makeFlash);
var RollOut = exports.RollOut = (0, _composeAnimation2.default)(_styledSpecial.makeRollOut);
var RollIn = exports.RollIn = (0, _composeAnimation2.default)(_styledSpecial.makeRollIn);
var Rubber = exports.Rubber = (0, _composeAnimation2.default)(_styledSpecial.makeRubber);
var Swing = exports.Swing = (0, _composeAnimation2.default)(_styledSpecial.makeSwing);
var Zoom = exports.Zoom = (0, _composeAnimation2.default)(_styledSpecial.makeZoom);
var Hinge = exports.Hinge = (0, _composeAnimation2.default)(_styledSpecial.makeHinge);
var Pulse = exports.Pulse = (0, _composeAnimation2.default)(_styledSpecial.makePulse);
var ExpandUp = exports.ExpandUp = (0, _composeAnimation2.default)(_styledSpecial.makeExpandUp);
var Entrance = exports.Entrance = (0, _composeAnimation2.default)(_styledSpecial.makeEntrance);
var Hatch = exports.Hatch = (0, _composeAnimation2.default)(_styledSpecial.makeHatch);