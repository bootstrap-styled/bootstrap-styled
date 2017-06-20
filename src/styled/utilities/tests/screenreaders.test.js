import { getScreenReadersUtilities } from '../screenreaders';

describe('bootstrap screenreaders utility', () => {
  it('getScreenReadersUtilities should return a list of css utilities', () => {
    const css = getScreenReadersUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('.sr-only');
  });
});
