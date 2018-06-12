/* Progress */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import styled, { keyframes } from 'styled-components';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { getBackgroundUtilities } from 'bootstrap-styled-mixins/lib/utilities/background';
import { gradientStriped } from 'bootstrap-styled-mixins/lib/gradients';


export const defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$progress-height': '1rem',
    '$progress-font-size': '.75rem',
    '$progress-bg': '#eceeef',
    '$progress-border-radius': '.25rem',
    '$progress-box-shadow': 'inset 0 .1rem .1rem rgba(0, 0, 0, 0.1)',
    '$progress-bar-color': '#fff',
    '$progress-bar-bg': '#0275d8',
    '$progress-bar-animation-timing': 'infinite',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Progress />` component. */
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$progress-height': PropTypes.string,
    '$progress-font-size': PropTypes.string,
    '$progress-bg': PropTypes.string,
    '$progress-border-radius': PropTypes.string,
    '$progress-box-shadow': PropTypes.string,
    '$progress-bar-color': PropTypes.string,
    '$progress-bar-bg': PropTypes.string,
    '$progress-bar-animation-timing': PropTypes.string,
  }),
};
class ProgressUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      children,
      className,
      ...rest
    } = omit(this.props, ['theme']);

    return (
      <div className={cn('progress', className)} {...rest}>
        {children}
      </div>
    );
  }
}

const backgroundPositionKeyFrame = (props) => keyframes`
  from { background-position: ${props.theme['$progress-height']} 0; }
  to { background-position: 0 0; }
`;
/**
 * A classic `<Progress />` component. Can be used with **customized** value.
 * You can also control `height` and `backgrounds` colors or **multiple bars**.
 * Striped or Animated stripes.
 */
const Progress = styled(ProgressUnstyled)`
  ${(props) => `
    
    &.progress {
      display: flex;
      overflow: hidden; // force rounded corners by cropping it
      font-size: ${props.theme['$progress-font-size']};
      line-height: ${props.theme['$progress-height']};
      text-align: center;
      background-color: ${props.theme['$progress-bg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$progress-border-radius']
      )}
      ${getBackgroundUtilities(
        props.theme['$enable-hover-media-query'],
        props.theme['$brand-primary'],
        props.theme['$brand-success'],
        props.theme['$brand-info'],
        props.theme['$brand-warning'],
        props.theme['$brand-danger'],
        props.theme['$brand-inverse'],
        props.theme['$gray-lightest'],
      )}
    }
    
    .progress-bar {
      height: ${props.theme['$progress-height']};
      line-height: ${props.theme['$progress-height']};
      color: ${props.theme['$progress-bar-color']};
      background-color: ${props.theme['$progress-bar-bg']};
    }
    
    .progress-bar-striped {
      ${gradientStriped()}
      background-size: ${props.theme['$progress-height']} ${props.theme['$progress-height']};
      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */
    }
    
    .progress-bar-animated {
      animation: ${backgroundPositionKeyFrame(props)} ${props.theme['$progress-bar-animation-timing']};
    }

  `}
`;

Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;

/** @component */
export default Progress;
