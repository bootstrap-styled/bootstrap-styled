import { fromJS } from 'immutable';
import { tableRowVariant } from '../table-row';

describe('bootstrap table-row mixins', function () {
  it('tableRowVariant should return a css active variant', function () {
    var css = tableRowVariant('active', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(240293522);
  });
  it('tableRowVariant should return a css success variant', function () {
    var css = tableRowVariant('success', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(955376544);
  });
  it('tableRowVariant should return a css info variant', function () {
    var css = tableRowVariant('info', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(918541721);
  });
  it('tableRowVariant should return a css warning variant', function () {
    var css = tableRowVariant('warning', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-22637318);
  });
  it('tableRowVariant should return a css danger variant', function () {
    var css = tableRowVariant('warning', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-22637318);
  });
});