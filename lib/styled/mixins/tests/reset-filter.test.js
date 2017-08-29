'use strict';

var _resetFilter = require('../reset-filter');

describe('bootstrap reset-filter mixins', function () {
  it('resetFilter should return a css', function () {
    var css = (0, _resetFilter.resetFilter)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)";\n  ');
  });
});