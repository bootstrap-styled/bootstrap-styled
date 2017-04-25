import styled from 'styled-components';
import bsTheme from 'theme';
import Headings from './Headings';

const defaultProps = {
  theme: bsTheme,
  tag: 'h5',
};


// eslint-disable-next-line no-class-assign
const H5 = styled(Headings)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h5']};
  `}
`;

H5.defaultProps = defaultProps;

export default H5;
