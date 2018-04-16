'use strict';

var _utils = require('../utils');

describe('utils', function () {
  it('allowFalseValue should return false', function () {
    expect((0, _utils.allowFalseValue)(false, true)).toBe(false);
  });
  it('allowFalseValue should return true', function () {
    expect((0, _utils.allowFalseValue)(true, true)).toBe(true);
  });
});