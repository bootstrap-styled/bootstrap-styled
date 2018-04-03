'use strict';

var _makeExtend = require('../makeExtend');

var _makeExtend2 = _interopRequireDefault(_makeExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeExtend', function () {
  it('should have makeOriginal defined', function () {
    expect(_makeExtend2.default).toBeDefined();
  });
  it('should have keys starting with $ only', function () {
    Object.keys((0, _makeExtend2.default)()).forEach(function (key) {
      return expect(key[0]).toEqual('$');
    });
  });
});