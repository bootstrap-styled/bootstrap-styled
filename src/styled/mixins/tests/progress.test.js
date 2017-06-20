import { progressVariant } from '../progress';

describe('bootstrap progress mixins', () => {
  it('progressVariant should return a css', () => {
    const css = progressVariant('#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &[value]::-webkit-progress-value {\n      background-color: #f00;\n    }\n    \n    &[value]::-moz-progress-bar {\n      background-color: #f00;\n    }\n    \n    /* IE10+, Microsoft Edge */\n    &[value]::-ms-fill {\n      background-color: #f00;\n    }\n    \n    /* IE9 */\n    @media screen and (min-width:0\\0) {\n    .progress-bar {\n        background-color: #f00;\n      }\n    }\n  ');
  });
});
