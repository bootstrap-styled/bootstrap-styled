import { resetFilter } from '../reset-filter';

describe('bootstrap reset-filter mixins', () => {
  it('resetFilter should return a css', () => {
    const css = resetFilter();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)";\n  ');
  });
});
