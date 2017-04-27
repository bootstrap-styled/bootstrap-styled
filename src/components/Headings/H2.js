import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h2',
};


// eslint-disable-next-line no-class-assign
const H2 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h2']};
  `}
`;

H2.defaultProps = defaultProps;

export default H2;
