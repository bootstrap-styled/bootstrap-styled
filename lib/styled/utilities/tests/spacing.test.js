'use strict';

var _immutable = require('immutable');

var _spacing = require('../spacing');

describe('bootstrap spacing utility', function () {
  it('getSpacingUtilities should return a list of css utilities', function () {
    var css = (0, _spacing.getSpacingUtilities)(_spacing.defaultProps['$grid-breakpoints'], _spacing.defaultProps['$spacers'] // eslint-disable-line dot-notation
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1035143239);
  });
  it('getSpacingUtilities should have arguments', function () {
    var css = (0, _spacing.getSpacingUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1035143239);
  });
});