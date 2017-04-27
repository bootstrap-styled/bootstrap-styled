/**
 * Mark component
 */


import styled from 'styled-components';
import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

const Mark = styled.mark`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;

export default Mark;

