import { floatLeft, floatRight, floatNone } from '../mixins/float';
import { mediaBreakpointUp, breakpointInfix } from '../mixins/breakpoints';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export function getFloatUtilities(gridBreakpoints = defaultProps['$grid-breakpoints']) {
  const floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach((breakpoint) => {
    const infix = breakpointInfix(breakpoint, gridBreakpoints);
    const floatUtility = mediaBreakpointUp(breakpoint, gridBreakpoints, `
      .float${infix}-left {
        ${floatLeft()}
      }
      .float${infix}-right {
        ${floatRight()}
      }
      .float${infix}-none {
        ${floatNone()}
      }
    `);
    floatUtilityList.push(floatUtility);
  });

  return floatUtilityList.join('\n');
}

export default {
  defaultProps,
  getFloatUtilities,
};
