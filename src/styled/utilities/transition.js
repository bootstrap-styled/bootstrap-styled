import theme from 'theme';
import parseTransition from 'utils/parseTransition';
import { transition as transitionMixin, transform } from '../mixins/transition';

export const defaultProps = theme;

export function getTransitionUtilities(
  enableTransitions = defaultProps['$enable-transitions'],
  transitionFade = defaultProps['$transition-fade'],
  transitionCollapse = defaultProps['$transition-collapse'],
  transformSwapFadeFrom = defaultProps['$transform-swap-fade-from'],
  transformSwapFadeTo = defaultProps['$transform-swap-fade-to'],
  motionCssPropertyEnter = defaultProps['$motion-css-transition-property-enter'],
  motionTransitionEnter = defaultProps['$motion-css-transition-enter'],
  motionCssPropertyEnterActive = defaultProps['$motion-css-transition-property-enter-active'],
  motionCssPropertyLeave = defaultProps['$motion-css-transition-property-leave'],
  motionTransitionLeave = defaultProps['$motion-css-transition-leave'],
  motionCssPropertyLeaveActive = defaultProps['$motion-css-transition-property-leave-active'],
) {
  return `
    ${fade(enableTransitions, transitionFade)}
    ${collapse(enableTransitions, transitionCollapse)}
    ${swapFade(enableTransitions, transformSwapFadeFrom, transformSwapFadeTo)}
    ${makeReactTransition(enableTransitions, motionCssPropertyEnter, motionCssPropertyEnterActive, motionTransitionEnter, motionCssPropertyLeave, motionCssPropertyLeaveActive, motionTransitionLeave)}
  `;
}

export function fade(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade']) {
  return `
    .fade,
     &.fade {
      opacity: 0;
      ${transitionMixin(enableTransitions, transitionFade)}
    
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
      ${transitionMixin(enableTransitions, transitionCollapse)}
    }
  `;
}


// function for get react transition (could even use filter and transform from mixin transition)
export function getReactTransition(enableTransition, transition) {
  const transitionList = parseTransition(transition);
  const property = transitionList[0].property;
  const duration = transitionList[0].duration;
  const timingFunction = transitionList[0].timingFunction;
  const delay = transitionList[0].delay;

  return transitionMixin(enableTransition, `${property} ${duration}ms ${timingFunction} ${delay}ms`);
}

// function for create react css transition rules
export function makeReactTransition(motionCssPropertyEnter = defaultProps['$motion-css-property-enter'], motionCssPropertyEnterActive = defaultProps['$motion-css-property-enter-active'], motionTransitionEnter = defaultProps['$motion-transition-enter'], motionCssPropertyLeave = defaultProps['$motion-css-property-leave'], motionCssPropertyLeaveActive = defaultProps['$motion-css-property-leave-active'], motionTransitionLeave = defaultProps['$motion-transition-leave']) {
  return `
    .enter,
     &.enter {
      ${motionCssPropertyEnter}
      ${motionTransitionEnter}
    
      &.enter-active {
        ${motionCssPropertyEnterActive}
      }
    }
    
    .leave,
     &.leave {
      ${motionCssPropertyLeave}
      ${motionTransitionLeave}
    
      &.leave-active {
        ${motionCssPropertyLeaveActive}
      }
    }
  `;
}

// Custom example for React Css Transition Group example (swapFade sample)
export function swapFade(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade'], transformSwapFadeFrom = defaultProps['$transform-swap-fade-from'], transformSwapFadeTo = defaultProps['$transform-swap-fade-to']) {
  return `
    ${fade(enableTransitions, transitionFade)}
    .fade {
      ${transform(transformSwapFadeFrom)}
      &.show {
        ${transform(transformSwapFadeTo)}
      }
    }
  `;
}

export default {
  defaultProps,
  getTransitionUtilities,
  fade,
  collapse,
  makeReactTransition,
  getReactTransition,
  swapFade,
};
