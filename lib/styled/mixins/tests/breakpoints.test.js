'use strict';

var _immutable = require('immutable');

var _breakpoints = require('../breakpoints');

describe('bootstrap breakpoints mixins', function () {
  it('breakpointNext should return a css', function () {
    var breakpoint = (0, _breakpoints.breakpointNext)('xs', _breakpoints.defaultProps['$grid-breakpoints'], Object.keys(_breakpoints.defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('sm');
    breakpoint = (0, _breakpoints.breakpointNext)('sm', _breakpoints.defaultProps['$grid-breakpoints'], Object.keys(_breakpoints.defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('md');
    breakpoint = (0, _breakpoints.breakpointNext)('md', _breakpoints.defaultProps['$grid-breakpoints'], Object.keys(_breakpoints.defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('lg');
    breakpoint = (0, _breakpoints.breakpointNext)('lg', _breakpoints.defaultProps['$grid-breakpoints'], Object.keys(_breakpoints.defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('xl');
  });
  it('breakpointNext should return null if not arguments are passed', function () {
    var breakpoint = (0, _breakpoints.breakpointNext)();
    expect(breakpoint).toBeNull();
  });
  it('breakpointMin should be null', function () {
    var breakpoint = (0, _breakpoints.breakpointMin)('xs', _breakpoints.defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('breakpointMin should be not null', function () {
    var breakpoint = (0, _breakpoints.breakpointMin)('sm', _breakpoints.defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('576px');
  });
  it('breakpointMin should return null if no arguments are passed', function () {
    var breakpoint = (0, _breakpoints.breakpointMin)();
    expect(breakpoint).toBeUndefined();
  });
  it('breakpointMax should be not null', function () {
    var breakpoint = (0, _breakpoints.breakpointMax)('sm', _breakpoints.defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('767px');
  });
  it('breakpointMax should be null', function () {
    var breakpoint = (0, _breakpoints.breakpointMax)('xl', _breakpoints.defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('breakpointMax should return null if no arguments are passed', function () {
    var breakpoint = (0, _breakpoints.breakpointMax)();
    expect(breakpoint).toBeNull();
  });
  it('mediaBreakpointInfix should return ""', function () {
    var breakpoint = (0, _breakpoints.breakpointInfix)('xs', _breakpoints.defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('');
  });
  it('mediaBreakpointInfix should return null', function () {
    var breakpoint = (0, _breakpoints.breakpointInfix)('md', _breakpoints.defaultProps['$grid-breakpoints']);
    expect((0, _immutable.fromJS)({ breakpoint: breakpoint }).hashCode()).toEqual(-636542927);
  });
  it('breakpointInfix should return null if no arguments are passed', function () {
    var breakpoint = (0, _breakpoints.breakpointInfix)();
    expect(breakpoint).toEqual('');
  });
  it('mediaBreakpointUp should return a media query', function () {
    var breakpointUp = (0, _breakpoints.mediaBreakpointUp)('md', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointUp: breakpointUp }).hashCode()).toEqual(-575742520);
  });
  it('mediaBreakpointUp should return null if no arguments are passed', function () {
    var breakpoint = (0, _breakpoints.mediaBreakpointUp)();
    expect((0, _immutable.fromJS)({ breakpoint: breakpoint }).hashCode()).toEqual(830318494);
  });
  it('mediaBreakpointDown should return a media query', function () {
    var breakpointDown = (0, _breakpoints.mediaBreakpointDown)('md', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointDown: breakpointDown }).hashCode()).toEqual(646243350);
  });
  it('mediaBreakpointDown should return null if no arguments are passed', function () {
    var breakpoint = (0, _breakpoints.mediaBreakpointDown)();
    expect((0, _immutable.fromJS)({ breakpoint: breakpoint }).hashCode()).toEqual(830318494);
  });
  it('mediaBreakpointBetween should return a media query', function () {
    var breakpointBetween = (0, _breakpoints.mediaBreakpointBetween)('md', 'lg', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointBetween: breakpointBetween }).hashCode()).toEqual(-404328369);
  });
  it('mediaBreakpointBetween should return a max media query', function () {
    var breakpointBetween = (0, _breakpoints.mediaBreakpointBetween)('xs', 'lg', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointBetween: breakpointBetween }).hashCode()).toEqual(-796235382);
  });
  it('mediaBreakpointBetween should return a min media query', function () {
    var breakpointBetween = (0, _breakpoints.mediaBreakpointBetween)('md', 'xl', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointBetween: breakpointBetween }).hashCode()).toEqual(-649979136);
  });
  it('mediaBreakpointBetween should return null if no arguments are passed', function () {
    var breakpointBetween = (0, _breakpoints.mediaBreakpointBetween)();
    expect((0, _immutable.fromJS)({ breakpointBetween: breakpointBetween }).hashCode()).toEqual(-278836038);
  });
  it('mediaBreakpointOnly should return a media query', function () {
    var breakpointOnly = (0, _breakpoints.mediaBreakpointOnly)('md', _breakpoints.defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect((0, _immutable.fromJS)({ breakpointOnly: breakpointOnly }).hashCode()).toEqual(28698806);
  });
  it('mediaBreakpointOnly should return null if no arguments are passed', function () {
    var breakpointOnly = (0, _breakpoints.mediaBreakpointOnly)();
    expect((0, _immutable.fromJS)({ breakpointOnly: breakpointOnly }).hashCode()).toEqual(-1061716533);
  });
});