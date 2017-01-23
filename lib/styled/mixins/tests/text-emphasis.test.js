import { fromJS } from 'immutable';
import { defaultProps, textEmphasisVariant } from '../text-emphasis';

describe('bootstrap text-emphasis mixins', function () {
  it('textEmphasisVariant should return a css without hover media query', function () {
    var css = textEmphasisVariant(defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(285980920);
  });
  it('textEmphasisVariant should return a css with hover media query', function () {
    var css = textEmphasisVariant(!defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-462088550);
  });
});