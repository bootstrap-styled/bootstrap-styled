import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h6',
};


// eslint-disable-next-line no-class-assign
const H6 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h6']};
  `}
`;

H6.defaultProps = defaultProps;

export default H6;
