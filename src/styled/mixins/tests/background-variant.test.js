import { fromJS } from 'immutable';
import { bgVariant } from '../background-variant';

describe('bootstrap background-variant mixins', () => {
  it('bgVariant should return a css', () => {
    const css = bgVariant('.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(922806399);
  });
});
