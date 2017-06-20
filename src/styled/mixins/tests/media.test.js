import { fromJS } from 'immutable';
import { media } from '../media';

describe('bootstrap media mixins', () => {
  it('media should return a css', () => {
    const css = media();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-18337284);
  });
});
