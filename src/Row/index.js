import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import { makeRow } from 'bootstrap-styled-mixins/lib/grid';
import { makeTheme } from './theme';

const defaultProps = {
  tag: 'div',
  theme: makeTheme(),
};

class RowUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    noGutters: PropTypes.bool,
    cssModule: PropTypes.object,
  }

  render() {
    const {
      className,
      cssModule,
      noGutters,
      tag: Tag,
      ...attributes
    } = this.props; // eslint-disable-line no-unused-vars

    const classes = mapToCssModules(cn(
      className,
      noGutters ? 'no-gutters' : null,
      'row'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
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

