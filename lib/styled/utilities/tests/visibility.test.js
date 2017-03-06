'use strict';

var _immutable = require('immutable');

var _visibility = require('../visibility');

describe('bootstrap visibility utility', function () {
  it('getVisibilityUtilities should return a list of css utilities', function () {
    var css = (0, _visibility.getVisibilityUtilities)(_visibility.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(804893845);
  });
  it('getVisibilityUtilities should have arguments', function () {
    var css = (0, _visibility.getVisibilityUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(804893845);
  });
});