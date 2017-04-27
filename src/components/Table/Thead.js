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
  };

  render() {
    const {
      className,
      inverse,
      defaultBg,
      ...attributes
    } = this.props;

    return (
      <thead
        className={cn(className, {
          'thead-inverse': inverse,
          'thead-default': defaultBg,
        })}
        {...attributes}
      />
    );
  }
}
