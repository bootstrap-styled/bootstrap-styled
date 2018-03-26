import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import { makeGridColumns } from 'bootstrap-styled-mixins/lib/grid-framework';
import mapToCssModules from 'map-to-css-modules';


const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

export const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? '' : `col-${colWidth}`;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

export const defaultProps = {
  tag: 'div',
  widths: colWidths,
  theme: {
    '$enable-grid-classes': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    '$grid-columns': '12',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
    },
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Extra small columns variables. */
  xs: columnProps,
  /** Small columns variables. */
  sm: columnProps,
  /** Medium columns variables. */
  md: columnProps,
  /** Large columns variables. */
  lg: columnProps,
  /** Extra large columns variables. */
  xl: columnProps,
  /** Widths size variables. */
  widths: PropTypes.array,
  /** Theme variables. */
  theme: PropTypes.shape({

  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class ColUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      widths,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    const colClasses = [];

    widths.forEach((colWidth, i) => {
      let columnProp = this.props[colWidth];

      if (!i && columnProp === undefined) {
        columnProp = true;
      }

      delete attributes[colWidth];

      if (!columnProp) {
        return;
      }

      const isXs = !i;
      let colClass;

      if (typeof columnProp === 'object') {
        const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
        colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

        colClasses.push(mapToCssModules(cn({
          [colClass]: columnProp.size || columnProp.size === '',
          [`push${colSizeInterfix}${columnProp.push}`]: columnProp.push,
          [`pull${colSizeInterfix}${columnProp.pull}`]: columnProp.pull,
          [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset,
        })), cssModule);
      } else {
        colClass = getColumnSizeClass(isXs, colWidth, columnProp);
        colClasses.push(colClass);
      }
    });

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          colClasses
        ), cssModule)}
        {...attributes}
      />
    );
  }
}
/**
 * Column component to use inside a `<Row />` component.
 */
const Col = styled(ColUnstyled)`
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
Col.propTypes = propTypes;

/** @component */
export default Col;

