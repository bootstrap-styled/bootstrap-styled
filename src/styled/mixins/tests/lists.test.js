import { listUnstyled } from '../lists';

describe('bootstrap lists mixins', () => {
  it('listUnstyled should return a css', () => {
    const css = listUnstyled();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    padding-left: 0;\n    list-style: none;\n  ');
  });
});
