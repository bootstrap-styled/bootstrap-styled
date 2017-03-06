'use strict';

var _textTruncate = require('../text-truncate');

describe('bootstrap text-truncate mixins', function () {
  it('textTruncate should return a css', function () {
    var css = (0, _textTruncate.textTruncate)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ');
  });
});