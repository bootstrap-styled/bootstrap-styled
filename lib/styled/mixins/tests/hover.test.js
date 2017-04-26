'use strict';

var _immutable = require('immutable');

var _hover = require('../hover');

describe('bootstrap hover mixins', function () {
  it('hover should return a css', function () {
    var css = (0, _hover.hover)('\n      cursor: pointer;\n      opacity: .5;\n    ');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:hover { \n      cursor: pointer;\n      opacity: .5;\n     }\n  ');
  });
  it('hover should have arguments', function () {
    var css = (0, _hover.hover)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-158700174);
  });
  it('hoverFocus should return a css without media query', function () {
    var css = (0, _hover.hoverFocus)(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus,\n    &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocus should return a css with media query', function () {
    var css = (0, _hover.hoverFocus)(!_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n      &:focus { cursor: pointer;\n      opacity: .5; }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocus should have arguments', function () {
    var css = (0, _hover.hoverFocus)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-736658684);
  });
  it('hoverFocusActive should return a css without media query', function () {
    var css = (0, _hover.hoverFocusActive)(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus, &:active, &:hover {\n     cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocusActive should return a css with media query', function () {
    var css = (0, _hover.hoverFocusActive)(!_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &:focus,\n      &:active {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocusActive should have arguments', function () {
    var css = (0, _hover.hoverFocusActive)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-149322241);
  });
  it('plainHoverFocus should return a css without media query', function () {
    var css = (0, _hover.plainHoverFocus)(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n    &, &:focus, &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('plainHoverFocus should return a css with media query', function () {
    var css = (0, _hover.plainHoverFocus)(!_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &, &:focus {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('plainHoverFocus should have arguments', function () {
    var css = (0, _hover.plainHoverFocus)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1020241862);
  });
  it('hover should have hoverFocus', function () {
    var css = _hover.hover.focus(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-75696186);
  });
  it('hover should have plainHoverFocus', function () {
    var css = _hover.hover.plainFocus(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(507113767);
  });
  it('hover should have hoverFocusActive', function () {
    var css = _hover.hover.activeFocus(_hover.defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(313791295);
  });
});