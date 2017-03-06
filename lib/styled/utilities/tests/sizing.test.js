'use strict';

var _immutable = require('immutable');

var _sizing = require('../sizing');

describe('bootstrap sizing utility', function () {
  it('getSizingUtilities should return a list of css utilities', function () {
    var css = (0, _sizing.getSizingUtilities)(_sizing.defaultProps['$sizes']); // eslint-disable-line dot-notation
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1050266963);
  });
  it('getSizingUtilities should have arguments', function () {
    var css = (0, _sizing.getSizingUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1050266963);
  });
});