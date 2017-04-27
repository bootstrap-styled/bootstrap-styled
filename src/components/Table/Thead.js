/**
 * Thead component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Thead extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    inverse: PropTypes.bool,
    defaultBg: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const {
      className,
      inverse,
      children,
      defaultBg,
      ...attributes
    } = this.props;

    const classes = cn(
      className,
      inverse ? 'thead-inverse' : false,
      defaultBg ? 'thead-default' : false,
    );
    return (
      <thead className={classes} {...attributes}>
        {children}
      </thead>
    );
  }
}
