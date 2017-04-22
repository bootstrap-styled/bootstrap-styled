'use strict';

var _textHide = require('../text-hide');

describe('bootstrap text-hide mixins', function () {
  it('textHide should return a css', function () {
    var css = (0, _textHide.textHide)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ');
  });
});