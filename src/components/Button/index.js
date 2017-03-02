/**
 * A button with natures
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import themeBs from '../../theme';
import { button } from '../../styled/mixins/buttons';

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

  state = {
    focus: false,
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  }

  handleBlur = () => {
    this.setState({
      focus: false,
    });
  }

  render() {
    const { theme, className, disabled, outline, dropup, children, 'dropdown-toggle': dropdownToggle, ...rest } = this.props; // eslint-disable-line
    const { focus } = this.state;
    const cssClasses = cn('btn', className, {
      disabled,
      outline,
      dropup,
      focus,
      'dropdown-toggle': dropdownToggle,
    });

    const optional = {};
    if (className.indexOf('btn') !== -1) {
      optional.onFocus = this.handleFocus;
      optional.onBlur = this.handleBlur;
    }

    return (
      <button
        className={cssClasses}
        disabled={disabled}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...rest}
        {...optional}
      >
        {children}
      </button>
    );
  }

}

// eslint-disable-next-line no-class-assign
Button = styled(Button)`
  ${(props) => `
    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$btn-transition'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$cursor-disabled'],
      props.theme['$link-color'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$btn-link-disabled-color'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm'],
      props.theme['$btn-block-spacing-y'],
      props.theme['$btn-primary-color'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-primary-border'],
      props.theme['$btn-secondary-color'],
      props.theme['$btn-secondary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-color'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-info-border'],
      props.theme['$btn-success-color'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-success-border'],
      props.theme['$btn-warning-color'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-warning-border'],
      props.theme['$btn-danger-color'],
      props.theme['$btn-danger-bg'],
      props.theme['$btn-danger-border'],
    )}
 `} 
`;

Button.defaultProps = defaultProps;

export default Button;
