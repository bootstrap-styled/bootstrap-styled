/**
 * Mark component
 */


import styled from 'styled-components';
import theme from '../theme';

const defaultProps = { theme };

const Mark = styled.mark`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;

export default Mark;

