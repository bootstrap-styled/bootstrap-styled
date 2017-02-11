/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import styled from 'styled-components';
import theme from 'theme';
import { nav } from '../../styled/utilities/nav';
import { listUnstyled, listInline, listInlineItem } from '../../styled/mixins/lists';

const defaultProps = { theme };

const Ol = styled.ol` 
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

Ol.defaultProps = defaultProps;

export default Ol;
