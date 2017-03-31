import theme from 'theme';
import { transition } from '../mixins/transition';
export const defaultProps = theme;

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
    .fade,
     &.fade {
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

export function parseTransition(enableTransitions = defaultProps['$enable-transitions'], transitionValue) {
  let durationInMs;
  let delayInMs;
  let transitionAsList = [];
  if (enableTransitions) {
    transitionAsList = transitionValue.split(' ');

    // Setting duration to milliseconds
    const durationIsInMs = transitionAsList[1].includes('ms');
    const durationFloatValue = parseFloat(transitionAsList[1]);
    durationInMs = durationIsInMs ? durationFloatValue : durationFloatValue * 1000;

    // Setting delay to milliseconds
    if (transitionAsList[3]) {
      const delayIsInMs = transitionAsList[3].includes('ms');
      const delayFloatValue = parseFloat(transitionAsList[3]);
      delayInMs = delayIsInMs ? delayFloatValue : delayFloatValue * 1000;
    } else {
      delayInMs = null;
    }
  } else {
    durationInMs = 1;
  }

  return {
    property: transitionAsList[0],
    duration: durationInMs,
    functionTiming: transitionAsList[2],
    delay: delayInMs,
  };
}

export default {
  defaultProps,
  getTransitionUtilities,
  parseTransition,
  fade,
  collapse,
};
