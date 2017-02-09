export const defaultProps = {
  '$enable-transitions': false,
  '$transition-base': 'all .2s ease-in-out',
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease',
};

// eslint-disable-next-line consistent-return
export function transition(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions) {
    return `
      transition: ${args.join(' ')};
    `;
  }
  return '';
}

export function fadeWithClass(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade'], ...args) {
  return `
    &.fade {
      ${fade(enableTransitions, transitionFade, ...args)}
    }
  `;
}

export function fade(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade'], ...args) {
  return `
    opacity: 0;
    ${transition(enableTransitions, transitionFade, ...args)};

    &.in {
      opacity: 1;
    }
  `;
}


export function collapseWithClass(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse'], ...args) {
  return `
    &.collapse {
      ${collapse(enableTransitions, transitionCollapse, ...args)}
    }
  `;
}

export function collapse(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse'], ...args) {
  return `
    display: none;
    ${transition(enableTransitions, transitionCollapse, ...args)};
    
    &.in {
      display: block;
    }
  `;
}

export function collapsingWithClass(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse'], ...args) {
  return `
    &.collapsing {
      ${collapsing(enableTransitions, transitionCollapse, ...args)}
    }
  `;
}

export function collapsing(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse'], ...args) {
  return `
    position: relative;
    height: 0;
    overflow: hidden;
    ${transition(enableTransitions, transitionCollapse, ...args)};
  `;
}

export function collapseTrWithClass() {
  return `
    tr {
      &.collapse.in {
        ${collapseTr()}
      }
    }
  `;
}

export function collapseTr() {
  return `
    display: table-row;
  `;
}

export function collapseTbodyWithClass() {
  return `
    tbody {
      &.collapse.in {
        ${collapseTbody()}
      }
    }
  `;
}

export function collapseTbody() {
  return `
    display: table-row-group;
  `;
}

export default {
  defaultProps,
  transition,
  fadeWithClass,
  fade,
  collapseWithClass,
  collapse,
  collapseTrWithClass,
  collapseTr,
  collapseTbodyWithClass,
  collapseTbody,
  collapsingWithClass,
  collapsing,
};
