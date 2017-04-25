/**
 * A button with natures
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';
import { button } from '../../styled/mixins/buttons';

const defaultProps = {
  theme: bsTheme,
  tag: 'button',
  color: 'secondary',
};

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
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
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
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

  render() {
    let {
      /* eslint-disable prefer-const */
      active,
      disabled,
      block,
      className,
      cssModule,
      dropup,
      color,
      outline,
      size,
      getRef,
      tag: Tag,
      /* eslint-enable prefer-const */
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(className, 'btn', {
      dropup,
      active,
      disabled,
      [`btn-${color}`]: size,
      'btn-block': block,
    }, `btn${outline ? '-outline' : ''}-${color}`), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        className={classes}
        ref={getRef}
        {...attributes}
        onClick={this.onClick}
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
