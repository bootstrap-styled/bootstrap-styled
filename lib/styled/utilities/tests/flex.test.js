'use strict';

var _immutable = require('immutable');

var _flex = require('../flex');

describe('bootstrap flex utility', function () {
  it('getFlexUtilities should return a list of css utilities', function () {
    var css = (0, _flex.getFlexUtilities)(_flex.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(2123778);
  });
  it('getFlexUtilities should have arguments', function () {
    var css = (0, _flex.getFlexUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(2123778);
  });
});