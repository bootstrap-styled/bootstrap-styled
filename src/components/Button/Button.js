/**
 * A button with natures
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { button } from '../../styled/mixins/buttons';
import { mapToCssModules } from '../../styled/utilities/tools';

const defaultProps = {
  theme: bsTheme,
  tag: 'button',
  color: 'secondary',
};

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    size: PropTypes.string,
    dropup: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
  }

  state = {
    focus: false,
  }

  onClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
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
    const {
      active,
      block,
      className,
      cssModule,
      dropup,
      color,
      outline,
      size,
      getRef,
      tag: Tag,
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;

    const { focus } = this.state;

    const classes = mapToCssModules(cn(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? 'btn-block' : false,
      dropup,
      focus,
      { active, disabled: this.props.disabled }
    ), cssModule);

    const optional = {};
    if (className.indexOf('btn') !== -1) {
      optional.onFocus = this.handleFocus;
      optional.onBlur = this.handleBlur;
    }

    return (
      <Tag
        className={classes}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        ref={getRef}
        {...attributes}
        {...optional}
      />
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
      props.theme['$font-weight-normal'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$btn-transition'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
      props.theme['$btn-box-shadow'],
      props.theme['$btn-focus-box-shadow'],
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
