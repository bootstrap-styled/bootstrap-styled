'use strict';

var _immutable = require('immutable');

var _float = require('../float');

describe('bootstrap float utility', function () {
  it('getFloatUtilities should return a list of css utilities', function () {
    var css = (0, _float.getFloatUtilities)(_float.defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-111904855);
  });
  it('getFloatUtilities should have arguments', function () {
    var css = (0, _float.getFloatUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-111904855);
  });
});