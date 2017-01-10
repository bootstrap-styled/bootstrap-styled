import { floatLeft, floatRight, floatNone } from '../mixins/float';
import { mediaBreakpointUp } from '../mixins/breakpoints';

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
    const floatUtility = mediaBreakpointUp(breakpoint, gridBreakpoints, `
      .float-${breakpoint}-left {
        ${floatLeft()}
      }
      .float-${breakpoint}-right {
        ${floatRight()}
      }
      .float-${breakpoint}-none {
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
