'use strict';

var _immutable = require('immutable');

var _borderRadius = require('../border-radius');

describe('bootstrap border-radius mixins', function () {
  it('borderRadius should return a css', function () {
    var css = (0, _borderRadius.borderRadius)(_borderRadius.defaultProps['$enable-rounded'], _borderRadius.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (_borderRadius.defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderRadius should have arguments', function () {
    var css = (0, _borderRadius.borderRadius)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(412224342);
  });
  it('borderTopRadius should return a css', function () {
    var css = (0, _borderRadius.borderTopRadius)(_borderRadius.defaultProps['$enable-rounded'], _borderRadius.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (_borderRadius.defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-top-right-radius: .25rem;\n      border-top-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderTopRadius should return a css by default', function () {
    var css = (0, _borderRadius.borderTopRadius)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-805177024);
  });
  it('borderRightRadius should return a css', function () {
    var css = (0, _borderRadius.borderRightRadius)(_borderRadius.defaultProps['$enable-rounded'], _borderRadius.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (_borderRadius.defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-right-radius: .25rem;\n      border-top-right-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderRightRadius should return a css by default', function () {
    var css = (0, _borderRadius.borderRightRadius)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-48434351);
  });
  it('borderBottomRadius should return a css', function () {
    var css = (0, _borderRadius.borderBottomRadius)(_borderRadius.defaultProps['$enable-rounded'], _borderRadius.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (_borderRadius.defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-right-radius: .25rem;\n      border-bottom-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderBottomRadius should return a css by default', function () {
    var css = (0, _borderRadius.borderBottomRadius)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(688610612);
  });
  it('borderLeftRadius should return a css', function () {
    var css = (0, _borderRadius.borderLeftRadius)(_borderRadius.defaultProps['$enable-rounded'], _borderRadius.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (_borderRadius.defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-left-radius: .25rem;\n      border-top-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderLeftRadius should return a css by default', function () {
    var css = (0, _borderRadius.borderLeftRadius)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1049744082);
  });
});