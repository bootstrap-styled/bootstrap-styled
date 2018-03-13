/**
 * Mark component
 */


import styled from 'styled-components';
import PropTypes from 'prop-types';

export const defaultProps = {
  theme: {
    '$mark-padding': '.2em',
    '$mark-bg': '#fcf8e3',
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$mark-padding': PropTypes.string,
    '$mark-bg': PropTypes.string,
  }),
};
const Mark = styled.mark`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;
Mark.propTypes = propTypes;

/** @component */
export default Mark;

