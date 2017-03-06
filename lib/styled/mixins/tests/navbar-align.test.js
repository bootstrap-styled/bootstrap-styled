'use strict';

var _navbarAlign = require('../navbar-align');

describe('bootstrap navbar-align mixins', function () {
  it('navbarVerticalAlign should return a css', function () {
    var css = (0, _navbarAlign.navbarVerticalAlign)(_navbarAlign.defaultProps['$navbar-height'], '30px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    margin-top: 10px;\n    margin-bottom: 10px;  \n  ');
  });
});