/* Progress (Animation Bar) */


import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from '../../config';
import { paginationSize } from '../../styled/mixins/pagination';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { hoverFocus, plainHoverFocus } from '../../styled/mixins/hover';

const defaultProps = { theme };

class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <pagination className={cn(this.props.className, 'pagination')}>
        {this.props.children}
      </pagination>
    );
  }
}

// eslint-disable-next-line no-class-assign
Pagination = styled(Pagination)`
  ${(props) => `
    &.pagination {
      display: inline-block;
      padding-left: 0;
      margin-top: ${props.theme['$spacer-y']};
      margin-bottom: ${props.theme['$spacer-y']};
      ${borderRadius(
        props.theme['$enable-rounded']
      )}
    }

    & .page-item {
      display: inline; /* Remove list-style and block-level defaults */

      &:first-child {
        .page-link {
          margin-left: 0;
          ${borderLeftRadius(
            props.theme['$enable-rounded'],
          )}
        }
      }
      &:last-child {
        .page-link {
          ${borderRightRadius(
            props.theme['$enable-rounded'],
          )}
        }
      }

      &.active .page-link {
        ${plainHoverFocus(
          props.theme['$enable-hover-media-query'], `
            z-index: 2;
            color: ${props.theme['$pagination-active-color']};
            cursor: default;
            background-color: ${props.theme['$pagination-active-bg']};
            border-color: ${props.theme['$pagination-active-border']};
          `
        )}
      }

      &.disabled .page-link {
        ${plainHoverFocus(
          props.theme['$enable-hover-media-query'], `
            color: ${props.theme['$pagination-disabled-color']};
            pointer-events: none;
            cursor: ${props.theme['$cursor-disabled']};
            background-color: ${props.theme['$pagination-disabled-bg']};
            border-color: ${props.theme['$pagination-disabled-border']};
          `
        )}
      }
    }

    & .page-link {
      position: relative;
      float: left; /* Collapse white-space */
      padding: ${props.theme['$pagination-padding-y']} ${props.theme['$pagination-padding-x']};
      margin-left: -1px;
      color: ${props.theme['$pagination-color']};
      text-decoration: none;
      background-color: ${props.theme['$pagination-bg']};
      border: ${props.theme['$pagination-border-width']} solid ${props.theme['$pagination-border-color']};

      ${hoverFocus(
        props.theme['$enable-hover-media-query'], `
          color: ${props.theme['$pagination-hover-color']};
          background-color: ${props.theme['$pagination-hover-bg']};
          border-color: ${props.theme['$pagination-hover-border']};
        `
      )}
    }

    /* Sizing */
    &.pagination-lg {
      ${paginationSize(
        props.theme['$enable-rounded'],
        props.theme['$pagination-padding-y-lg'],
        props.theme['$pagination-padding-x-lg'],
        props.theme['$font-size-lg'],
        props.theme['$line-height-lg'],
        props.theme['$border-radius-lg']
      )}
    }

    &.pagination-sm {
      ${paginationSize(
        props.theme['$enable-rounded'],
        props.theme['$pagination-padding-y-sm'],
        props.theme['$pagination-padding-x-sm'],
        props.theme['$font-size-sm'],
        props.theme['$line-height-sm'],
        props.theme['$border-radius-sm']
      )}
    }
  `}
`;

Pagination.defaultProps = defaultProps;

export default Pagination;
