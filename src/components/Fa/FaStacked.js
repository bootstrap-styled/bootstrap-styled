import React, { PropTypes } from 'react';
import cn from 'classnames';

class FaStacked extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { className, size, children, ...rest } = this.props;

    const classes = cn(
      className,
      'fa-stack',
      size ? `fa-${size}` : false,
    );
    return (
      <span className={classes} {...rest}>{children}</span>
    );
  }
}


export default FaStacked;
