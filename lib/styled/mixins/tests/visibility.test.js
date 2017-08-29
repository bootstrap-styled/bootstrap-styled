'use strict';

var _immutable = require('immutable');

var _visibility = require('../visibility');

describe('bootstrap visibility mixins', function () {
  it('invisible should have arguments', function () {
    var css = (0, _visibility.invisible)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-3936327);
  });
  it('invisible should return a css', function () {
    var css = (0, _visibility.invisible)('hidden');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(281334414);
  });
});