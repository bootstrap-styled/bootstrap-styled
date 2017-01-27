/**
 * A button with natures
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import themeBs from '../../config';
import { button } from '../../styled/utilities/button';

const defaultProps = { theme: themeBs };

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    'dropdown-toggle': PropTypes.bool,
    dropup: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { theme, className, disabled, outline, dropup, children, ...rest } = this.props; // eslint-disable-line
    const cssClasses = cn(className, {
      disabled,
      outline,
      dropup,
      'dropdown-toggle': this.props['dropdown-toggle'],
    });

    return (
      <button
        className={cssClasses}
        disabled={disabled}
        {...rest}
      >
        {children}
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
