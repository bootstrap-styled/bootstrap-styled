import styled from 'styled-components';
import React, { PropTypes } from 'react';
import bsTheme from 'theme';
import cn from 'classnames';
import { makeContainer } from '../../styled/mixins/grid';

const defaultProps = {
  theme: bsTheme,
};

class ContainerFluid extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, children, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className={cn(className, 'container-fluid')} {...rest}>
        {children}
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

