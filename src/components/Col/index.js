import styled from 'styled-components';
import React, { PropTypes } from 'react';
import theme from 'theme';
import { makeGridColumns } from '../../styled/mixins/grid-framework';

const defaultProps = { theme };

class Col extends React.Component {    // eslint-disable-line react/prefer-stateless-function

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
Col = styled(Col)`
  ${(props) => `
    ${makeGridColumns(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-columns'],
      props.theme['$grid-gutter-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Col.defaultProps = defaultProps;

export default Col;

