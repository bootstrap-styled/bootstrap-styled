/**
 * Menu component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
class OffsetNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    'menu-right': PropTypes.bool,
    'animation-push': PropTypes.bool,
  }

  render() {
    const { className, children, active, 'menu-right': menuRight, 'animation-push': animationPush, ...rest } = this.props; // eslint-disable-line no-unused-vars
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
    width: ${props.theme['$menu-push-width']};
    height: 100%;
    background-color: white;
    z-index: ${props.theme['$zindex-menu-push']};
  `}
`;


export default OffsetNav;

