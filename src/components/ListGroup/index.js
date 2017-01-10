/**
 * ListGroup component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';
import { borderTopRadius, borderBottomRadius } from '../../styled/mixins/border-radius';
import { hoverFocus, plainHoverFocus } from '../../styled/mixins/hover';
import { listGroupItemVariant } from '../../styled/mixins/list-group';
import Ul from '../Ul/index';

const defaultProps = { theme };

class ListGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { children, className } = this.props;
    return (
      <Ul
        className={cn(className, 'list-group')}
      >
        {children}
      </Ul>
    );
  }

}

// eslint-disable-next-line no-class-assign
ListGroup = styled(ListGroup)`
  ${(props) => `
    /* Base class

    Easily usable on ul, ol, or div.
    */
    
    &.list-group {
      /* No need to set list-style: none; since .list-group-item is block level */
      padding-left: 0;  /* reset padding because ul and ol */
      margin-bottom: 0;
    }
    
    
    /* Individual list items
    
     Use on 'li's or 'div's within the '.list-group' parent.
    */
    
    & .list-group-item {
      position: relative;
      display: block;
      padding: ${props.theme['$list-group-item-padding-y']} ${props.theme['$list-group-item-padding-x']};
      /* Place the border on the list items and negative margin up for better styling */
      margin-bottom: -${props.theme['$list-group-border-width']};
      background-color: ${props.theme['$list-group-bg']};
      border: ${props.theme['$list-group-border-width']} solid ${props.theme['$list-group-border-color']};
    
      &:first-child {
        ${borderTopRadius(
          props.theme['$enable-rounded'],
          props.theme['$list-group-border-radius']
        )}
      }

      &:last-child {
        margin-bottom: 0;
        ${borderBottomRadius(
          props.theme['$enable-rounded'],
          props.theme['$list-group-border-radius']
        )}
      }
        
      &.disabled {
        ${plainHoverFocus(
          props.theme['$enable-hover-media-query'],
          `
            color: ${props.theme['$list-group-disabled-color']};
            cursor: ${props.theme['$cursor-disabled']};
            background-color: ${props.theme['$list-group-disabled-bg']};
            /* Force color to inherit for custom content */
            .list-group-item-heading {
              color: inherit;
            }
            .list-group-item-text {
              color: ${props.theme['$list-group-disabled-text-color']};
            }      
          `
        )}  
      }
    
      &.active {
        ${plainHoverFocus(
          props.theme['$enable-hover-media-query'],
          `
            z-index: 2; /* Place active items above their siblings for proper border styling */
            color: ${props.theme['$list-group-active-color']};
            text-decoration: none; /*  Repeat here because it inherits global a:hover otherwise */
            background-color: ${props.theme['$list-group-active-bg']};
            border-color: ${props.theme['$list-group-active-border']};
      
            /* Force color to inherit for custom content */
            .list-group-item-heading,
            .list-group-item-heading > small,
            .list-group-item-heading > .small {
              color: inherit;
            }
            .list-group-item-text {
              color: ${props.theme['$list-group-active-text-color']};
            }      
          `
        )}
      }
    }
    
    &.list-group-flush {
      .list-group-item {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }
    }
    
    
    /* Interactive list items
    
     Use anchor or button elements instead of 'li's or 'div's to create interactive
     list items. Includes an extra '.active' modifier class for selected items.
    */
    
    & .list-group-item-action {
      width: 100%; /* For 'button's (anchors become 100% by default though) */
      color: ${props.theme['$list-group-link-color']};
      text-align: inherit; /* For 'button's (anchors inherit) */
    
      .list-group-item-heading {
        color: ${props.theme['$list-group-link-heading-color']};
      }
    
      /* Hover state */
      ${hoverFocus(
        props.theme['$enable-hover-media-query'],
        `
          color: ${props.theme['$list-group-link-hover-color']};
          text-decoration: none;
          background-color: ${props.theme['$list-group-hover-bg']};
        `
      )};
     
    }
    
    
    /* Contextual variants
    
     Add modifier classes to change text and background color on individual items.
     Organizationally, this must come after the ':hover' states.
    */
    
    ${listGroupItemVariant(
      props.theme['$enable-hover-media-query'],
      'success',
      props.theme['$state-success-bg'],
      props.theme['$state-success-text'],
    )}
    ${listGroupItemVariant(
      props.theme['$enable-hover-media-query'],
      'info',
      props.theme['$state-info-bg'],
      props.theme['$state-info-text'],
    )}
    ${listGroupItemVariant(
      props.theme['$enable-hover-media-query'],
      'warning',
      props.theme['$state-warning-bg'],
      props.theme['$state-warning-text'],
    )}
    ${listGroupItemVariant(
      props.theme['$enable-hover-media-query'],
      'danger',
      props.theme['$state-danger-bg'],
      props.theme['$state-danger-text'],
    )}
        
    /* Custom content options
    
     Extra classes for creating well-formatted content within '.list-group-item's.
    */
    
    & .list-group-item-heading {
      margin-top: 0;
      margin-bottom: ${props.theme['$list-group-item-heading-margin-bottom']};
    }
    & .list-group-item-text {
      margin-bottom: 0;
      line-height: 1.3;
    }
    
  `}
`;

ListGroup.defaultProps = defaultProps;

export default ListGroup ;

