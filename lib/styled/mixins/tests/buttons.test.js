'use strict';

var _immutable = require('immutable');

var _buttons = require('../buttons');

describe('bootstrap button mixins', function () {
  it('buttonVariant should return a css without shadows', function () {
    var css = (0, _buttons.buttonVariant)(_buttons.defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', _buttons.defaultProps['$btn-active-box-shadow'], _buttons.defaultProps['$btn-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(916230894);
  });
  it('buttonVariant should return a css with shadows', function () {
    var css = (0, _buttons.buttonVariant)(!_buttons.defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', _buttons.defaultProps['$btn-active-box-shadow'], _buttons.defaultProps['$btn-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-865738949);
  });
  it('buttonVariant should return a css by default', function () {
    var css = (0, _buttons.buttonVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-370928681);
  });
  it('buttonOutlineVariant should return a css', function () {
    var css = (0, _buttons.buttonOutlineVariant)('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-105052217);
  });
  it('buttonOutlineVariant should return a css by default', function () {
    var css = (0, _buttons.buttonOutlineVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(722820438);
  });
  it('buttonSize should return a css with rounded', function () {
    var css = (0, _buttons.buttonSize)(_buttons.defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-294360164);
  });
  it('buttonSize should return a css without rounded', function () {
    var css = (0, _buttons.buttonSize)(!_buttons.defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-496542589);
  });
  it('buttonSize should return a css by default', function () {
    var css = (0, _buttons.buttonSize)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(813225771);
  });
  it('button should return a a css', function () {
    var css = (0, _buttons.button)(_buttons.defaultProps['$enable-shadows'], _buttons.defaultProps['$enable-hover-media-query'], _buttons.defaultProps['$enable-transitions'], _buttons.defaultProps['$enable-rounded'], _buttons.defaultProps['$btn-font-weight'], _buttons.defaultProps['$btn-line-height'], _buttons.defaultProps['$btn-transition'], _buttons.defaultProps['$input-btn-border-width'], _buttons.defaultProps['$btn-padding-x'], _buttons.defaultProps['$btn-padding-y'], _buttons.defaultProps['$font-size-base'], _buttons.defaultProps['$btn-border-radius'], _buttons.defaultProps['$btn-active-box-shadow'], _buttons.defaultProps['$cursor-disabled'], _buttons.defaultProps['$link-color'], _buttons.defaultProps['$link-hover-color'], _buttons.defaultProps['$link-hover-decoration'], _buttons.defaultProps['$btn-link-disabled-color'], _buttons.defaultProps['$btn-padding-x-lg'], _buttons.defaultProps['$btn-padding-y-lg'], _buttons.defaultProps['$font-size-lg'], _buttons.defaultProps['$btn-border-radius-lg'], _buttons.defaultProps['$btn-padding-x-sm'], _buttons.defaultProps['$btn-padding-y-sm'], _buttons.defaultProps['$font-size-sm'], _buttons.defaultProps['$btn-border-radius-sm'], _buttons.defaultProps['$btn-block-spacing-y'], _buttons.defaultProps['$btn-primary-color'], _buttons.defaultProps['$btn-primary-bg'], _buttons.defaultProps['$btn-primary-border'], _buttons.defaultProps['$btn-secondary-color'], _buttons.defaultProps['$btn-secondary-bg'], _buttons.defaultProps['$btn-secondary-border'], _buttons.defaultProps['$btn-info-color'], _buttons.defaultProps['$btn-info-bg'], _buttons.defaultProps['$btn-info-border'], _buttons.defaultProps['$btn-success-color'], _buttons.defaultProps['$btn-success-bg'], _buttons.defaultProps['$btn-success-border'], _buttons.defaultProps['$btn-warning-color'], _buttons.defaultProps['$btn-warning-bg'], _buttons.defaultProps['$btn-warning-border'], _buttons.defaultProps['$btn-danger-color'], _buttons.defaultProps['$btn-danger-bg'], _buttons.defaultProps['$btn-danger-border']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1026628703);
  });
  it('button should return a button utility by default', function () {
    var css = (0, _buttons.button)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1026628703);
  });
});