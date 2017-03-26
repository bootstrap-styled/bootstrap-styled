'use strict';

var _immutable = require('immutable');

var _cursor = require('../cursor');

describe('bootstrap cursor utility', function () {
  it('getCursorUtilities should return a list of cursor css utility', function () {
    var css = (0, _cursor.getCursorUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(222728468);
  });
});