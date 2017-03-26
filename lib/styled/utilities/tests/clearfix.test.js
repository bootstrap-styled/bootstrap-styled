'use strict';

var _immutable = require('immutable');

var _clearfix = require('../clearfix');

describe('bootstrap clearfix utility', function () {
  it('getClearfixUtilities should return a list of css utilities', function () {
    var css = (0, _clearfix.getClearfixUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(308530444);
  });
  it('getClearfix should return a list of css utilities', function () {
    var css = (0, _clearfix.getClearfix)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1061470531);
  });
});