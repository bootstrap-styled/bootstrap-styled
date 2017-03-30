import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Fa extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { className, size, color, ...rest } = this.props;

    const classes = cn(
      className,
      'fa',
      size ? `fa-${size}` : false,
      color ? `text-${color}` : false,
    );
    return (
      <i className={cn(classes, Object.keys(rest).map((key) => `fa-${key}`))} />
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
