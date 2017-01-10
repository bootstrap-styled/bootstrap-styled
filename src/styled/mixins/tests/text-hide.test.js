import { textHide } from '../text-hide';

describe('bootstrap text-hide mixins', () => {
  it('textHide should return a css', () => {
    const css = textHide();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ');
  });
});
