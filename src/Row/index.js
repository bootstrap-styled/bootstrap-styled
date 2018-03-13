import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { makeRow } from 'bootstrap-styled-mixins/lib/grid';


export const defaultProps = {
  tag: 'div',
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
    },
    '$enable-grid-classes': false,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** . */
  noGutters: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-gutter-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class RowUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      noGutters,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

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
/**
 * A simple way to build **responsive grids**.
 * Building a **grids layout** is very simple:
 * * Add a `<Row />` component
 * * Add as many `<Col />` component as you want as `child` of your `<Row />` component
 * Each column will have an equal width, no matter the number of columns.
 */
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
Row.propTypes = propTypes;

/** @component */
export default Row;

