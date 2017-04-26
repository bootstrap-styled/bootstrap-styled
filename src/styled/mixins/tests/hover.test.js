import { fromJS } from 'immutable';

import { defaultProps, hover, hoverFocus, hoverFocusActive, plainHoverFocus } from '../hover';

describe('bootstrap hover mixins', () => {
  it('hover should return a css', () => {
    const css = hover(`
      cursor: pointer;
      opacity: .5;
    `);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:hover { \n      cursor: pointer;\n      opacity: .5;\n     }\n  ');
  });
  it('hover should have arguments', () => {
    const css = hover();
    expect(fromJS({ css }).hashCode()).toEqual(-158700174);
  });
  it('hoverFocus should return a css without media query', () => {
    const css = hoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus,\n    &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocus should return a css with media query', () => {
    const css = hoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n      &:focus { cursor: pointer;\n      opacity: .5; }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocus should have arguments', () => {
    const css = hoverFocus();
    expect(fromJS({ css }).hashCode()).toEqual(-736658684);
  });
  it('hoverFocusActive should return a css without media query', () => {
    const css = hoverFocusActive(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus, &:active, &:hover {\n     cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocusActive should return a css with media query', () => {
    const css = hoverFocusActive(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &:focus,\n      &:active {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocusActive should have arguments', () => {
    const css = hoverFocusActive();
    expect(fromJS({ css }).hashCode()).toEqual(-149322241);
  });
  it('plainHoverFocus should return a css without media query', () => {
    const css = plainHoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n    &, &:focus, &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('plainHoverFocus should return a css with media query', () => {
    const css = plainHoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &, &:focus {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('plainHoverFocus should have arguments', () => {
    const css = plainHoverFocus();
    expect(fromJS({ css }).hashCode()).toEqual(-1020241862);
  });
  it('hover should have hoverFocus', () => {
    const css = hover.focus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(-75696186);
  });
  it('hover should have plainHoverFocus', () => {
    const css = hover.plainFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(507113767);
  });
  it('hover should have hoverFocusActive', () => {
    const css = hover.activeFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(313791295);
  });
});
