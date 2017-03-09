/* ProgressBar */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import { rangeUtils } from 'math-utils';
import { mapToCssModules } from '../../styled/utilities/tools';

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
    cssModule: PropTypes.object,
    color: PropTypes.string,

  }

  state = {
    classNameProgress: '',
    classNameProgressBar: '',
  }

  getWidth(valueNow, valueMin, valueMax) {
    return `${rangeUtils.mapBetween(valueNow, valueMin, valueMax)}%`;
  }

  render() {
    const {
      children,
      color,
      className,
      cssModule,
      valueNow,
      valueMin,
      valueMax,
      height,
      striped,
      animated,
      ...rest
    } = this.props; // eslint-disable-line no-unused-vars

    const progressBarClasses = mapToCssModules(cn(
      className,
      'progress-bar',
      animated ? 'progress-bar-animated' : null,
      color ? `bg-${color}` : null,
      striped || animated ? 'progress-bar-striped' : null
    ), cssModule);

    return (
      <div
        className={progressBarClasses}
        style={Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height })}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
