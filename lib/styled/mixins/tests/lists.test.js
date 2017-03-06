'use strict';

var _lists = require('../lists');

describe('bootstrap lists mixins', function () {
  it('listUnstyled should return a css', function () {
    var css = (0, _lists.listUnstyled)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    padding-left: 0;\n    list-style: none;\n  ');
  });
});