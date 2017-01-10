/* Progress (Animation Bar) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from 'config';
import { progressVariant } from '../../styled/mixins/progress';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { gradientStriped } from '../../styled/mixins/gradients';
import { getTextUtilities } from '../../styled/utilities/text';

const defaultProps = { theme };

class Progress extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    max: PropTypes.string,
  }

  render() {
    const { value, max } = this.props;

    return (
      <progress
        className={cn(this.props.className, 'progress')}
        value={value}
        max={max}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Progress = styled(Progress)`
  ${(props) => `
    /* Progress animations */

    @keyframes progress-bar-stripes {
      from { background-position: ${props.theme['$spacer-y']} 0 };
      to { background-position: 0 0; }
    }

    /* Basic progress bar */

    &.progress {
      display: block;
      width: 100%;
      height: ${props.theme['$spacer-y']} /* todo: make a new var for this */
      margin-bottom: ${props.theme['$spacer-y']};
    }
    &.progress[value] {
      /* Set overall background */
      background-color: ${props.theme['$progress-bg']};
      /* Remove Firefox and Opera border */
      border: 0;
      /* Reset the default appearance */
      appearance: none;
      /* Set overall border radius */
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
    }

    /* Filled-in portion of the bar */
    &.progress[value]::-ms-fill {
      background-color: ${props.theme['$progress-bar-color']};
      /* Remove right-hand border of value bar from IE10+/Edge */
      border: 0;
    }
    &.progress[value]::-moz-progress-bar {
      background-color: ${props.theme['$progress-bar-color']};
      ${borderLeftRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
    }
    &.progress[value]::-webkit-progress-value {
      background-color: ${props.theme['$progress-bar-color']};
      ${borderLeftRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
    }
    /* Tweaks for full progress bar */
    &.progress[value="100"]::-moz-progress-bar {
      ${borderRightRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
    }
    &.progress[value="100"]::-webkit-progress-value {
      ${borderRightRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
    }

    /* Unfilled portion of the bar */
    &.progress[value]::-webkit-progress-bar {
      background-color: ${props.theme['$progress-bg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$progress-box-shadow']
      )}
    }
    base::-moz-progress-bar, /* Absurd-but-syntactically-valid selector to make these styles Firefox-only */
    &.progress[value] {
      background-color: ${props.theme['$progress-bg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$progress-box-shadow']
      )}
    }

    /* IE9 hacks to accompany custom markup. We don't need to scope this via media queries, but I feel better doing it anyway. */
    @media screen and (min-width:0\0) {
      &.progress {
        background-color: ${props.theme['$progress-bg']};
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$progress-border-radius']
        )}
        ${boxShadow(
          props.theme['$enable-shadows'],
          props.theme['$progress-box-shadow']
        )}
      }
      &.progress-bar {
        display: inline-block;
        height: ${props.theme['$spacer-y']};
        text-indent: -999rem;  /* Simulate hiding of value as in native '<progress>' */
        background-color: ${props.theme['$progress-bar-color']};
        ${borderLeftRadius(
          props.theme['$enable-rounded'],
          props.theme['$progress-border-radius']
        )}
      }
      &.progress[width="100%"] {
        ${borderRightRadius(
          props.theme['$enable-rounded'],
          props.theme['$progress-border-radius']
        )}
      }
    }

    /* Striped */

    &.progress-striped[value]::-webkit-progress-value {
      ${gradientStriped()}
      background-size: ${props.theme['$spacer-y']} ${props.theme['$spacer-y']};
    }
    &.progress-striped[value]::-moz-progress-bar {
      ${gradientStriped()}
      background-size: ${props.theme['$spacer-y']} ${props.theme['$spacer-y']};
    }
    &.progress-striped[value]::-ms-fill {
      ${gradientStriped()}
      background-size: ${props.theme['$spacer-y']} ${props.theme['$spacer-y']};
    }
    /* IE9 */
    @media screen and (min-width:0\0) {
      &.progress-bar-striped {
        ${gradientStriped()}
        background-size: ${props.theme['$spacer-y']} ${props.theme['$spacer-y']};
      }
    }

    /* Animated */

    &.progress-animated[value]::-webkit-progress-value {
      animation: progress-bar-stripes 2s linear infinite;
    }
    &.progress-animated[value]::-moz-progress-bar {
      animation: progress-bar-stripes 2s linear infinite;
    }
    /* IE9 */
    @media screen and (min-width:0\0) {
      &.progress-animated .progress-bar-striped {
        animation: progress-bar-stripes 2s linear infinite;
      }
    }

    /* Variations */

    &.progress-success {
      ${progressVariant(
        props.theme['$progress-bar-success-bg']
      )}
    }
    &.progress-info {
      ${progressVariant(
        props.theme['$progress-bar-info-bg']
      )}
    }
    &.progress-warning {
      ${progressVariant(
        props.theme['$progress-bar-warning-bg']
      )}
    }
    &.progress-danger {
      ${progressVariant(
        props.theme['$progress-bar-danger-bg']
      )}
    }
    ${getTextUtilities()}
  `}
`;

Progress.defaultProps = defaultProps;

export default Progress;
