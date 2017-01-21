import styled from 'styled-components';
import React, { PropTypes } from 'react';
import theme from '../../config';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = { theme };

class Row extends React.Component {    // eslint-disable-line react/prefer-stateless-function

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
Row = styled(Row)`
  ${(props) => makeRow(
    props.theme['$enable-flex'],
    props.theme['$enable-grid-classes'],
    props.theme['$grid-gutter-widths']
  )}
`;

Row.defaultProps = defaultProps;

export default Row;

