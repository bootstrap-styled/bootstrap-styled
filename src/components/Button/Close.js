/**
 * A Close Button
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

class Close extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cn(this.props.className, 'hidden-sm-up close-wrapper')}>
        <div className="cross"></div>
      </div>
    );
  }

}

// eslint-disable-next-line no-class-assign
Close = styled(Close)`
  
  &.close-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  & .cross {
    width: 20px;
    height: 20px;
    position: relative;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); /* IE 9 */
    -webkit-transform:rotate(45deg); /* Safari and Chrome */
    
    &:before {
      left: 50%;
      width: 30%;
      margin-left: -15%;
      height: 100%;
    }
    &:after {
      top: 50%;
      height: 30%;
      margin-top: -15%;
      width: 100%;
    }
  }
  
  
  & .cross:before, .cross:after {
    content: "";
    position: absolute;
    z-index: -1;
    background: lightgrey;
  }
`;


export default Close;
