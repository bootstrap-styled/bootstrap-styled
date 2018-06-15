/**
 * Thead component
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
  /** Toggles inverse CSS style. */
  inverse: PropTypes.bool,
  /** Toggles default background CSS style. */
  defaultBg: PropTypes.bool,
};

class Thead extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = propTypes;

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

Thead.propTypes = propTypes;

export default Thead;
