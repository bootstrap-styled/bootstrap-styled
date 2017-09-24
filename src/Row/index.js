import styled from 'styled-components';
import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';
import { makeRow } from '../styled/mixins/grid';

const defaultProps = { theme };

class RowUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { className, children } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className={cn(className, 'row')}>
        {children}
      </div>
    );
  }

}

const Row = styled(RowUnstyled)`
  ${(props) => `
    &.row {
      ${makeRow(
        props.theme['$enable-grid-classes'],
        props.theme['$grid-gutter-widths']
      )}
    }
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
 `}
`;

Row.defaultProps = defaultProps;

export default Row;

