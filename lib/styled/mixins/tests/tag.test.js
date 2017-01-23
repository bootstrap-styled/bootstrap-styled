import { fromJS } from 'immutable';
import { defaultProps, tagVariant } from '../tag';

describe('bootstrap tag mixins', function () {
  it('tagVariant should return a css without media query', function () {
    var css = tagVariant(defaultProps['$enable-hover-media-query'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-626230913);
  });
  it('tagVariant should return a css with media query', function () {
    var css = tagVariant(!defaultProps['$enable-hover-media-query'], '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-79729166);
  });
});