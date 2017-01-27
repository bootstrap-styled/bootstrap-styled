import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { makeContainer } from '../../styled/mixins/grid';
import theme from '../../config';

const defaultProps = { theme };

class ContainerFluid extends React.Component {    // eslint-disable-line react/prefer-stateless-function

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
ContainerFluid = styled(ContainerFluid)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
  `}
`;

ContainerFluid.defaultProps = defaultProps;

export default ContainerFluid;

