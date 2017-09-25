'use strict';

var _clearfix = require('../clearfix');

describe('bootstrap clearfix mixins', function () {
  it('clearfix should return a css', function () {
    var css = (0, _clearfix.clearfix)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &::after {\n      content: "";\n      display: table;\n      clear: both;\n    }\n  ');
  });
});