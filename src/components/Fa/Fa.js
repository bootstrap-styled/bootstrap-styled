import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

class Fa extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
  };

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
// eslint-disable-next-line no-class-assign
Fa = styled(Fa)`
  &.fa-lg {
    vertical-align: -2%;
  }
`;

export default Fa;
