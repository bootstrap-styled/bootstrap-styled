import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h1',
};


// eslint-disable-next-line no-class-assign
const H1 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h1']};
  `}
`;

H1.defaultProps = defaultProps;

export default H1;
