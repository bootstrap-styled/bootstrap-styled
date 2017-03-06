'use strict';

var _screenreaders = require('../screenreaders');

describe('bootstrap screenreaders utility', function () {
  it('getScreenReadersUtilities should return a list of css utilities', function () {
    var css = (0, _screenreaders.getScreenReadersUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('.sr-only');
  });
});