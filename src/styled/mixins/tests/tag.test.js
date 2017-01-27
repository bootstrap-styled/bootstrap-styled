import { fromJS } from 'immutable';
import { defaultProps, tagVariant } from '../tag';

describe('bootstrap tag mixins', () => {
  it('tagVariant should return a css without media query', () => {
    const css = tagVariant(defaultProps['$enable-hover-media-query'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-626230913);
  });
  it('tagVariant should return a css with media query', () => {
    const css = tagVariant(!defaultProps['$enable-hover-media-query'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-79729166);
  });
  it('tagVariant should have arguments', () => {
    const css = tagVariant();
    expect(fromJS({ css }).hashCode()).toEqual(584875103);
  });
});
