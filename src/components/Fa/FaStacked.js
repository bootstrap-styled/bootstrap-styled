import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class FaStacked extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
  };

  render() {
    const {
      className,
      size,
      ...attributes
    } = this.props;

    return (
      <span
        className={cn(className, 'fa-stack', {
          [`fa-${size}`]: size,
        })}
        {...attributes}
      />
    );
  }
}


export default FaStacked;
