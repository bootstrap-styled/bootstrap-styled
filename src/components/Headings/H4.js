import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h4',
};


// eslint-disable-next-line no-class-assign
const H4 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h4']};
  `}
`;

H4.defaultProps = defaultProps;

export default H4;
