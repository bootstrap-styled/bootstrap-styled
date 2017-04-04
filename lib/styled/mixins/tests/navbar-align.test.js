'use strict';

var _immutable = require('immutable');

var _navbarAlign = require('../navbar-align');

describe('bootstrap navbar-align mixins', function () {
  it('navbarVerticalAlign should return a css', function () {
    var css = (0, _navbarAlign.navbarVerticalAlign)(_navbarAlign.defaultProps['$navbar-height'], '30px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1025386685);
  });
});