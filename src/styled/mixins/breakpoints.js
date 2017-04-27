import { unitUtils } from 'math-utils';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};
// Breakpoint viewport sizes and media queries.
//
// Breakpoints are defined as a map of (name: minimum width), order from small to large:
//
//    (xs: 0, sm: 544px, md: 768px)
//
// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.

// Name of the next breakpoint, or null for the last breakpoint.
//
//    >> breakpoint-next(sm)
//    md
//    >> breakpoint-next(sm, (xs: 0, sm: 544px, md: 768px))
//    md
//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))
//    md
export function breakpointNext(name, breakpoints = defaultProps['$grid-breakpoints'], breakpointNames = Object.keys(breakpoints)) {
  const n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 544px, md: 768px))
//    544px
export function breakpointMin(name, breakpoints = defaultProps['$grid-breakpoints']) {
  const min = breakpoints[name];
  return min !== '0' ? min : null;
}

// Maximum breakpoint width. Null for the largest (last) breakpoint.
// The maximum value is calculated as the minimum of the next one less 0.1.
//
//    >> breakpoint-max(sm, (xs: 0, sm: 544px, md: 768px))
//    767px
export function breakpointMax(name, breakpoints = defaultProps['$grid-breakpoints']) {
  const next = breakpointNext(name, breakpoints);
  if (next) {
    const min = unitUtils.rmUnit(breakpointMin(next, breakpoints), unitUtils.UNIT.PX);
    return (min - 1).toString() + unitUtils.UNIT.PX;
  }
  return null;
}


// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    "-sm"
export function breakpointInfix(name, breakpoints = defaultProps['$grid-breakpoints']) {
  return breakpointMin(name, breakpoints) == null ? '' : `-${name}`;
}

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and wider.
export function mediaBreakpointUp(name, breakpoints = defaultProps['$grid-breakpoints'], content) {
  const min = breakpointMin(name, breakpoints);
  if (min) {
    return `
      @media (min-width: ${min}) {
        ${content}
      }
    `;
  }
  return `
    ${content}
  `;
}

// Media of at most the maximum breakpoint width. No query for the largest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
export function mediaBreakpointDown(name, breakpoints = defaultProps['$grid-breakpoints'], content) {
  const max = breakpointMax(name, breakpoints);
  if (max) {
    return `
      @media (max-width: ${max}) {
        ${content}
      }
    `;
  }
  return `
    ${content}
  `;
}

// // Media that spans multiple breakpoint widths.
// // Makes the @content apply between the min and max breakpoints
// export function mediaBreakpointBetween(lower, upper, breakpoints = defaultProps['$grid-breakpoints'], content) {
//   return mediaBreakpointUp(lower, breakpoints, mediaBreakpointDown(upper, breakpoints, content));
// }
export function mediaBreakpointBetween(lower, upper, breakpoints = defaultProps['$grid-breakpoints'], content) {
  const min = breakpointMin(lower, breakpoints);
  const max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return `
      @media (min-width: ${min}) and (max-width: ${max}) {
        ${content}
      }
    `;
  } else if (min) {
    return `
      @media (min-width: ${min}) {
        ${content}
      }
    `;
  } else if (max) {
    return `
      @media (max-width: ${max}) {
        ${content}
      }
    `;
  }
  return `
    ${content}
  `;
}


// Media between the breakpoint's minimum and maximum widths.
// No minimum for the smallest breakpoint, and no maximum for the largest one.
// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
export function mediaBreakpointOnly(name, breakpoints = defaultProps['$grid-breakpoints'], content) {
  return mediaBreakpointBetween(name, name, breakpoints, content);
}

export default {
  defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly,
};
