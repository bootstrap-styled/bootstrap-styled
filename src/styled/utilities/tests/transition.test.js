import { fromJS } from 'immutable';
import { transition, getTransitionUtilities, fade, collapse } from '../transition';

describe('bootstrap transition mixins', () => {
  it('transition should return a css with transitions', () => {
    const enableTransitions = true;
    const css = transition(enableTransitions, 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      transition: all .2s ease-in-out;\n    ');
  });
  it('getTransitionUtils should return a css utility', () => {
    const enableTransitions = true;
    const css = getTransitionUtilities(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-798931882);
  });
  it('transition should return a css without transitions', () => {
    const enableTransitions = false;
    const css = transition(enableTransitions, 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('transition should have arguments', () => {
    const css = transition();
    expect(css).toEqual('');
  });
  it('fade should return a css with defaultProps', () => {
    const css = fade();
    expect(fromJS({ css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css with transition', () => {
    const enableTransitions = true;
    const css = fade(enableTransitions, 'opacity .15s linear');
    expect(fromJS({ css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css without transition', () => {
    const enableTransitions = false;
    const css = fade(enableTransitions, 'opacity .15s linear');
    expect(fromJS({ css }).hashCode()).toEqual(-490171608);
  });
  it('collapse should return a css with defaultProps', () => {
    const css = collapse();
    expect(fromJS({ css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css with transition', () => {
    const enableTransitions = true;
    const css = collapse(enableTransitions, 'height .35s ease');
    expect(fromJS({ css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css without transition', () => {
    const enableTransitions = false;
    const css = collapse(enableTransitions, 'height .35s ease');
    expect(fromJS({ css }).hashCode()).toEqual(1058176073);
  });
});
