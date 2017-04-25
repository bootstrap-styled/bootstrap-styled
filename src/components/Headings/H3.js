import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h3',
};


// eslint-disable-next-line no-class-assign
const H3 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h3']};
  `}
`;

H3.defaultProps = defaultProps;

export default H3;
