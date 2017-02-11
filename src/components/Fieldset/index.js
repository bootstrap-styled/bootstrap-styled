import styled from 'styled-components';
import theme from 'theme';
const defaultProps = { theme };

const Fieldset = styled.fieldset`
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
`;

Fieldset.defaultProps = defaultProps;

export default Fieldset;
