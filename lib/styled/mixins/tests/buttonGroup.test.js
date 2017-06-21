'use strict';

var _immutable = require('immutable');

var _buttonGroup = require('../buttonGroup');

describe('bootstrap buttonGroup utility', function () {
  it('should return a buttonGroup utility css', function () {
    var css = (0, _buttonGroup.buttonGroup)(_buttonGroup.defaultProps['$enable-shadows'], _buttonGroup.defaultProps['$enable-rounded'], _buttonGroup.defaultProps['$input-btn-border-width'], _buttonGroup.defaultProps['$btn-toolbar-margin'], _buttonGroup.defaultProps['$btn-padding-x'], _buttonGroup.defaultProps['$btn-active-box-shadow'], _buttonGroup.defaultProps['$btn-padding-x-lg'], _buttonGroup.defaultProps['$btn-padding-y-lg'], _buttonGroup.defaultProps['$font-size-lg'], _buttonGroup.defaultProps['$btn-border-radius-lg'], _buttonGroup.defaultProps['$btn-padding-x-sm'], _buttonGroup.defaultProps['$btn-padding-y-sm'], _buttonGroup.defaultProps['$font-size-sm'], _buttonGroup.defaultProps['$btn-border-radius-sm']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-420518194);
  });
  it('should return a buttonGroup utility css with default props', function () {
    var css = (0, _buttonGroup.buttonGroup)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-420518194);
  });
});