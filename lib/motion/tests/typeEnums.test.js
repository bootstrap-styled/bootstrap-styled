'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeEnums = require('../typeEnums');

var _typeEnums2 = _interopRequireDefault(_typeEnums);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('typeEnums', function () {
  describe('typeEnums', function () {
    it('should be a valid object', function () {
      expect(typeof _typeEnums2.default === 'undefined' ? 'undefined' : _typeof(_typeEnums2.default)).toBe('object');
    });
    it('should have string values', function () {
      Object.keys(_typeEnums2.default).forEach(function (type) {
        expect(typeof type === 'undefined' ? 'undefined' : _typeof(type)).toBe('string');
      });
    });
  });
});