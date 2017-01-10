import { fromJS } from 'immutable';
import { defaultProps, listGroupItemVariant } from '../list-group';

describe('bootstrap list-group mixins', () => {
  it('listGroupItemVariant should return a css without hover media query', () => {
    const css = listGroupItemVariant(defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-569746611);
  });
  it('listGroupItemVariant should return a css with hover media query', () => {
    const css = listGroupItemVariant(!defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(657451382);
  });
});
