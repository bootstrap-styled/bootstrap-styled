import { fromJS } from 'immutable';
import { alertVariant } from '../alert';

describe('bootstrap alert mixins', function () {
  it('alertVariant should return a css', function () {
    var css = alertVariant('#fff', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-743377560);
  });
});