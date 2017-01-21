import styled from 'styled-components';
import React, { PropTypes } from 'react';
import theme from '../../config';

import { makeContainer, makeContainerMaxWidths } from '../../styled/mixins/grid';

const defaultProps = { theme };

class Container extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Container = styled(Container)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-flex'],
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
    
    ${makeContainerMaxWidths(
      props.theme['$enable-grid-classes'],
      props.theme['$container-max-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Container.defaultProps = defaultProps;

export default Container;

