/**
 * Nav Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { hoverFocus } from '../../styled/mixins/hover';
import { borderRadius, borderTopRadius } from '../../styled/mixins/border-radius';
import { nav } from '../../styled/utilities/nav';

const defaultProps = { theme };

class Nav extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <nav
        className={this.props.className}
      >
        {this.props.children}
      </nav>
    );
  }
}

// eslint-disable-next-line no-class-assign
Nav = styled(Nav)`
  ${(props) => `
    /* Base class
    
     Kickstart any navigation component with a set of style resets. Works with
     navs or uls.
     */
    
    ${nav()}

    & .nav-link {
      display: block;
      padding: ${props.theme['$nav-link-padding']};
      
      ${hoverFocus(
        props.theme['$enable-hover-media-query'],
        'text-decoration: none;'
      )}

      /* Disabled state lightens text and removes hover/tab effects */
      &.disabled {
        color: ${props.theme['$nav-disabled-link-color']};
        cursor: ${props.theme['$cursor-disabled']}; 
      }
    }
        
    /*
     Tabs
    */
    
    &.nav-tabs {
      border-bottom: ${props.theme['$nav-tabs-border-width']} solid ${props.theme['$nav-tabs-border-color']};
      & .nav-item {
        margin-bottom: -${props.theme['$nav-tabs-border-width']};
      }
   
      & .nav-link {
        border: ${props.theme['$nav-tabs-border-width']} solid transparent;
        ${borderTopRadius(
          props.theme['$enable-rounded'],
          props.theme['$nav-tabs-border-radius']
        )}
      
        ${hoverFocus(
          props.theme['$enable-hover-media-query'],
          `
            border-color: ${props.theme['$nav-tabs-link-hover-border-color']} ${props.theme['$nav-tabs-link-hover-border-color']} ${props.theme['$nav-tabs-border-color']};
          `
        )};
      
        &.disabled {
          color: ${props.theme['$nav-disabled-link-color']};
          background-color: transparent;
          border-color: transparent;
        }
      }
      
      & .nav-link.active,
      .nav-item.open .nav-link {
        color: ${props.theme['$nav-tabs-active-link-hover-color']};
        background-color: ${props.theme['$nav-tabs-active-link-hover-bg']};
        border-color: ${props.theme['$nav-tabs-active-link-hover-border-color']} ${props.theme['$nav-tabs-active-link-hover-border-color']} transparent;
      }
      
      & .dropdown-menu {
        /* Make dropdown border overlap tab border */
        margin-top: -${props.theme['$nav-tabs-border-width']};
        /* Remove the top rounded corners here since there is a hard edge above the menu */
        ${borderTopRadius(
          props.theme['$enable-rounded'],
          '0'
        )};
      }
    }
    
    /*
     Pills
    */
    
    &.nav-pills {
      .nav-item {
        width: 100%;
        float: left;
        + .nav-item {
          margin-left: ${props.theme['$nav-item-margin']};
        }
      }
    
      .nav-link {
        display: block;
        padding: ${props.theme['$nav-link-padding']};
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$nav-pills-border-radius']
        )};
      }
    
      .nav-link.active,
      .nav-item.open .nav-link {
        color: ${props.theme['$nav-pills-active-link-color']};
        background-color: ${props.theme['$nav-pills-active-link-bg']};
      }
    }
    
    &.nav-stacked {
      .nav-item {
        display: block;
        float: none;
    
        + .nav-item {
          margin-top: ${props.theme['$nav-item-margin']};
          margin-left: 0;
        }
      }
    }
    
    /*
      Justified variants
    */
    
    &.nav-fill {
      .nav-item {
        flex: 1 1 auto;
        text-align: center;
      }
    }
    
    &.nav-justified {
      .nav-item {
        flex: 1 1 100%;
        text-align: center;
      }
    }
    
    /*
     Tabbable tabs
    */
    
    /* Hide tabbable panes to start, show them when .active */
    &.tab-content {
      > .tab-pane {
        display: none;
      }
      > .active {
        display: block;
      }
    }
  `}
`;

Nav.defaultProps = defaultProps;

export default Nav;
