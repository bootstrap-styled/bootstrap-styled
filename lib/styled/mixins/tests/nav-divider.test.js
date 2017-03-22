'use strict';

var _immutable = require('immutable');

var _navDivider = require('../nav-divider');

describe('bootstrap nav-divider mixins', function () {
  it('navDivider should return a css', function () {
    var css = (0, _navDivider.navDivider)(_navDivider.defaultProps['$spacer-y'], '#f0f');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(858038477);
  });
  it('navDivider should have arguments', function () {
    var css = (0, _navDivider.navDivider)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-953521003);
  });
});