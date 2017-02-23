import theme from 'theme';

export const defaultProps = theme;

// eslint-disable-next-line consistent-return
export function transition(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions && args.length) {
    return `
      transition: ${args.join(' ')};
    `;
  }
  return '';
}

export function getTransitionUtilities(
  enableTransitions = defaultProps['$enable-transitions'],
  transitionFade = defaultProps['$transition-fade'],
  transitionCollapse = defaultProps['$transition-collapse']
) {
  return `
    ${fade(enableTransitions, transitionFade)}
    ${collapse(enableTransitions, transitionCollapse)}
  `;
}

export function fade(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade']) {
  return `
    .fade {
      opacity: 0;
      ${transition(enableTransitions, transitionFade)}
    
      &.show {
        opacity: 1;
      }
    }
  `;
}

export function collapse(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse']) {
  return `
    .collapse {
      display: none;
      &.show {
        display: block;
      }
    }
    
    tr {
      &.collapse.show {
        display: table-row;
      }
    }
    
    tbody {
      &.collapse.show {
        display: table-row-group;
      }
    }
    
    .collapsing {
      position: relative;
      height: 0;
      overflow: hidden;
      ${transition(enableTransitions, transitionCollapse)}
    }
  `;
}

export default {
  defaultProps,
  transition,
  getTransitionUtilities,
  fade,
  collapse,
};
