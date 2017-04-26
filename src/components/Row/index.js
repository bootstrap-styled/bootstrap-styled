import styled from 'styled-components';
import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = {
  tag: 'div',
  theme: bsTheme,
};

class Row extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    tag: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag className={cn(className, 'row')} {...attributes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Row = styled(Row)`
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

