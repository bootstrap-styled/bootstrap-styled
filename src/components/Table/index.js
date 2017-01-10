/* eslint-disable quote-props, dot-notation */
/**
 * Tables: default, striped, bordered, hover, condensed and responsive.
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import cn from 'classnames';
import theme from 'config';
import { tableRowVariant } from '../../styled/mixins/table-row';
import { hover } from '../../styled/mixins/hover';
import { math } from '../../styled/mixins/unit';

const defaultProps = {
  striped: false,
  bordered: false,
  hover: false,
  condensed: false,
  responsive: false,
  theme,
};

class Table extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    striped: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    bordered: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    hover: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    condensed: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    responsive: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  render() {
    const table = (
      <table
        className={cn(this.props.className, 'table', {
          'table-bordered': this.props.bordered,
          'table-striped': this.props.striped,
          'table-hover': this.props.hover,
          'table-condensed': this.props.condensed,
        })}
      >
        {this.props.children}
      </table>
    );

    if (this.props.responsive) {
      return (
        <div
          className={cn(this.props.className, {
            'responsive': this.props.responsive,
            'table-bordered': this.props.bordered,
            'table-striped': this.props.striped,
            'table-hover': this.props.hover,
            'table-condensed': this.props.condensed,
          })}
        >
          {table}
        </div>
      );
    }

    return table;
  }
}

// eslint-disable-next-line no-class-assign
Table = styled(Table)`
  ${(props) => `
    /*
     Basic Bootstrap table
    */
    
    &.table {
      width: 100%;
      max-width: 100%;
      margin-bottom: ${props.theme['$spacer']};
    
      /* from reboot.scss */
      th {
        /* Centered by default, but left-align-ed to match the tds below. */
        text-align: left;
      }
    
      /* bs4 utility moved here */
      tr,
      th,
      td {
      
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
      }
      
      th,
      td {
        padding: ${props.theme['$table-cell-padding']};
        vertical-align: top;
        border-top: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
      }
    
      thead th {
        vertical-align: bottom;
        border-bottom: ${math.multiply(2, props.theme['$table-border-width'])} solid ${props.theme['$table-border-color']};
      }
    
      tbody + tbody {
        border-top: ${math.multiply(2, props.theme['$table-border-width'])} solid ${props.theme['$table-border-color']};
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
          border-bottom-width: ${math.multiply(2, props.theme['$table-border-width'])};
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
        ${hover(`
          background-color: ${props.theme['$table-bg-hover']};
        `)}
      }
    }
    
    
    /* Inverse styles
    Same table markup, but inverted color scheme: dark background and light text.
    */ 
    
    & thead.thead-inverse {
      th {
        color: #fff;
        background-color: ${props.theme['$table-bg-inverse']};
      }
    }
    
    
    & thead.thead-default {
      th {
        color: ${props.theme['$table-head-color']};
        background-color: ${props.theme['$table-head-bg']};
      }
    }
    
    &.table-inverse {
      color: ${props.theme['$table-head-bg']};
      background-color: ${props.theme['$table-bg-inverse']};
    
      th,
      td,
      thead th {
        border-color: ${props.theme['$table-inverse-border-color']};
      }
    
      &.table-bordered {
        border: 0;
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
      min-height: 0%; /* Workaround for IE9 bug (see https://github.com/twbs/bootstrap/issues/14837) */
      overflow-x: auto;
    
       /*TODO: find out if we need this still.
      
       border: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
       -ms-overflow-style: -ms-autohiding-scrollbar; // See https://github.com/twbs/bootstrap/pull/10057
        */
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
    
    /* Reboot Scss */
    /* No longer part of Normalize since v4 */
    border-collapse: collapse;
    /*  Reset for nesting within parents with 'background-color'. */
    background-color: ${props.theme['$table-bg']};    
    
  `}
`;

Table.defaultProps = defaultProps;

export default Table;
