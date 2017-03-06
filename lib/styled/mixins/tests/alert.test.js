'use strict';

var _immutable = require('immutable');

var _alert = require('../alert');

describe('bootstrap alert mixins', function () {
  it('alertVariant should return a css', function () {
    var css = (0, _alert.alertVariant)('#fff', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-743377560);
  });
});