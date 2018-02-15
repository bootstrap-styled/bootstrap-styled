/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { borderTopRadius, borderBottomRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { hoverFocus } from 'bootstrap-styled-mixins/lib/hover';
import { listGroupItemVariant } from 'bootstrap-styled-mixins/lib/list-group';
import { makeTheme } from './theme';
import Ul from '../Ul/index';


class ListGroupUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: Ul,
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    flush: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      flush,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'list-group',
      flush ? 'list-group-flush' : false
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

const ListGroup = styled(ListGroupUnstyled)`
  ${(props) => `
    /* 
      Base class
      Easily usable on ul, ol, or div.
    */
    
    &.list-group {
      display: flex;
      flex-direction: column;
      /* No need to set list-style: none; since .list-group-item is block level */
      padding-left: 0;  /* reset padding because ul and ol */
      margin-bottom: 0;
    }
    
    
    /* 
      Interactive list items
      Use anchor or button elements instead of 'li's or 'div's to create interactive
      list items. Includes an extra '.active' modifier class for selected items.
    */
    
    & .list-group-item-action {
      width: 100%; /* For 'button's (anchors become 100% by default though) */
      color: ${props.theme['$list-group-link-color']};
      text-align: inherit; /* For 'button's (anchors inherit) */
    
      /* Hover state */
      ${hoverFocus(
        props.theme['$enable-hover-media-query'],
        `
          color: ${props.theme['$list-group-link-hover-color']};
          text-decoration: none;
          background-color: ${props.theme['$list-group-hover-bg']};
        `
      )};
      
      &:active {
        color: ${props.theme['$list-group-link-active-color']};
        background-color: ${props.theme['$list-group-link-active-bg']};
      }
    }
    
    /* 
      Individual list items
      Use on 'li's or 'div's within the '.list-group' parent.
    */
    
    & .list-group-item {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
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
      
      ${hoverFocus(props.theme['$enable-hover-media-query'], 'text-decoration: none;')}
        
      &.disabled,
      &:disabled {   
        color: ${props.theme['$list-group-disabled-color']};
        cursor: ${props.theme['$cursor-disabled']};
        background-color: ${props.theme['$list-group-disabled-bg']};
      }
    
    
      &.active {
        z-index: 2; /* Place active items above their siblings for proper border styling */
        color: ${props.theme['$list-group-active-color']};
        background-color: ${props.theme['$list-group-active-bg']};
        border-color: ${props.theme['$list-group-active-border']};     
      }
    }
    
    /* 
      Flush list items
      Remove borders and border-radius to keep list group items edge-to-edge. Most
      useful within other components (e.g., cards).
    */

    &.list-group-flush {
      .list-group-item {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }
      
      &:first-child {
        .list-group-item:first-child {
          border-top: 0;
        }
      }

      &:last-child {
        .list-group-item:last-child {
          border-bottom: 0;
        }
      }
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
  `}
`;

/** @component */
export default ListGroup;

