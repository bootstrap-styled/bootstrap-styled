
import React, { PropTypes } from 'react';
import styled from 'styled-components';

class PageWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

  }

  render() {
    const { children, className } = this.props;
    return (
      <div id="wrapper" className={className}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
PageWrapper = styled(PageWrapper)`
  height: 100%;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &.active {
    &.left { transform: translateX(220px); }
    &.right { transform: translateX(-220px); }
  }
`;


export default PageWrapper;

