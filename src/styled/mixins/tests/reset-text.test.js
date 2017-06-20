import { fromJS } from 'immutable';
import { defaultProps, resetText } from '../reset-text';

describe('bootstrap reset-text mixins', () => {
  it('resetText should return a css', () => {
    const css = resetText(
      defaultProps['$font-family-base'],
      defaultProps['$font-weight-normal'],
      defaultProps['$line-height-base']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    font-family: true;\n    /* We deliberately do NOT reset font-size or word-wrap. */\n    font-style: normal;\n    font-weight: true;\n    letter-spacing: normal;\n    line-break: auto;\n    line-height: true;\n    text-align: left; /* Fallback for where \'start\' is not supported */\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    white-space: normal;\n    word-break: normal;\n    word-spacing: normal;\n  ');
  });
  it('resetText should have arguments', () => {
    const css = resetText();
    expect(fromJS({ css }).hashCode()).toEqual(-552236203);
  });
});
