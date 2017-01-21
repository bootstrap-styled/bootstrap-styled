import styled from 'styled-components';
import theme from '../../config';

const defaultProps = { theme };

const Hr = styled.hr`
  ${(props) => `
    margin-top: ${props.theme['$spacer-y']};
    margin-bottom: ${props.theme['$spacer-y']};
    border: 0;
    border-top: ${props.theme['$hr-border-width']} solid ${props.theme['$hr-border-color']};
  `}
`;

Hr.defaultProps = defaultProps;

export default Hr;
