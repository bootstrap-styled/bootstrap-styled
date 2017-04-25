import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import bsTheme from 'theme';
import cn from 'classnames';

import { makeContainer, makeContainerMaxWidths } from '../../styled/mixins/grid';

const defaultProps = {
  theme: bsTheme,
};

class Container extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, children, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className={cn(className, 'container')} {...rest}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Container = styled(Container)`
  ${(props) => `
    ${makeContainer(
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

