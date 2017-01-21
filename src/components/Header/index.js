import styled from 'styled-components';
import theme from '../../config';
import { navbar } from '../../styled/utilities/navbar';

const defaultProps = { theme };

const Header = styled.header`
  ${(props) => `
    ${navbar(
      props.theme['$grid-breakpoints'],
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$zindex-navbar'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$zindex-navbar-sticky'],
      props.theme['$navbar-brand-padding-y'],
      props.theme['$font-size-lg'],
      props.theme['$navbar-divider-padding-y'],
      props.theme['$navbar-toggler-padding-y'],
      props.theme['$navbar-toggler-padding-x'],
      props.theme['$navbar-toggler-font-size'],
      props.theme['$border-width'],
      props.theme['$navbar-toggler-border-radius'],
      props.theme['$navbar-light-active-color'],
      props.theme['$navbar-light-color'],
      props.theme['$navbar-light-hover-color'],
      props.theme['$navbar-light-toggler-bg'],
      props.theme['$navbar-light-toggler-border'],
      props.theme['$navbar-dark-active-color'],
      props.theme['$navbar-dark-color'],
      props.theme['$navbar-dark-hover-color'],
      props.theme['$navbar-dark-toggler-bg'],
      props.theme['$navbar-dark-toggler-border'],
    )}
  `}  
`;

Header.defaultProps = defaultProps;

export default Header;
