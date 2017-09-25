'use strict';

var _immutable = require('immutable');

var _lists = require('../lists');

describe('bootstrap lists mixins', function () {
  it('listUnstyled should return a css', function () {
    var css = (0, _lists.listUnstyled)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(216191846);
  });
  it('listInlineItem should return a css', function () {
    var css = (0, _lists.listInlineItem)(_lists.defaultProps['$list-inline-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(879924926);
  });
  it('listInlineItem should have arguments', function () {
    var css = (0, _lists.listInlineItem)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(879924926);
  });
});