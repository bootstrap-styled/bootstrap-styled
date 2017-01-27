import { fromJS } from 'immutable';
import { defaultProps, transition } from '../transition';

describe('bootstrap transition mixins', function () {
  it('transition should return a css without transitions', function () {
    var css = transition(defaultProps['$enable-transitions'], 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('transition should return a css with transitions', function () {
    var css = transition(!defaultProps['$enable-transitions'], 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      transition: all .2s ease-in-out;\n    ');
  });
  it('transition should have arguments', function () {
    var css = transition();
    expect(fromJS({ css: css }).hashCode()).toEqual(788434458);
  });
});