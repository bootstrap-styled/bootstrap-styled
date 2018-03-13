/* A Caption (Box) */

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const defaultProps = {
  theme: {
    '$table-cell-padding': '.75rem',
    '$text-muted': '#636c72',
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$table-cell-padding': PropTypes.string,
    '$text-muted': PropTypes.string,
  }),
};
/**
 * A `<Caption />` tag component in order to add description title to a `<Table />` component.

 */
const Caption = styled.caption`
  ${(props) => `
    padding-top: ${props.theme['$table-cell-padding']};
    padding-bottom: ${props.theme['$table-cell-padding']};
    color: ${props.theme['$text-muted']};
    text-align: left;
    caption-side: top;
  `}
`;

Caption.defaultProps = defaultProps;
Caption.propTypes = propTypes;

/** @component */
export default Caption;
