/* eslint-disable quote-props, dot-notation */
/**
 * Tables: default, striped, bordered, hover, condensed and responsive.
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import cn from 'classnames';
import { unitUtils } from 'math-utils';
import bsTheme from '../../theme';
import { tableRowVariant } from '../../styled/mixins/table-row';
import { hover as hoverMixin } from '../../styled/mixins/hover';
import { mapToCssModules } from '../../styled/utilities/tools';

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
  theme: bsTheme,
};

class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    inverse: PropTypes.bool,
    hover: PropTypes.bool,
    reflow: PropTypes.bool,
    responsive: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

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
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;

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
      background-color: ${props.theme['$table-bg']};

      th,
      td {
        padding: ${props.theme['$table-cell-padding']};
        vertical-align: top;
        border-top: ${props.theme['$table-border-width']} solid ${props.theme['$table-border-color']};
      }
    
      thead th {
        vertical-align: bottom;
        border-bottom: ${unitUtils.math.multiply(2, props.theme['$table-border-width'])} solid ${props.theme['$table-border-color']};
      }
    
      tbody + tbody {
        border-top: ${unitUtils.math.multiply(2, props.theme['$table-border-width'])} solid ${props.theme['$table-border-color']};
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

export default Table;
