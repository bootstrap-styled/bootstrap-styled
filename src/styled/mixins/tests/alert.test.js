import { fromJS } from 'immutable';
import { alertVariant } from '../alert';

describe('bootstrap alert mixins', () => {
  it('alertVariant should return a css', () => {
    const css = alertVariant('#fff', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-743377560);
  });
});
