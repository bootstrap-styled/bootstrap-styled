import { breakpointInfix, mediaBreakpointUp } from '../mixins/breakpoints';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$zindex-navbar-fixed': '1030',
  '$spacers': {  // eslint-disable-line quote-props
    0: {
      x: 0,
      y: 0,
    },
    1: {
      x: '0.25rem',
      y: '0.25rem',
    },
    2: {
      x: '0.5rem',
      y: '0.5rem',
    },
    3: {
      x: '1rem',
      y: '1rem',
    },
    4: {
      x: '1.5rem',
      y: '1.5rem',
    },
    5: {
      x: '3rem',
      y: '3rem',
    },
  },
};

export function getSpacingUtilities(
  gridBreakpoints = defaultProps['$grid-breakpoints'],
  spacers = defaultProps['$spacers'] // eslint-disable-line dot-notation
) {
  const abbrevs = {
    margin: 'm',
    padding: 'p',
  };

  const spacingUtilityList = [];
  Object.keys(gridBreakpoints).forEach((breakpoint) => {
    Object.keys(abbrevs).forEach((prop) => {
      const abbrev = abbrevs[prop];
      Object.keys(spacers).forEach((size) => {
        const lengths = spacers[size];
        const infix = breakpointInfix(breakpoint, gridBreakpoints);
        spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, `

        .${abbrev}${infix}-${size} { ${prop}:        ${lengths.y} ${lengths.x} !important; } /* a = All sides */
        .${abbrev}t${infix}-${size} { ${prop}-top:    ${lengths.y} !important; }
        .${abbrev}r${infix}-${size} { ${prop}-right:  ${lengths.x} !important; }
        .${abbrev}b${infix}-${size} { ${prop}-bottom: ${lengths.y} !important; }
        .${abbrev}l${infix}-${size} { ${prop}-left:   ${lengths.x} !important; }
        .${abbrev}x${infix}-${size} {
          ${prop}-right:  ${lengths.x} !important;
          ${prop}-left:   ${lengths.x} !important;
        }
        .${abbrev}y${infix}-${size} {
          ${prop}-top:    ${lengths.y} !important;
          ${prop}-bottom: ${lengths.y} !important;
        }
        
        .m${infix}-auto  { margin:        auto !important; }
        .mt${infix}-auto { margin-top:    auto !important; }
        .mr${infix}-auto { margin-right:  auto !important; }
        .mb${infix}-auto { margin-bottom: auto !important; }
        .ml${infix}-auto { margin-left:   auto !important; }
        .mx${infix}-auto {
          margin-right: auto !important;
          margin-left:  auto !important;
        }
        .my${infix}-auto {
          margin-top:    auto !important;
          margin-bottom: auto !important;
        }
        `));
      });
    });
  });
  return spacingUtilityList.join('\n');
}

export default {
  defaultProps,
  getSpacingUtilities,
};
