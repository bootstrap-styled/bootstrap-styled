import {
  defaultProps,
  breakpointNext,
  breakpointMin,
  breakpointMax,
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
  it('mediaBreakpointUp should return a media query', () => {
    const breakpointUp = mediaBreakpointUp('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(breakpointUp).toEqual('\n      @media (min-width: 768px) {\n        \n      content: \'awesome!\';\n    \n      }\n    ');
  });
  it('mediaBreakpointDown should return a media query', () => {
    const breakpointDown = mediaBreakpointDown('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(breakpointDown).toEqual('\n      @media (max-width: 991px) {\n        \n      content: \'awesome!\';\n    \n      }\n    ');
  });
  it('mediaBreakpointBetween should return a media query', () => {
    const breakpointBetween = mediaBreakpointBetween('md', 'lg', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(breakpointBetween).toEqual('\n      @media (min-width: 768px) {\n        \n      @media (max-width: 1199px) {\n        \n      content: \'awesome!\';\n    \n      }\n    \n      }\n    ');
  });
  it('mediaBreakpointOnly should return a media query', () => {
    const breakpointOnly = mediaBreakpointOnly('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(breakpointOnly).toEqual('\n      @media (min-width: 768px) {\n        \n      @media (max-width: 991px) {\n        \n      content: \'awesome!\';\n    \n      }\n    \n      }\n    ');
  });
});
