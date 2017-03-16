import { fromJS } from 'immutable';
import { a, defaultProps } from '../a';

describe('bootstrap a mixin', () => {
  it('should return a a mixin css', () => {
    const css = a(
      defaultProps['$link-color'],
      defaultProps['$link-decoration'],
      defaultProps['$link-hover-color'],
      defaultProps['$link-hover-decoration'],
      defaultProps['$enable-hover-media-query'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-561002076);
  });
  it('should return a a utility css by default', () => {
    const css = a();
    expect(fromJS({ css }).hashCode()).toEqual(-561002076);
  });
});
