import { breakpointMin, mediaBreakpointUp } from '../mixins/breakpoints';

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
  zindexNavbarFixed = defaultProps['$zindex-navbar-fixed'],
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
        const min = breakpointMin(breakpoint, gridBreakpoints);
        if (min) {
          spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, `
            @media (min-width: ${min}) {
              .${abbrev}-${breakpoint}-${size} { ${prop}:        ${lengths.y} ${lengths.x} !important; } /* a = All sides */
              .${abbrev}t-${breakpoint}-${size} { ${prop}-top:    ${lengths.y} !important; }
              .${abbrev}r-${breakpoint}-${size} { ${prop}-right:  ${lengths.x} !important; }
              .${abbrev}b-${breakpoint}-${size} { ${prop}-bottom: ${lengths.y} !important; }
              .${abbrev}l-${breakpoint}-${size} { ${prop}-left:   ${lengths.x} !important; }
              .${abbrev}a-${breakpoint}-${size} {
                ${prop}-top:    ${lengths.y} !important;
                ${prop}-bottom: ${lengths.y} !important;
                ${prop}-right:  ${lengths.x} !important;
                ${prop}-left:   ${lengths.x} !important;
              }
              .${abbrev}x-${breakpoint}-${size} {
                ${prop}-right:  ${lengths.x} !important;
                ${prop}-left:   ${lengths.x} !important;
              }
              .${abbrev}y-${breakpoint}-${size} {
                ${prop}-top:    ${lengths.y} !important;
                ${prop}-bottom: ${lengths.y} !important;
              }
            }
          `));
        } else {
          spacingUtilityList.push(`
            /* xs */
            .${abbrev}-${size} { ${prop}:        ${lengths.y} ${lengths.x} !important; } /* a = All sides */
            .${abbrev}t-${size} { ${prop}-top:    ${lengths.y} !important; }
            .${abbrev}r-${size} { ${prop}-right:  ${lengths.x} !important; }
            .${abbrev}b-${size} { ${prop}-bottom: ${lengths.y} !important; }
            .${abbrev}l-${size} { ${prop}-left:   ${lengths.x} !important; }
            .${abbrev}a-${size} {
              ${prop}-top:    ${lengths.y} !important;
              ${prop}-bottom: ${lengths.y} !important;
              ${prop}-right:  ${lengths.x} !important;
              ${prop}-left:   ${lengths.x} !important;
            }
            .${abbrev}x-${size} {
              ${prop}-right:  ${lengths.x} !important;
              ${prop}-left:   ${lengths.x} !important;
            }
            .${abbrev}y-${size} {
              ${prop}-top:    ${lengths.y} !important;
              ${prop}-bottom: ${lengths.y} !important;
            }
          `);
        }
      });
    });
  });

  return `
    /* Width and height */
    
    .w-100 { width: 100% !important; }
    .h-100 { height: 100% !important; }
    
    /* Margin and Padding */
    
    .mx-auto {
      margin-right: auto !important;
      margin-left:  auto !important;
    }
    
    ${spacingUtilityList.join('\n')}
    
    /* Positioning */
    
    .pos-f-t {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: ${zindexNavbarFixed};
    }
  `;
}

export default {
  defaultProps,
  getSpacingUtilities,
};
