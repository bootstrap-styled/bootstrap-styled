import { fromJS } from 'immutable';

import { defaultProps, hover, hoverFocus, hoverFocusActive, plainHoverFocus } from '../hover';

describe('bootstrap hover mixins', function () {
  it('hover should return a css', function () {
    var css = hover('\n      cursor: pointer;\n      opacity: .5;\n    ');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:hover { \n      cursor: pointer;\n      opacity: .5;\n     }\n  ');
  });
  it('hover should have arguments', function () {
    var css = hover();
    expect(fromJS({ css: css }).hashCode()).toEqual(-158700174);
  });
  it('hoverFocus should return a css without media query', function () {
    var css = hoverFocus(defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus,\n    &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocus should return a css with media query', function () {
    var css = hoverFocus(!defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n      &:focus { cursor: pointer;\n      opacity: .5; }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocus should have arguments', function () {
    var css = hoverFocus();
    expect(fromJS({ css: css }).hashCode()).toEqual(-736658684);
  });
  it('hoverFocusActive should return a css without media query', function () {
    var css = hoverFocusActive(defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus, &:active, &:hover {\n     cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocusActive should return a css with media query', function () {
    var css = hoverFocusActive(!defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &:focus,\n      &:active {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocusActive should have arguments', function () {
    var css = hoverFocusActive();
    expect(fromJS({ css: css }).hashCode()).toEqual(-149322241);
  });
  it('plainHoverFocus should return a css without media query', function () {
    var css = plainHoverFocus(defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n    &, &:focus, &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('plainHoverFocus should return a css with media query', function () {
    var css = plainHoverFocus(!defaultProps['$enable-hover-media-query'], 'cursor: pointer;\n      opacity: .5;');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &, &:focus {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('plainHoverFocus should have arguments', function () {
    var css = plainHoverFocus();
    expect(fromJS({ css: css }).hashCode()).toEqual(-1020241862);
  });
});