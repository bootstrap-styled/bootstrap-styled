/**
 * Td component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Td extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const {
      className,
      color,
      ...attributes
    } = this.props;

    return (
      <td
        className={cn(className, {
          [`table-${color}`]: color,
        })}
        {...attributes}
      />
    );
  }
}
