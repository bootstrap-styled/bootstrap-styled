/**
 * H6 Component
 *
 *
 */
import styled from 'styled-components';
import theme from 'theme';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

const H6 = styled.h6`
  ${(props) => `
    font-size: ${props.theme['$font-size-h6']};
    ${typography(
      props.theme['$headings-margin-bottom'],
      props.theme['$headings-font-family'],
      props.theme['$headings-font-weight'],
      props.theme['$headings-line-height'],
      props.theme['$headings-color'],
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

H6.defaultProps = defaultProps;

export default H6;
