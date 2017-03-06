import { fromJS } from 'immutable';
import {
  invisible,
} from '../visibility';

describe('bootstrap visibility mixins', () => {
  it('invisible should have arguments', () => {
    const css = invisible();
    expect(fromJS({ css }).hashCode()).toEqual(-3936327);
  });
  it('invisible should return a css', () => {
    const css = invisible('hidden');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(281334414);
  });
});
