import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
    '',
  ]),
};

class FaStacked extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

FaStacked.propTypes = propTypes;

export default FaStacked;
