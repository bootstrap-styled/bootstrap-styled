/**
 * Mark component
 */


import styled from 'styled-components';
import { makeTheme } from './theme';

const defaultProps = { theme: makeTheme() };

const Mark = styled.mark`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;

/** @component */
export default Mark;

