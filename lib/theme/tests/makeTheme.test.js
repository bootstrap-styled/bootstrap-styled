'use strict';

var _makeTheme = require('../makeTheme');

describe('makeTheme', function () {
  it('should have makeTheme defined', function () {
    expect(_makeTheme.makeTheme).toBeDefined();
  });
  it('should have keys starting with $ or _ only', function () {
    Object.keys((0, _makeTheme.makeTheme)()).forEach(function (key) {
      return expect(['$', '_'].indexOf(key[0]) !== -1).toBe(true);
    });
  });
  it('should makeTheme', function () {
    expect(Object.keys((0, _makeTheme.makeTheme)()).length).toEqual(484);
  });
});