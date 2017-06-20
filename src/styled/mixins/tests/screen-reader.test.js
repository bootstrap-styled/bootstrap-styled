import { srOnly, srOnlyFocusable } from '../screen-reader';

describe('bootstrap screen-reader mixins', () => {
  it('srOnly should return a css', () => {
    const css = srOnly();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    position: absolute !important;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  ');
  });
  it('srOnlyFocusable should return a css', () => {
    const css = srOnlyFocusable();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:active,\n    &:focus {\n      position: static;\n      width: auto;\n      height: auto;\n      margin: 0;\n      overflow: visible;\n      clip: auto;\n    }\n  ');
  });
});
