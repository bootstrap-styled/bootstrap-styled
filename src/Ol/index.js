/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import styled from 'styled-components';
import { listUnstyled, listInline, listInlineItem } from 'bootstrap-styled-mixins/lib/lists';
import { makeTheme } from './theme';

const defaultProps = { theme: makeTheme() };

const Ol = styled.ol`
  ${(props) => `
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

/** @component */
export default Ol;
