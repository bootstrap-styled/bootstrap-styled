'use strict';

var _immutable = require('immutable');

var _variables = require('../variables');

describe('bootstrap variables mixins', function () {
  it('assertAscending true', function () {
    var asserted = (0, _variables.assertAscending)({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(asserted).toEqual(true);
  });
  it('assertAscending false', function () {
    var asserted = (0, _variables.assertAscending)({
      xs: '0',
      sm: '768px',
      md: '576px',
      lg: '992px',
      xl: '1200px'
    });
    expect(asserted).toEqual(false);
  });
  it('comparable true', function () {
    var res = (0, _variables.comparable)(1, 1);
    expect(res).toEqual(true);
  });
  it('comparable false', function () {
    var res = (0, _variables.comparable)(1, 'a');
    expect(res).toEqual(false);
  });
  it('comparable should have arguments', function () {
    var css = (0, _variables.comparable)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(788434458);
  });
  it('assertStartAtZero true', function () {
    var res = (0, _variables.assertStartAtZero)({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(res).toEqual(true);
  });
  it('assertStartAtZero false', function () {
    var res = (0, _variables.assertStartAtZero)({
      sm: '576px',
      xs: '0',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(res).toEqual(false);
  });
});