'use strict';

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('theme', function () {
  it('should have theme defined', function () {
    expect(_theme2.default).toBeDefined();
  });
  it('should have keys starting with $ only', function () {
    Object.keys(_theme2.default).forEach(function (key) {
      return expect(key[0]).toEqual('$');
    });
  });
});