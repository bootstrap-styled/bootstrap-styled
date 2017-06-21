'use strict';

var _immutable = require('immutable');

var _tableRow = require('../table-row');

describe('bootstrap table-row mixins', function () {
  it('tableRowVariant should return a css active variant', function () {
    var css = (0, _tableRow.tableRowVariant)('active', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(543831532);
  });
  it('tableRowVariant should return a css success variant', function () {
    var css = (0, _tableRow.tableRowVariant)('success', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(487776158);
  });
  it('tableRowVariant should return a css info variant', function () {
    var css = (0, _tableRow.tableRowVariant)('info', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-466312365);
  });
  it('tableRowVariant should return a css warning variant', function () {
    var css = (0, _tableRow.tableRowVariant)('warning', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(456471389);
  });
  it('tableRowVariant should return a css danger variant', function () {
    var css = (0, _tableRow.tableRowVariant)('danger', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(202181733);
  });
});