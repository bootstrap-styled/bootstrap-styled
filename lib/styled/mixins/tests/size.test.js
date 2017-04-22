'use strict';

var _size = require('../size');

describe('bootstrap size mixins', function () {
  it('size should return a css from a width', function () {
    var css = (0, _size.size)('300px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    width: 300px;\n    height: 300px;\n  ');
  });
  it('size should return a css from a width and height', function () {
    var css = (0, _size.size)('300px', '600px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    width: 300px;\n    height: 600px;\n  ');
  });
});