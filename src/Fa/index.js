import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Size variables. Can be: */
  size: PropTypes.oneOf([
    'lg',
    '2x',
    '3x',
    '4x',
    '5x',
  ]),
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger',
    'white',
    'gray-dark',
    'primary',
    'hide',
  ]),
};

class FaUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      size,
      color,
      ...attributes
    } = this.props;

    const classes = cn(className, 'fa', {
      [`text-${color}`]: color,
      [`fa-${size}`]: size,
    });

    return (
      <i
        className={cn(classes, Object.keys(attributes).map((key) => `fa-${key}`))}
      />
    );
  }
}

const Fa = styled(FaUnstyled)`
  &.fa-lg {
    vertical-align: -2%;
  }
`;

Fa.propTypes = propTypes;

/** @component */
export default Fa;
