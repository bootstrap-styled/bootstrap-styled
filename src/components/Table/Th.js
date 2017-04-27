/**
 * Th component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Th extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
  };

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
      <th className={classes} {...attributes}>
        {children}
      </th>
    );
  }
}
