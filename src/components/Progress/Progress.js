/* Progress */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import bsTheme from 'theme';
import styled, { keyframes } from 'styled-components';
import { borderRadius } from '../../styled/mixins/border-radius';
import { getBackgroundUtilities } from '../../styled/utilities/background';
import { gradientStriped } from '../../styled/mixins/gradients';

const defaultProps = {
  theme: bsTheme,
};

class Progress extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { children, className, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
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

// eslint-disable-next-line no-class-assign
Progress = styled(Progress)`
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

export default Progress;
