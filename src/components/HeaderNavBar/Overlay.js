/**
 * Menu component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';


class Overlay extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
  }

  render() {
    const { className, children, active, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const cssClasses = cn(className, { active: active }); // eslint-disable-line  object-shorthand
    return (
      <div className={cssClasses} {...rest}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Overlay = styled(Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1990;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translate3d(100%, 0, 0);
  transition: 'opacity 0.3s, transform 0s 0.3s';
  
  &.active {
    opacity: 1;
    transition: opacity 0.3s;
    transform: translate3d(0, 0, 0);
  }
`;


export default Overlay;

