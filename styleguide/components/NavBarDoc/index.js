/*
 * Kopax Ltd Copyright (c) 2016.
 */
/**
 * NavTop.react.js
 *
 * Navigation menu that will be used to navigate in the website
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  transition,
} from 'bootstrap-styled-mixins';
import styled from 'styled-components';
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
} from '../../../src';
import Link from '../Link';
import logoBs from '../logo-bs';

class NavBarDocUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    pages: PropTypes.object.isRequired,
  }

  render() {
    const { pages, className } = this.props;

    return (
      <Navbar color="faded" light toggleable="sm" className={cn(className, 'nav-bar-doc')}>
        <Container>
          <div>
            <Link to="/" style={{ width: '300px' }}>
              <img
                src={`data:image/png;base64,${logoBs}`}
                height="85px"
                alt="Bootstrap-styled library"
                title="Bootstrap-styled library logo"
              />
            </Link>
          </div>
          <Nav navbar className="pl-5">
            {Object.keys(pages.top).map((key) => (
              <NavItem key={pages.top[key].name}>
                <NavLink tag={Link} to={pages.top[key].from || pages.top[key].path}>{pages.top[key].description}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
const NavBarDoc = styled(NavBarDocUnstyled)`
  ${(props) => `
    &.fixed-top {
      z-index: 2060;
    }
    &.scroll-top {
      ${transition(
        props.theme['$enable-transitions'],
        'fixed 2s;'
      )}
      background: ${props.theme['$gray-dark']};
    } 
  `}
`;


export default NavBarDoc;
