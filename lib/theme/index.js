'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeTheme = require('./makeTheme');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_makeTheme).default;
  }
});
Object.defineProperty(exports, 'makeTheme', {
  enumerable: true,
  get: function get() {
    return _makeTheme.makeTheme;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }