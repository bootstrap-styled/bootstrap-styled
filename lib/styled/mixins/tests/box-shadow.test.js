'use strict';

var _immutable = require('immutable');

var _boxShadow = require('../box-shadow');

describe('bootstrap box-shadow mixins', function () {
  it('boxShadow should return disable css', function () {
    var css = (0, _boxShadow.boxShadow)(_boxShadow.defaultProps['$enable-shadows'], 'inset 0 1px 1px rgba(0,0,0,.075)');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('boxShadow should return enable css', function () {
    var css = (0, _boxShadow.boxShadow)(!_boxShadow.defaultProps['$enable-shadows'], 'inset 0 1px 1px rgba(0,0,0,.075)');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    ');
  });
  it('boxShadow should return a css by default', function () {
    var css = (0, _boxShadow.boxShadow)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(788434458);
  });
});