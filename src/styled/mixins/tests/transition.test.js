import { fromJS } from 'immutable';
import { defaultProps, transition } from '../transition';

describe('bootstrap transition mixins', () => {
  it('transition should return a css without transitions', () => {
    const css = transition(defaultProps['$enable-transitions'], 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('transition should return a css with transitions', () => {
    const css = transition(!defaultProps['$enable-transitions'], 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      transition: all .2s ease-in-out;\n    ');
  });
  it('transition should have arguments', () => {
    const css = transition();
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
  });
});
