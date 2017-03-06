import { fromJS } from 'immutable';
import { getVisibilityUtilities } from '../visibility';

describe('bootstrap visibility utility', () => {
  it('getVisibilityUtilities should have arguments', () => {
    const css = getVisibilityUtilities();
    expect(fromJS({ css }).hashCode()).toEqual(456156715);
  });
});
