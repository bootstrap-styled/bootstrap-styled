/**
 * A button with natures
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';
import { button } from '../../styled/utilities/button';

const defaultProps = { theme };

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    type: PropTypes.string,
    'dropdown-toggle': PropTypes.bool,
    dropup: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { type, onClick, disabled } = this.props;
    const cssClasses = cn(this.props.className, {
      disabled: this.props.disabled,
      outline: this.props.outline,
      dropup: this.props.dropup,
      'dropdown-toggle': this.props['dropdown-toggle'],
    });

    return (
      <button
        className={cssClasses}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {this.props.children}
      </button>
    );
  }

}

// eslint-disable-next-line no-class-assign
Button = styled(Button)`
  ${button()}
`;

Button.defaultProps = defaultProps;

export default Button;
