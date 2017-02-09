/* ProgressBar */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import { rangeUtils } from 'math-utils';

export default class ProgressBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    valueMin: 0,
    valueMax: 100,
    valueNow: 0,
    striped: false,
    animated: false,
  };

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    valueMin: PropTypes.number,
    valueNow: PropTypes.number,
    valueMax: PropTypes.number,
    height: PropTypes.string,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
  }

  state = {
    classNameProgress: '',
    classNameProgressBar: '',
  }

  getWidth(valueNow, valueMin, valueMax) {
    return `${rangeUtils.mapBetween(valueNow, valueMin, valueMax)}%`;
  }

  render() {
    const { children, className, valueNow, valueMin, valueMax, height, striped, animated } = this.props;
    return (
      <div
        className={cn('progress-bar', className, {
          'progress-bar-striped': striped,
          'progress-bar-animated': animated,
        })}
        style={Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height })}
      >
        {children}
      </div>
    );
  }
}
