/* eslint-disable quote-props, dot-notation */
/**
 * Tables: default, striped, bordered, hover, condensed and responsive.
 */

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { tableRowVariant } from 'bootstrap-styled-mixins/lib/table-row';
import { hover as hoverMixin } from 'bootstrap-styled-mixins/lib/hover';


export const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
  theme: {
    '$body-bg': '#fff',
    '$table-cell-padding': '.75rem',
    '$table-sm-cell-padding': '.3rem',
    '$table-bg': 'transparent',
    '$table-inverse-bg': '#292b2c',
    '$table-inverse-bg-accent': 'rgba(255, 255, 255, 0.05)',
    '$table-inverse-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-inverse-color': '#fff',
    '$table-inverse-border': 'hsl(200, 3.5%, 17.9%)',
    '$table-bg-accent': 'rgba(0, 0, 0, 0.05)',
    '$table-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-bg-active': 'rgba(0, 0, 0, 0.075)',
    '$table-head-bg': '#eceeef',
    '$table-head-color': '#464a4c',
    '$table-border-width': '1px',
    '$table-border-color': '#eceeef',
    '$state-success-bg': '#dff0d8',
    '$state-info-bg': '#d9edf7',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-bg': '#f2dede',
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
  /** Change tab size with specified one. Can be: `sm` */
  size: PropTypes.string,
  /** Toggles bordered CSS style. */
  bordered: PropTypes.bool,
  /** Toggles striped CSS style. */
  striped: PropTypes.bool,
  /** Toggles inverse CSS style. */
  inverse: PropTypes.bool,
  /** Toggles hover CSS style. */
  hover: PropTypes.bool,
  /** Toggles reflow CSS style. */
  reflow: PropTypes.bool,
  /** Toggles responsive CSS display. */
  responsive: PropTypes.bool,
  /** Replace the responsive component tag by the one specified. Can be: */
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$body-bg': PropTypes.string,
    '$table-cell-padding': PropTypes.string,
    '$table-sm-cell-padding': PropTypes.string,
    '$table-bg': PropTypes.string,
    '$table-inverse-bg': PropTypes.string,
    '$table-inverse-bg-accent': PropTypes.string,
    '$table-inverse-bg-hover': PropTypes.string,
    '$table-inverse-color': PropTypes.string,
    '$table-inverse-border': PropTypes.string,
    '$table-bg-accent': PropTypes.string,
    '$table-bg-hover': PropTypes.string,
    '$table-bg-active': PropTypes.string,
    '$table-head-bg': PropTypes.string,
    '$table-head-color': PropTypes.string,
    '$table-border-width': PropTypes.string,
    '$table-border-color': PropTypes.string,
    '$state-success-bg': PropTypes.string,
    '$state-info-bg': PropTypes.string,
    '$state-warning-bg': PropTypes.string,
    '$state-danger-bg': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example [here](https://www.npmjs.com/package/map-to-css-modules).
   */
  cssModule: PropTypes.object,
};
class TableUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      size,
      bordered,
      striped,
      inverse,
      hover,
      reflow,
      responsive,
      tag: Tag,
      responsiveTag: ResponsiveTag,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'table',
      size ? 'table-' + size : false, // eslint-disable-line
      bordered ? 'table-bordered' : false,
      striped ? 'table-striped' : false,
      inverse ? 'table-inverse' : false,
      hover ? 'table-hover' : false,
      reflow ? 'table-reflow' : false
    ), cssModule);

    const table = <Tag {...attributes} className={classes} />;

    if (responsive) {
      return (
        <ResponsiveTag className="table-responsive">{table}</ResponsiveTag>
      );
    }
    return table;
  }
}
/**
 * A classic `<Table />` component.
 * **Inverse**, **head** options, **striped rows**, **bordered** table, **contextual classes**, **colored** with global background utilities and **responsive tables**.
 * **Hoverable rows**
 * Add `.table-hover` to enable a hover state on table rows within a `<Tbody>`.
 * **Small table**
 * Add `.table-sm` to make tables more compact by cutting cell padding in half.
 */
const Table = styled(TableUnstyled)`
  ${(props) => `
    /*
     Basic Bootstrap table
    */
    &.table {
      width: 100%;
      max-width: 100%;
      margin-bottom: ${props.theme['$spacer']};
      background-color: ${props.theme['$table-bg']};

      th,
      td {
        padding: ${props.theme['$table-cell-padding']};
        vertical-align: top;
        border-top: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
      }
    
      thead th {
        vertical-align: bottom;
        border-bottom: ${unitUtils.math.multiply(props.theme['$table-border-width'], 2)} solid ${props.theme['$table-border-color']};
      }
    
      tbody + tbody {
        border-top: ${unitUtils.math.multiply(props.theme['$table-border-width'], 2)} solid ${props.theme['$table-border-color']};
      }
    
      .table {
        background-color: ${props.theme['$body-bg']};
      }
    }
    
    
    /*
     Condensed table w/ half padding
    */
    
    &.table-sm {
      th,
      td {
        padding: ${props.theme['$table-sm-cell-padding']};
      }
    }
    
    
    /* Bordered version
     Add borders all around the table and between all the columns.
    */
    &.table-bordered {
      border: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
    
      th,
      td {
        border: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
      }
    
      thead {
        th,
        td {
          border-bottom-width: ${unitUtils.math.multiply(2, props.theme['$table-border-width'])};
        }
      }
    }
    
    
    /* Zebra-striping
     Default zebra-stripe styles (alternating gray and transparent backgrounds)
    */
    
    &.table-striped {
      tbody tr:nth-of-type(odd) {
        background-color: ${props.theme['$table-bg-accent']};
      }
    }
    
    
    /* 
    Hover effect Placed here since it has to come after the potential zebra striping
    */

    
    &.table-hover {
      tbody tr {
        ${hoverMixin(`
          background-color: ${props.theme['$table-bg-hover']};
        `)}
      }
    }
    
    /* Table backgrounds
    Exact selectors below required to override '.table-striped' and prevent
    inheritance to nested tables.
    */
        
    /* Generate the contextual variants */
    ${tableRowVariant('active', props.theme['$table-bg-active'])}
    ${tableRowVariant('success', props.theme['$state-success-bg'])}
    ${tableRowVariant('info', props.theme['$state-info-bg'])}
    ${tableRowVariant('warning', props.theme['$state-warning-bg'])}
    ${tableRowVariant('danger', props.theme['$state-danger-bg'])}
     
    
    /* Inverse styles
    Same table markup, but inverted color scheme: dark background and light text.
    */ 
    
    & thead.thead-inverse {
      th {
        color: ${props.theme['$table-inverse-color']};
        background-color: ${props.theme['$table-inverse-bg']};
      }
    }
    
    
    & thead.thead-default {
      th {
        color: ${props.theme['$table-head-color']};
        background-color: ${props.theme['$table-head-bg']};
      }
    }
    
    &.table-inverse {
      color: ${props.theme['$table-inverse-color']};
      background-color: ${props.theme['$table-inverse-bg']};
    
      th,
      td,
      thead th {
        border-color: ${props.theme['$table-inverse-border']};
      }
    
      &.table-bordered {
        border: 0;
      }
      
      &.table-striped {
        tbody tr:nth-of-type(odd) {
        background-color: ${props.theme['$table-inverse-bg-accent']};
        }
      }
      
      &.table-hover {
        tbody tr {
          ${hoverMixin(`
            background-color: ${props.theme['$table-inverse-bg-hover']};
          `)}
        }
      }
    }
    
    /* Responsive tables
     Wrap your tables in '.table-responsive' and we'll make them mobile friendly
     by enabling horizontal scrolling. Only applies <768px. Everything above that
     will display normally.
     */
    
    &.table-responsive {
      display: block;
      width: 100%;
      overflow-x: auto;
      -ms-overflow-style: -ms-autohiding-scrollbar; /* See https://github.com/twbs/bootstrap/pull/10057 */
      &.table-bordered {
        border: 0;
      }
    }
    
    &.table-reflow {
    
      /* added bs4 missing tfoot rule */
      thead, tfoot {
        float: left;
      }
    
      tbody {
        display: block;
        white-space: nowrap;
      }
    
      th,
      td {
        border-top: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
        border-left: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
    
        &:last-child {
          border-right: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
        }
      }
    
      thead,
      tbody,
      tfoot {
        &:last-child {
          tr:last-child th,
          tr:last-child td {
            border-bottom: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
          }
        }
      }
    
      tr {
        float: left;
    
        th,
        td {
          display: block !important;
          border: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
        }
      }
    }
    
    /* from reboot.scss */
    th {
      /* Centered by default, but left-align-ed to match the tds below. */
      text-align: left;
    }
      
    /* Reboot Scss */
    /* No longer part of Normalize since v4 */
    border-collapse: collapse;
    /*  Reset for nesting within parents with 'background-color'. */
    background-color: ${props.theme['$table-bg']};    
    
  `}
`;

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

/** @component */
export default Table;
