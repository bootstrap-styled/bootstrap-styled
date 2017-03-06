'use strict';

var _immutable = require('immutable');

var _media = require('../media');

describe('bootstrap media mixins', function () {
  it('media should return a css', function () {
    var css = (0, _media.media)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-18337284);
  });
});