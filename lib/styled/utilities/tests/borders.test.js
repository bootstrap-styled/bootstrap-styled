'use strict';

var _immutable = require('immutable');

var _borders = require('../borders');

describe('bootstrap borders utility', function () {
  it('getBordersUtilities should return a list of css utilities with rounded', function () {
    var css = (0, _borders.getBordersUtilities)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(381084790);
  });
  it('getBordersUtilities should return a list of css utilities without rounded', function () {
    var css = (0, _borders.getBordersUtilities)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(521233947);
  });
  it('getBordersUtilities should have arguments', function () {
    var css = (0, _borders.getBordersUtilities)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(381084790);
  });
  it('rounded should return a css with rounded', function () {
    var css = (0, _borders.rounded)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-919223289);
  });
  it('rounded should return a css without rounded', function () {
    var css = (0, _borders.rounded)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(101513786);
  });
  it('rounded should have arguments', function () {
    var css = (0, _borders.rounded)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-919223289);
  });
  it('roundedBottom should return a css with rounded', function () {
    var css = (0, _borders.roundedBottom)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(822841448);
  });
  it('roundedBottom should return a css without rounded', function () {
    var css = (0, _borders.roundedBottom)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-770947480);
  });
  it('roundedBottom should have arguments', function () {
    var css = (0, _borders.roundedBottom)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(822841448);
  });
  it('roundedCircle should have arguments', function () {
    var css = (0, _borders.roundedCircle)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-532555416);
  });
  it('roundedLeft should return a css with rounded', function () {
    var css = (0, _borders.roundedLeft)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(9903745);
  });
  it('roundedLeft should return a css without rounded', function () {
    var css = (0, _borders.roundedLeft)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(389482313);
  });
  it('roundedLeft should have arguments', function () {
    var css = (0, _borders.roundedLeft)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(9903745);
  });
  it('roundedRight should return a css with rounded', function () {
    var css = (0, _borders.roundedRight)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1051039386);
  });
  it('roundedRight should return a css without rounded', function () {
    var css = (0, _borders.roundedRight)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1062625927);
  });
  it('roundedRight should have arguments', function () {
    var css = (0, _borders.roundedRight)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1051039386);
  });
  it('roundedTop should return a css with rounded', function () {
    var css = (0, _borders.roundedTop)(_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(562932405);
  });
  it('roundedTop should return a css without rounded', function () {
    var css = (0, _borders.roundedTop)(!_borders.defaultProps['$enable-rounded'], _borders.defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-791518777);
  });
  it('roundedTop should have arguments', function () {
    var css = (0, _borders.roundedTop)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(562932405);
  });
  it('roundedCircle should return an utility', function () {
    var css = (0, _borders.roundedCircle)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-532555416);
  });
  it('resetBorder should return an utility', function () {
    var css = (0, _borders.resetBorder)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-362746140);
  });
  it('resetBorderTop should return an utility', function () {
    var css = (0, _borders.resetBorderTop)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-397720654);
  });
  it('resetBorderRight should return an utility', function () {
    var css = (0, _borders.resetBorderRight)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1042110320);
  });
  it('resetBorderBottom should return an utility', function () {
    var css = (0, _borders.resetBorderBottom)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(712395519);
  });
  it('resetBorderLeft should return an utility', function () {
    var css = (0, _borders.resetBorderLeft)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(514409208);
  });
  it('resetRounded should return an utility', function () {
    var css = (0, _borders.resetRounded)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-204501487);
  });
  it('resetRoundedTop should return an utility', function () {
    var css = (0, _borders.resetRoundedTop)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(47750857);
  });
  it('resetRoundedRight should return an utility', function () {
    var css = (0, _borders.resetRoundedRight)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-166463815);
  });
  it('resetRoundedBottom should return an utility', function () {
    var css = (0, _borders.resetRoundedBottom)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-626233766);
  });
  it('resetRoundedLeft should return an utility', function () {
    var css = (0, _borders.resetRoundedLeft)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(713920736);
  });
});