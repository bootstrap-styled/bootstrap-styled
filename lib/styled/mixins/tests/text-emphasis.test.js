'use strict';

var _immutable = require('immutable');

var _textEmphasis = require('../text-emphasis');

describe('bootstrap text-emphasis mixins', function () {
  it('textEmphasisVariant should return a css without hover media query', function () {
    var css = (0, _textEmphasis.textEmphasisVariant)(_textEmphasis.defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(285980920);
  });
  it('textEmphasisVariant should return a css with hover media query', function () {
    var css = (0, _textEmphasis.textEmphasisVariant)(!_textEmphasis.defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-462088550);
  });
  it('textEmphasisVariant should have arguments', function () {
    var css = (0, _textEmphasis.textEmphasisVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-788353799);
  });
});