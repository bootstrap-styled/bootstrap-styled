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
    props.theme['$enable-grid-classes'],
    props.theme['$grid-gutter-widths']
  )}
  
  /*
    Remove the negative margin from default .row, then the horizontal padding
    from all immediate children columns (to prevent runaway style inheritance).
  */
  
  &.no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

Row.defaultProps = defaultProps;

export default Row;

