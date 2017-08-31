'use strict';

var _immutable = require('immutable');

var _visibility = require('../visibility');

describe('bootstrap visibility utility', function () {
  it('getVisibilityUtilities should have arguments', function () {
    var css = (0, _visibility.getVisibilityUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(600776174);
  });
});