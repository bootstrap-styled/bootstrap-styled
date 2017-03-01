import { transition } from '../transition';

describe('bootstrap transition mixins', () => {
  it('transition should return a css with transitions', () => {
    const enableTransitions = true;
    const css = transition(enableTransitions, 'all .2s ease-in-out');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      transition: all .2s ease-in-out;\n    ');
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
});
