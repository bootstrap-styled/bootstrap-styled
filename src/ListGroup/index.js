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
import Ul from '../Ul/index';


export const defaultProps = {
  tag: Ul,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$list-group-color': '#292b2c',
    '$list-group-bg': '#fff',
    '$list-group-border-color': 'rgba(0, 0, 0, 0.125)',
    '$list-group-border-width': '1px',
    '$list-group-border-radius': '.25rem',
    '$list-group-item-padding-x': '1.25rem',
    '$list-group-item-padding-y': '.75rem',
    '$list-group-hover-bg': '#f7f7f9',
    '$list-group-active-color': '#fff',
    '$list-group-active-bg': '#0275d8',
    '$list-group-active-border': '#0275d8',
    '$list-group-disabled-color': '#636c72',
    '$list-group-disabled-bg': '#fff',
    '$list-group-link-color': '#464a4c',
    '$list-group-link-hover-color': '#464a4c',
    '$list-group-link-active-color': '#292b2c',
    '$list-group-link-active-bg': '#eceeef',
    '$cursor-disabled': 'not-allowed',
    '$state-success-text': '#3c763d',
    '$state-success-bg': '#dff0d8',
    '$state-info-text': '#31708f',
    '$state-info-bg': '#d9edf7',
    '$state-warning-text': '#8a6d3b',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-text': '#a94442',
    '$state-danger-bg': '#f2dede',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Replace the default component tag by the one specified. Can be: */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Toggles flush CSS style. */
  flush: PropTypes.bool,
  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: PropTypes.string,
  /** Theme variables. */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$component-active-color': PropTypes.string,
    '$component-active-bg': PropTypes.string,
    '$list-group-color': PropTypes.string,
    '$list-group-bg': PropTypes.string,
    '$list-group-border-color': PropTypes.string,
    '$list-group-border-width': PropTypes.string,
    '$list-group-border-radius': PropTypes.string,
    '$list-group-item-padding-x': PropTypes.string,
    '$list-group-item-padding-y': PropTypes.string,
    '$list-group-hover-bg': PropTypes.string,
    '$list-group-active-color': PropTypes.string,
    '$list-group-active-bg': PropTypes.string,
    '$list-group-active-border': PropTypes.string,
    '$list-group-disabled-color': PropTypes.string,
    '$list-group-disabled-bg': PropTypes.string,
    '$list-group-link-color': PropTypes.string,
    '$list-group-link-hover-color': PropTypes.string,
    '$list-group-link-active-color': PropTypes.string,
    '$list-group-link-active-bg': PropTypes.string,
    '$cursor-disabled': PropTypes.string,
    '$state-success-text': PropTypes.string,
    '$state-success-bg': PropTypes.string,
    '$state-info-text': PropTypes.string,
    '$state-info-bg': PropTypes.string,
    '$state-warning-text': PropTypes.string,
    '$state-warning-bg': PropTypes.string,
    '$state-danger-text': PropTypes.string,
    '$state-danger-bg': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class ListGroupUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
/**
 * The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.
 */
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

ListGroup.defaultProps = defaultProps;
ListGroup.propTypes = propTypes;

/** @component */
export default ListGroup;

