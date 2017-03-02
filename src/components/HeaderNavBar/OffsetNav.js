/**
 * Menu component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { transition } from '../../styled/mixins/transition';

class OffsetNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    'menu-right': PropTypes.bool,
  }

  render() {
    const { className, children, active, 'menu-right': menuRight, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
    const cssClasses = cn(className, menuDirectionClassNames, { active }); // eslint-disable-line  object-shorthand
    return (
      <div className={cssClasses} {...rest}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
OffsetNav = styled(OffsetNav)`
  ${(props) => `
    position: fixed;
    top: 0;
    width: ${props.theme['$menu-push-width']};
    height: 100%;
    background-color: white;
    z-index: ${props.theme['$zindex-menu-push']};
    ${transition(
      props.theme['$enable-transitions'],
      'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    )}
    
    &.menu-left {
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
      transform: translateX(-100%);
      &.active {
        transform: translateX(0);
      }
    }
    
    &.menu-right {
      right: 0;
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
    }
  `}
`;


export default OffsetNav;

