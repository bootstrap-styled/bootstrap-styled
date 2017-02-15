/**
 * NavBar
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Button from 'components/Button';

export default class NavBarToggler extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    left: PropTypes.bool,
    right: PropTypes.bool,
  };

  render() {
    const { className, theme, left, right, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Button
        className={cn(className, 'navbar-toggler', {
          'navbar-toggler-left': left,
          'navbar-toggler-right': right,
        })}
        type="button"
        onClick={this.props.onClick} {...rest}
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
    );
  }
}
