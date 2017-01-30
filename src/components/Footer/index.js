/**
 * Footer Component
 *
 *
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import theme from '../../config';

const defaultProps = { theme };

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <footer className={this.props.className}>
        {this.props.children}
      </footer>
    );
  }
}

// eslint-disable-next-line no-class-assign
Footer = styled(Footer)`
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
