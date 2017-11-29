/**
 * Mark component
 */


import styled from 'styled-components';
import markTheme from './theme';

const defaultProps = { markTheme };

const Mark = styled.mark`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;

export default Mark;

