import { fromJS } from 'immutable';
import {
  getCursorUtilities,
} from '../cursor';

describe('bootstrap cursor utility', () => {
  it('getCursorUtilities should return a list of cursor css utility', () => {
    const css = getCursorUtilities();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(222728468);
  });
});
