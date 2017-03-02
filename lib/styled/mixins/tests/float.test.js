import { floatLeft, floatRight, floatNone } from '../float';

describe('bootstrap float mixins', function () {
  it('floatLeft should return a css', function () {
    var css = floatLeft();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: left !important;\n  ');
  });
  it('floatRight should return a css', function () {
    var css = floatRight();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: right !important;\n  ');
  });
  it('floatNone should return a css', function () {
    var css = floatNone();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: none !important;\n  ');
  });
});