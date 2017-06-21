'use strict';

var _immutable = require('immutable');

var _backgroundVariant = require('../background-variant');

describe('bootstrap background-variant mixins', function () {
  it('bgVariant should return a css', function () {
    var css = (0, _backgroundVariant.bgVariant)(_backgroundVariant.defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-538881241);
  });
  it('bgVariant should have paramters', function () {
    var css = (0, _backgroundVariant.bgVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-337543508);
  });
});