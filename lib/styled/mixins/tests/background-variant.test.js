'use strict';

var _immutable = require('immutable');

var _backgroundVariant = require('../background-variant');

describe('bootstrap background-variant mixins', function () {
  it('bgVariant should return a css', function () {
    var css = (0, _backgroundVariant.bgVariant)('.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(922806399);
  });
});