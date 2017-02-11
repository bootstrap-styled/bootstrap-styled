/**
 * H4 Component
 *
 *
 */
import styled from 'styled-components';
import bsTheme from 'theme';
import { typography } from '../../styled/utilities/typography';
const defaultProps = { theme: bsTheme };

const H4 = styled.h4`
  ${(props) => `
    font-size: ${props.theme['$font-size-h4']};
    ${typography(
      props.theme['$headings-margin-bottom'],
      props.theme['$headings-font-family'],
      props.theme['$headings-font-weight'],
      props.theme['$headings-line-height'],
      props.theme['$headings-color'],
      props.theme['$headings-underline-width'],
      props.theme['$headings-underline-height'],
      props.theme['$headings-underline-left-position'],
      props.theme['$headings-underline-gradient-color-1'],
      props.theme['$headings-underline-gradient-color-2'],
      props.theme['$display1-size'],
      props.theme['$display2-size'],
      props.theme['$display3-size'],
      props.theme['$display4-size'],
      props.theme['$display1-weight'],
      props.theme['$display2-weight'],
      props.theme['$display3-weight'],
      props.theme['$display4-weight'],
    )}

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H4.defaultProps = defaultProps;

export default H4;
