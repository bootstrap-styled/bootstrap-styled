'use strict';

var _float = require('../float');

describe('bootstrap float mixins', function () {
  it('floatLeft should return a css', function () {
    var css = (0, _float.floatLeft)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: left !important;\n  ');
  });
  it('floatRight should return a css', function () {
    var css = (0, _float.floatRight)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: right !important;\n  ');
  });
  it('floatNone should return a css', function () {
    var css = (0, _float.floatNone)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    float: none !important;\n  ');
  });
});