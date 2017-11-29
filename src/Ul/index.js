/**
 * Unordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { nav } from 'bootstrap-styled-mixins/lib/nav';
import { listUnstyled, listInline } from 'bootstrap-styled-mixins/lib/lists';
import { navbar } from 'bootstrap-styled-mixins/lib/navbar';
import themeUl from './theme';

const defaultProps = { theme: themeUl };

class UlUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
    inline: PropTypes.bool,
    unstyled: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      inline,
      unstyled,
      children,
      ...rest
    } = omit(this.props, ['theme']);

    const classes = cn(
      className,
      inline ? 'list-inline' : false,
      unstyled ? 'list-unstyled' : false,
    );
    return (
      <ul className={classes} {...rest}>
        {children}
      </ul>
    );
  }
}

const Ul = styled(UlUnstyled)`
  ${(props) => `
    ${nav(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$nav-link-padding'],
      props.theme['$nav-disabled-link-color'],
      props.theme['$cursor-disabled'],
      props.theme['$nav-tabs-border-width'],
      props.theme['$nav-tabs-border-color'],
      props.theme['$nav-tabs-border-radius'],
      props.theme['$nav-tabs-link-hover-border-color'],
      props.theme['$nav-tabs-active-link-hover-color'],
      props.theme['$nav-tabs-active-link-hover-bg'],
      props.theme['$nav-tabs-active-link-hover-border-color'],
      props.theme['$nav-pills-border-radius'],
      props.theme['$nav-pills-active-link-color'],
      props.theme['$nav-pills-active-link-bg'],
    )}
    ${navbar(
      props.theme['$grid-breakpoints'],
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$font-size-lg'],
      props.theme['$border-width'],
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$zindex-navbar'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$zindex-navbar-sticky'],
      props.theme['$navbar-brand-padding-y'],
      props.theme['$navbar-divider-padding-y'],
      props.theme['$navbar-toggler-padding-y'],
      props.theme['$navbar-toggler-padding-x'],
      props.theme['$navbar-toggler-font-size'],
      props.theme['$navbar-toggler-border-radius'],
      props.theme['$navbar-light-active-color'],
      props.theme['$navbar-light-color'],
      props.theme['$navbar-light-hover-color'],
      props.theme['$navbar-light-toggler-border'],
      props.theme['$navbar-light-disabled-color'],
      props.theme['$navbar-light-toggler-bg'],
      props.theme['$navbar-inverse-active-color'],
      props.theme['$navbar-inverse-color'],
      props.theme['$navbar-inverse-hover-color'],
      props.theme['$navbar-inverse-toggler-border'],
      props.theme['$navbar-inverse-toggler-bg'],
      props.theme['$navbar-inverse-disabled-color'],
    )}

    /* Type Scss */
    &.list-unstyled {
      ${listUnstyled()}
    }

    &.list-inline {
      ${listInline()}
    }
    
    /* Reboot Scss */
    margin-top: 0;
    margin-bottom: 1rem;
  
    & ol,
    & ul {
      margin-bottom: 0;
    }
  `}
`;

Ul.defaultProps = defaultProps;

export default Ul;
