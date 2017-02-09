import { fromJS } from 'immutable';
import { buttonGroup } from '../buttonGroup';

describe('bootstrap buttonGroup utility', function () {
  it('should return a buttonGroup utility css', function () {
    var css = buttonGroup();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(173366388);
  });
});