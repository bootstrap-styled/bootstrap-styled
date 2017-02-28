/**
 * MenuCollapse Component
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class MenuAccount extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { className, children } = this.props;
    return (
      <div
        className={cn(className, 'nav-account')}
      >
        {children}
      </div>
    );
  }
}
// eslint-disable-next-line no-class-assign
MenuAccount = styled(MenuAccount)`
  ${(props) => `
    &.nav-account {
      position: absolute;
      top: 0;
      right: 0;
      
      .nav-item {
        .dropdown-menu {
          margin-top: 0;
        }
        .nav-link {
          display: block;
          height: ${props.theme['$navbar-height']};
          width: 100%;
          padding: 1.25rem 1rem;
          &:hover {
            background-color: ${props.theme['$nav-link-hover-bg']};
          }
        }      
      } 
    }
  `}
`;
export default MenuAccount;
