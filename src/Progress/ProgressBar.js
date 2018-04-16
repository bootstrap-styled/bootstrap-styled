/* ProgressBar */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { rangeUtils } from 'basic-math-utils';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false,
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<ProgressBar />` component. */
  children: PropTypes.node,
  /** Defines the minimum value of the progress bar. */
  valueMin: PropTypes.number,
  /** Defines the current value of the progress bar. */
  valueNow: PropTypes.number,
  /** Defines the maximum value of the progress bar. */
  valueMax: PropTypes.number,
  /** Defines the size height. */
  height: PropTypes.string,
  /** Toggles striped CSS style. */
  striped: PropTypes.bool,
  /** Toggles animated CSS style. */
  animated: PropTypes.bool,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger',
    '',
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class ProgressBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

ProgressBar.defaultProps = defaultProps;
ProgressBar.propTypes = propTypes;

export default ProgressBar;
