import { resizable } from '../resize';

describe('bootstrap resize mixins', () => {
  it('resizable should return a css', () => {
    const css = resizable('horizontal');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    resize: horizontal; /* Options: horizontal, vertical, both */\n    overflow: auto; /* Per CSS3 UI, \'resize\' only applies when \'overflow\' isn\'t \'visible\' */\n  ');
  });
});
