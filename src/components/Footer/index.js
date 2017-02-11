/**
 * Footer Component
 *
 *
 */

import styled from 'styled-components';
import theme from 'theme';

const defaultProps = { theme };

const Footer = styled.footer`
  ${(props) => `
    height: ${props.theme['$footer-height']};
    background: ${props.theme['$footer-background']};
    width: 100%;
    position: static;
    left: 0px;
    bottom: 0px;
    text-align: center;
    color: ${props.theme['$footer-color']};
  `}
`;

Footer.defaultProps = defaultProps;

export default Footer;
