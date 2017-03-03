import { fromJS } from 'immutable';
import { media } from '../media';

describe('bootstrap media mixins', function () {
  it('media should return a css', function () {
    var css = media();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-18337284);
  });
});