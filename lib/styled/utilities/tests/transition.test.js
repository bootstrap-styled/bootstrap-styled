import { fromJS } from 'immutable';
import { transition, getTransitionUtilities, fade, collapse } from '../transition';

describe('bootstrap transition mixins', function () {
  it('transition should return a css with transitions', function () {
    var enableTransitions = true;
    var css = transition(enableTransitions, 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      transition: all .2s ease-in-out;\n    ');
  });
  it('getTransitionUtils should return a css utility', function () {
    var enableTransitions = true;
    var css = getTransitionUtilities(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-798931882);
  });
  it('transition should return a css without transitions', function () {
    var enableTransitions = false;
    var css = transition(enableTransitions, 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('transition should have arguments', function () {
    var css = transition();
    expect(css).toEqual('');
  });
  it('fade should return a css with defaultProps', function () {
    var css = fade();
    expect(fromJS({ css: css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css with transition', function () {
    var enableTransitions = true;
    var css = fade(enableTransitions, 'opacity .15s linear');
    expect(fromJS({ css: css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css without transition', function () {
    var enableTransitions = false;
    var css = fade(enableTransitions, 'opacity .15s linear');
    expect(fromJS({ css: css }).hashCode()).toEqual(-490171608);
  });
  it('collapse should return a css with defaultProps', function () {
    var css = collapse();
    expect(fromJS({ css: css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css with transition', function () {
    var enableTransitions = true;
    var css = collapse(enableTransitions, 'height .35s ease');
    expect(fromJS({ css: css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css without transition', function () {
    var enableTransitions = false;
    var css = collapse(enableTransitions, 'height .35s ease');
    expect(fromJS({ css: css }).hashCode()).toEqual(1058176073);
  });
});