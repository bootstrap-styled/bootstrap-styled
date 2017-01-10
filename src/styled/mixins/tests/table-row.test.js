import { fromJS } from 'immutable';
import { tableRowVariant } from '../table-row';

describe('bootstrap table-row mixins', () => {
  it('tableRowVariant should return a css active variant', () => {
    const css = tableRowVariant('active', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(240293522);
  });
  it('tableRowVariant should return a css success variant', () => {
    const css = tableRowVariant('success', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(955376544);
  });
  it('tableRowVariant should return a css info variant', () => {
    const css = tableRowVariant('info', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(918541721);
  });
  it('tableRowVariant should return a css warning variant', () => {
    const css = tableRowVariant('warning', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-22637318);
  });
  it('tableRowVariant should return a css danger variant', () => {
    const css = tableRowVariant('warning', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-22637318);
  });
});
