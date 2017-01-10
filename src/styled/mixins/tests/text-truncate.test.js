import { textTruncate } from '../text-truncate';

describe('bootstrap text-truncate mixins', () => {
  it('textTruncate should return a css', () => {
    const css = textTruncate();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ');
  });
});
