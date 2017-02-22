/**
 * Unordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

import { nav } from '../../styled/mixins/nav';
import { listUnstyled, listInline, listInlineItem } from '../../styled/mixins/lists';
import { navbar } from '../../styled/mixins/navbar';
import { pagination } from '../../styled/mixins/paginations';

const defaultProps = { theme: bsTheme };

class Ul extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { theme, className, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <ul className={className} {...rest}>
        {children}
      </ul>
    );
  }
}

// eslint-disable-next-line no-class-assign
Ul = styled(Ul)`
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
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$zindex-navbar'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$zindex-navbar-sticky'],
      props.theme['$navbar-brand-padding-y'],
      props.theme['$font-size-lg'],
      props.theme['$navbar-divider-padding-y'],
      props.theme['$navbar-toggler-padding-y'],
      props.theme['$navbar-toggler-padding-x'],
      props.theme['$navbar-toggler-font-size'],
      props.theme['$border-width'],
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
    
    ${pagination(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$border-radius'],
      props.theme['$pagination-active-color'],
      props.theme['$pagination-active-bg'],
      props.theme['$pagination-active-border'],
      props.theme['$pagination-disabled-color'],
      props.theme['$cursor-disabled'],
      props.theme['$pagination-disabled-bg'],
      props.theme['$pagination-disabled-border'],
      props.theme['$pagination-padding-y'],
      props.theme['$pagination-padding-x'],
      props.theme['$pagination-line-height'],
      props.theme['$pagination-color'],
      props.theme['$pagination-bg'],
      props.theme['$pagination-border-width'],
      props.theme['$pagination-border-color'],
      props.theme['$pagination-hover-color'],
      props.theme['$pagination-hover-bg'],
      props.theme['$pagination-hover-border'],
      props.theme['$pagination-padding-y-lg'],
      props.theme['$pagination-padding-x-lg'],
      props.theme['$font-size-lg'],
      props.theme['$line-height-lg'],
      props.theme['$border-radius-lg'],
      props.theme['$pagination-padding-y-sm'],
      props.theme['$pagination-padding-x-sm'],
      props.theme['$font-size-sm'],
      props.theme['$line-height-sm'],
      props.theme['$border-radius-sm'],
    )}
    

    /* Type Scss */
    &.list-unstyled {
      ${listUnstyled()}
    }
    
    &.list-inline {
      ${listInline()}
    }
    
    &.list-inline-item {
      ${listInlineItem(props.theme['$list-inline-padding'])}
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
