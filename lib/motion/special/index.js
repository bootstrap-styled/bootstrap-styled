'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hatch = exports.Entrance = exports.ExpandUp = exports.Pulse = exports.Hinge = exports.Zoom = exports.Swing = exports.Rubber = exports.RollIn = exports.RollOut = exports.Flash = undefined;

var _styledSpecial = require('./styledSpecial');

var _composeAnimation = require('../templates/composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

var _composeAmplification = require('../templates/composeAmplification');

var _composeAmplification2 = _interopRequireDefault(_composeAmplification);

var _composeDistance = require('../templates/composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flash = exports.Flash = (0, _composeAnimation2.default)(_styledSpecial.makeFlash);
var RollOut = exports.RollOut = (0, _composeDistance2.default)((0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeRollOut), '$motion-roll-out-amplification'), '$motion-roll-out-distance');
var RollIn = exports.RollIn = (0, _composeDistance2.default)((0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeRollIn), '$motion-roll-in-amplification'), '$motion-roll-in-distance');
var Rubber = exports.Rubber = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeRubber), '$motion-rubber-amplification');
var Swing = exports.Swing = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeSwing), '$motion-swing-amplification');
var Zoom = exports.Zoom = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeZoom), '$motion-zoom-amplification');
var Hinge = exports.Hinge = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeHinge), '$motion-hinge-amplification');
var Pulse = exports.Pulse = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makePulse), '$motion-pulse-amplification');
var ExpandUp = exports.ExpandUp = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeExpandUp), '$motion-expand-up-amplification');
var Entrance = exports.Entrance = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeEntrance), '$motion-entrance-amplification');
var Hatch = exports.Hatch = (0, _composeAmplification2.default)((0, _composeAnimation2.default)(_styledSpecial.makeHatch), '$motion-hatch-amplification');