import { fromJS } from 'immutable';

import { defaultProps, boxShadow } from '../box-shadow';

describe('bootstrap box-shadow mixins', () => {
  it('boxShadow should return disable css', () => {
    const css = boxShadow(defaultProps['$enable-shadows'], 'inset 0 1px 1px rgba(0,0,0,.075)');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('boxShadow should return enable css', () => {
    const css = boxShadow(!defaultProps['$enable-shadows'], 'inset 0 1px 1px rgba(0,0,0,.075)');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    ');
  });
  it('boxShadow should return a css by default', () => {
    const css = boxShadow();
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
  });
});
