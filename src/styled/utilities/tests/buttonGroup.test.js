import { fromJS } from 'immutable';
import { buttonGroup } from '../buttonGroup';

describe('bootstrap buttonGroup utility', () => {
  it('should return a buttonGroup utility css', () => {
    const css = buttonGroup();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-123638778);
  });
});
