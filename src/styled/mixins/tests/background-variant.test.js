import { fromJS } from 'immutable';
import { defaultProps, bgVariant } from '../background-variant';

describe('bootstrap background-variant mixins', () => {
  it('bgVariant should return a css', () => {
    const css = bgVariant(defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-538881241);
  });
  it('bgVariant should have paramters', () => {
    const css = bgVariant();
    expect(fromJS({ css }).hashCode()).toEqual(-337543508);
  });
});
