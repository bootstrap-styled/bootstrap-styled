/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { a } from '../../styled/mixins/a';
import { button } from '../../styled/mixins/buttons';

const defaultProps = {
  theme,
};

export default function composeLink(RouterLink) {
  class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
      className: PropTypes.string,
      to: PropTypes.string.isRequired,
      theme: PropTypes.object,
      children: PropTypes.node,
    }

    render() {
      const { className, to, children, theme, ...rest } = this.props;  // eslint-disable-line
      return (
        <RouterLink className={className} to={to} {...rest}>{children}</RouterLink>
      );
    }
  }

  // eslint-disable-next-line no-class-assign
  Link = styled(Link)`
    ${(props) => `
      ${a(
        props.theme['$link-color'],
        props.theme['$link-decoration'],
        props.theme['$link-hover-color'],
        props.theme['$link-hover-decoration'],
        props.theme['$enable-hover-media-query'],
      )}
    
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
  Link.defaultProps = defaultProps;
  return Link;
}
