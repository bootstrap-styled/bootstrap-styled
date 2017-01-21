import { fromJS } from 'immutable';

import { defaultProps, breakpointNext, breakpointMin, breakpointMax, breakpointInfix, mediaBreakpointUp, mediaBreakpointDown, mediaBreakpointBetween, mediaBreakpointOnly } from '../breakpoints';

describe('bootstrap breakpoints mixins', function () {
  it('breakpointNext should return a css', function () {
    var breakpoint = breakpointNext('xs', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('sm');
    breakpoint = breakpointNext('sm', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('md');
    breakpoint = breakpointNext('md', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('lg');
    breakpoint = breakpointNext('lg', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('xl');
  });
  it('breakpointMin should be null', function () {
    var breakpoint = breakpointMin('xs', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('breakpointMin should be not null', function () {
    var breakpoint = breakpointMin('sm', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('576px');
  });
  it('breakpointMax should be not null', function () {
    var breakpoint = breakpointMax('sm', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('767px');
  });
  it('breakpointMax should be null', function () {
    var breakpoint = breakpointMax('xl', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('mediaBreakpointInfix should return ""', function () {
    var breakpoint = breakpointInfix('xs', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('');
  });
  it('mediaBreakpointInfix should return null', function () {
    var breakpoint = breakpointInfix('md', defaultProps['$grid-breakpoints']);
    expect(fromJS({ breakpoint: breakpoint }).hashCode()).toEqual(-636542927);
  });
  it('mediaBreakpointUp should return a media query', function () {
    var breakpointUp = mediaBreakpointUp('md', defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect(fromJS({ breakpointUp: breakpointUp }).hashCode()).toEqual(-575742520);
  });
  it('mediaBreakpointDown should return a media query', function () {
    var breakpointDown = mediaBreakpointDown('md', defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect(fromJS({ breakpointDown: breakpointDown }).hashCode()).toEqual(646243350);
  });
  it('mediaBreakpointBetween should return a media query', function () {
    var breakpointBetween = mediaBreakpointBetween('md', 'lg', defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect(fromJS({ breakpointBetween: breakpointBetween }).hashCode()).toEqual(758957517);
  });
  it('mediaBreakpointOnly should return a media query', function () {
    var breakpointOnly = mediaBreakpointOnly('md', defaultProps['$grid-breakpoints'], '\n      content: \'awesome!\';\n    ');
    expect(fromJS({ breakpointOnly: breakpointOnly }).hashCode()).toEqual(-169417565);
  });
});