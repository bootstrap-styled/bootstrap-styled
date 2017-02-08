import { fromJS } from 'immutable';
import { bgVariant } from '../background-variant';

describe('bootstrap background-variant mixins', function () {
  it('bgVariant should return a css', function () {
    var css = bgVariant('.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-701509387);
  });
});