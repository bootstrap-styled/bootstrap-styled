import { fromJS } from 'immutable';

import {
  defaultProps,
  breakpointNext,
  breakpointMin,
  breakpointMax,
  breakpointInfix,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointBetween,
  mediaBreakpointOnly,
} from '../breakpoints';

describe('bootstrap breakpoints mixins', () => {
  it('breakpointNext should return a css', () => {
    let breakpoint = breakpointNext('xs', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('sm');
    breakpoint = breakpointNext('sm', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('md');
    breakpoint = breakpointNext('md', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('lg');
    breakpoint = breakpointNext('lg', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('xl');
  });
  it('breakpointMin should be null', () => {
    const breakpoint = breakpointMin('xs', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('breakpointMin should be not null', () => {
    const breakpoint = breakpointMin('sm', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('576px');
  });
  it('breakpointMax should be not null', () => {
    const breakpoint = breakpointMax('sm', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('767px');
  });
  it('breakpointMax should be null', () => {
    const breakpoint = breakpointMax('xl', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toBeNull();
  });
  it('mediaBreakpointInfix should return ""', () => {
    const breakpoint = breakpointInfix('xs', defaultProps['$grid-breakpoints']);
    expect(breakpoint).toEqual('');
  });
  it('mediaBreakpointInfix should return null', () => {
    const breakpoint = breakpointInfix('md', defaultProps['$grid-breakpoints']);
    expect(fromJS({ breakpoint }).hashCode()).toEqual(-636542927);
  });
  it('mediaBreakpointUp should return a media query', () => {
    const breakpointUp = mediaBreakpointUp('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(fromJS({ breakpointUp }).hashCode()).toEqual(-575742520);
  });
  it('mediaBreakpointDown should return a media query', () => {
    const breakpointDown = mediaBreakpointDown('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(fromJS({ breakpointDown }).hashCode()).toEqual(646243350);
  });
  it('mediaBreakpointBetween should return a media query', () => {
    const breakpointBetween = mediaBreakpointBetween('md', 'lg', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(fromJS({ breakpointBetween }).hashCode()).toEqual(758957517);
  });
  it('mediaBreakpointOnly should return a media query', () => {
    const breakpointOnly = mediaBreakpointOnly('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(fromJS({ breakpointOnly }).hashCode()).toEqual(-169417565);
  });
});
