import { fromJS } from 'immutable';
import { defaultProps, listUnstyled, listInlineItem } from '../lists';

describe('bootstrap lists mixins', () => {
  it('listUnstyled should return a css', () => {
    const css = listUnstyled();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(216191846);
  });
  it('listInlineItem should return a css', () => {
    const css = listInlineItem(defaultProps['$list-inline-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(879924926);
  });
  it('listInlineItem should have arguments', () => {
    const css = listInlineItem();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(879924926);
  });
});
