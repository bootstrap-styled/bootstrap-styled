'use strict';

var _makeTheme = require('../makeTheme');

var _makeTheme2 = _interopRequireDefault(_makeTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeTheme', function () {
  it('should have makeTheme defined', function () {
    expect(_makeTheme2.default).toBeDefined();
  });
  it('should have keys starting with $ only', function () {
    Object.keys((0, _makeTheme2.default)()).forEach(function (key) {
      return expect(key[0]).toEqual('$');
    });
  });
});