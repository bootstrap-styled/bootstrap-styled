/**
 * A button with natures
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { button } from 'bootstrap-styled-mixins/lib/buttons';

export const defaultProps = {
  tag: 'button',
  color: 'primary',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': true,
    '$enable-transitions': true,
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-block-spacing-y': '.5rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-transition': 'all .2s ease-in-out',
  },
};
export const propTypes = {
  /** Toggles active CSS color. */
  active: PropTypes.bool,
  /** Toggles block CSS display. */
  block: PropTypes.bool,
  /** Toggles disable mouse event and CSS color. */
  disabled: PropTypes.bool,
  /** Toggles outline CSS border and background color. */
  outline: PropTypes.bool,
  /** @ignore */
  className: PropTypes.string,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: PropTypes.func,
  /** Start specified function when on click event is trigger. */
  onClick: PropTypes.func,
  /** Buttons use default size base and can use different size such as: */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),
  /** Toggles drop up CSS style. */
  dropup: PropTypes.bool,
  /** Replace the default component tag by the one specified. Can be: */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$btn-padding-x': PropTypes.string,
    '$btn-padding-y': PropTypes.string,
    '$btn-line-height': PropTypes.string,
    '$btn-font-weight': PropTypes.string,
    '$btn-box-shadow': PropTypes.string,
    '$btn-focus-box-shadow': PropTypes.string,
    '$btn-active-box-shadow': PropTypes.string,
    '$btn-primary-color': PropTypes.string,
    '$btn-primary-bg': PropTypes.string,
    '$btn-primary-border': PropTypes.string,
    '$btn-secondary-color': PropTypes.string,
    '$btn-secondary-bg': PropTypes.string,
    '$btn-secondary-border': PropTypes.string,
    '$btn-info-color': PropTypes.string,
    '$btn-info-bg': PropTypes.string,
    '$btn-info-border': PropTypes.string,
    '$btn-success-color': PropTypes.string,
    '$btn-success-bg': PropTypes.string,
    '$btn-success-border': PropTypes.string,
    '$btn-warning-color': PropTypes.string,
    '$btn-warning-bg': PropTypes.string,
    '$btn-warning-border': PropTypes.string,
    '$btn-danger-color': PropTypes.string,
    '$btn-danger-bg': PropTypes.string,
    '$btn-danger-border': PropTypes.string,
    '$btn-link-disabled-color': PropTypes.string,
    '$btn-padding-x-sm': PropTypes.string,
    '$btn-padding-y-sm': PropTypes.string,
    '$btn-padding-x-lg': PropTypes.string,
    '$btn-padding-y-lg': PropTypes.string,
    '$btn-block-spacing-y': PropTypes.string,
    '$btn-border-radius': PropTypes.string,
    '$btn-border-radius-lg': PropTypes.string,
    '$btn-border-radius-sm': PropTypes.string,
    '$btn-transition': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$enable-transitions': PropTypes.bool,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class ButtonUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  onClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    /* eslint-disable prefer-const */
    let {
      active,
      disabled,
      block,
      className,
      cssModule,
      dropup,
      color,
      outline,
      size,
      innerRef,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);
    /* eslint-enable prefer-const */

    const classes = mapToCssModules(cn(className, 'btn', {
      dropup,
      active,
      disabled,
      [`btn-${size}`]: size,
      'btn-block': block,
    }, `btn${outline ? '-outline' : ''}-${color}`), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        className={classes}
        ref={innerRef}
        {...attributes}
        onClick={this.onClick}
      />
    );
  }
}
/**
 * Use our default **link**, **colored** or **outlined** `Buttons` blocks, to emphasize part of your page.
 * You can also use different `size` or another `tag` instead of `<Button />`.
 */
const Button = styled(ButtonUnstyled)`
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
Button.propTypes = propTypes;

/** @component */
export default Button;
