import { defaultProps, navDivider } from '../nav-divider';

describe('bootstrap nav-divider mixins', function () {
  it('navDivider should return a css', function () {
    var css = navDivider(defaultProps['$spacer-y'], '#f0f');

    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');

    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    height: 1px;\n    margin: 0.5rem 0;\n    overflow: hidden;\n    background-color: #f0f;\n  ');
  });
});