/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import styled from 'styled-components';
import { listUnstyled, listInline, listInlineItem } from 'bootstrap-styled-mixins/lib/lists';
import PropTypes from 'prop-types';

export const defaultProps = {
  theme: {
    '$list-inline-padding': '5px',
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$list-inline-padding': PropTypes.string,
  }),
};
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
Ol.propTypes = propTypes;

/** @component */
export default Ol;
