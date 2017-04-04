
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

class PageWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { children, className, theme } = this.props;  // eslint-disable-line no-unused-vars
    return (
      <div id="wrapper" className={className}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
PageWrapper = styled(PageWrapper)`
  ${(props) => `
    height: 100%;
    transition: ${props.theme['$menu-offset-nav-transition']};
    &.left { transform: translateX(220px); }
    &.right { transform: translateX(-220px); }
  `}
`;

PageWrapper.defaultProps = defaultProps;

export default PageWrapper;

