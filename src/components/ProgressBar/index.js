/* Progress (Animation Bar) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled, { keyframes } from 'styled-components';
import { rangeUtils } from 'math-utils';
import theme from 'theme';
import { borderRadius } from '../../styled/mixins/border-radius';
import { getBackgroundUtilities } from '../../styled/utilities/background';
import { gradientStriped } from '../../styled/mixins/gradients';

const defaultProps = {
  theme,
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false,
};

class Progress extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node,
    valueMin: PropTypes.number,
    valueNow: PropTypes.number,
    valueMax: PropTypes.number,
    height: PropTypes.string,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
  }

  TO_PROGRESS_BAR_LIST = [ // eslint-disable-line react/sort-comp
    'bg-faded',
    'bg-primary',
    'bg-success',
    'bg-info',
    'bg-warning',
    'bg-danger',
    'bg-inverse',
  ];

  state = {
    classNameProgress: '',
    classNameProgressBar: '',
  }

  setClassList() {
    const { className } = this.props;
    const classNameList = className.split(' ');

    const classNameProgressList = [];
    const classNameProgressBarList = [];
    classNameList.forEach((oneClass) => {
      if (this.TO_PROGRESS_BAR_LIST.indexOf(oneClass) === -1) {
        classNameProgressList.push(oneClass);
      } else {
        classNameProgressBarList.push(oneClass);
      }
    });
    this.setState({
      classNameProgress: classNameProgressList.join(' '),
      classNameProgressBar: classNameProgressBarList.join(' '),
    });
  }

  componentWillMount() {
    this.setClassList();
  }

  getWidth(valueNow, valueMin, valueMax) {
    return `${rangeUtils.mapBetween(valueNow, valueMin, valueMax)}%`;
  }

  render() {
    const { children, valueNow, valueMin, valueMax, height, striped, animated } = this.props;
    const { classNameProgress, classNameProgressBar } = this.state;
    return (
      <div className={cn('progress', classNameProgress)}>
        <div
          className={cn('progress-bar', classNameProgressBar, {
            'progress-bar-striped': striped,
            'progress-bar-animated': animated,
          })}
          style={Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height })}
        >
          {children}
        </div>
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
