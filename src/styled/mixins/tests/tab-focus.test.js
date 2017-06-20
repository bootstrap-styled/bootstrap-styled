import { tabFocus } from '../tab-focus';

describe('bootstrap tab-focus mixins', () => {
  it('tabFocus should return a css', () => {
    const css = tabFocus();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via \'outline: initial\', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ');
  });
});
