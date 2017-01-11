/**
 * Unordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';

import { nav } from '../../styled/utilities/nav';
import { listUnstyled } from '../../styled/mixins/lists';
import { navbar } from '../../styled/utilities/navbar';

const defaultProps = { theme };

class Ul extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <ul className={this.props.className}>
        {this.props.children}
      </ul>
    );
  }
}

// eslint-disable-next-line no-class-assign
Ul = styled(Ul)`
  ${(props) => `
  
    ${nav()}
    ${navbar(
      props.theme['$grid-breakpoints'],
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$navbar-border-radius'],
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
      props.theme['$navbar-light-toggler-bg'],
      props.theme['$navbar-light-toggler-border'],
      props.theme['$navbar-dark-active-color'],
      props.theme['$navbar-dark-color'],
      props.theme['$navbar-dark-hover-color'],
      props.theme['$navbar-dark-toggler-bg'],
      props.theme['$navbar-dark-toggler-border'],
    )}
    
    /* Type Scss */
    &.list-unstyled {
      ${listUnstyled()};
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
