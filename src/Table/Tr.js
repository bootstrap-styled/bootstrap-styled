/**
 * Tr component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Td />` component. */
  children: PropTypes.node,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'active',
    'success',
    'info',
    'warning',
    'danger',
    '',
  ]),
};

class Tr extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = propTypes;

  render() {
    const {
      className,
      color,
      children,
      ...attributes
    } = this.props;

    const classes = cn(
      className,
      color ? `table-${color}` : false,
    );
    return (
      <tr className={classes} {...attributes}>
        {children}
      </tr>
    );
  }
}

Tr.propTypes = propTypes;

export default Tr;
