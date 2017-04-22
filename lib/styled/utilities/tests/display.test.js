'use strict';

var _immutable = require('immutable');

var _display = require('../display');

describe('bootstrap display utility', function () {
  it('getDisplayUtilities should return a list of css utilities', function () {
    var css = (0, _display.getDisplayUtilities)(_display.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-165333280);
  });
  it('getDisplayUtilities should have arguments', function () {
    var css = (0, _display.getDisplayUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-165333280);
  });
});