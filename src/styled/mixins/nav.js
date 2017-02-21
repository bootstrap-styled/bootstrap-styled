import { hoverFocus } from './hover';
import { borderRadius, borderTopRadius } from './border-radius';

export const defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$nav-link-padding': '.5em 1em',
  '$nav-disabled-link-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$nav-tabs-border-width': '1px',
  '$nav-tabs-border-color': '#ddd',
  '$nav-tabs-border-radius': '.25rem',
  '$nav-tabs-link-hover-border-color': '#eceeef',
  '$nav-tabs-active-link-hover-color': '#464a4c',
  '$nav-tabs-active-link-hover-bg': '#fff',
  '$nav-tabs-active-link-hover-border-color': '#ddd',
  '$nav-pills-border-radius': '.25rem',
  '$nav-pills-active-link-color': '#fff',
  '$nav-pills-active-link-bg': '#0275d8',
};

export function nav(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $navLinkPadding = defaultProps['$nav-link-padding'],
  $navDisabledLinkColor = defaultProps['$nav-disabled-link-color'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
  $navTabBorderWidth = defaultProps['$nav-tabs-border-width'],
  $navTabsBorderColor = defaultProps['$nav-tabs-border-color'],
  $navTabsBorderRadius = defaultProps['$nav-tabs-border-radius'],
  $navTabsLinkHoverBorderColor = defaultProps['$nav-tabs-link-hover-border-color'],
  $navTabsActiveLinkHoverColor = defaultProps['$nav-tabs-active-link-hover-color'],
  $navTabsActiveLinkHoverBg = defaultProps['$nav-tabs-active-link-hover-bg'],
  $navTabsActiveLinkHoverBorderColor = defaultProps['$nav-tabs-active-link-hover-border-color'],
  $navPillsBorderRadius = defaultProps['$nav-pills-border-radius'],
  $navPillsActiveLinkColor = defaultProps['$nav-pills-active-link-color'],
  $navPillsActiveLinkBg = defaultProps['$nav-pills-active-link-bg'],
) {
  return `
    &.nav {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    
    & .nav-link {
      display: block;
      padding: ${$navLinkPadding};
      
      ${hoverFocus(
        $enableHoverMediaQuery,
        'text-decoration: none;'
      )}

      /* Disabled state lightens text and removes hover/tab effects */
      &.disabled {
        color: ${$navDisabledLinkColor};
        cursor: ${$cursorDisabled}; 
      }
    }
        
    /*
     Tabs
    */
    
    &.nav-tabs {
      border-bottom: ${$navTabBorderWidth} solid ${$navTabsBorderColor};
      & .nav-item {
        margin-bottom: -${$navTabBorderWidth};
      }
   
      & .nav-link {
        border: ${$navTabBorderWidth} solid transparent;
        ${borderTopRadius(
          $enableRounded,
          $navTabsBorderRadius
        )}
      
        ${hoverFocus(
          $enableHoverMediaQuery,
          `
            border-color: ${$navTabsLinkHoverBorderColor} ${$navTabsLinkHoverBorderColor} ${$navTabsBorderColor};
          `
        )};
      
        &.disabled {
          color: ${$navDisabledLinkColor};
          background-color: transparent;
          border-color: transparent;
        }
      }
      
      & .nav-link.active,
      .nav-item.open .nav-link {
        color: ${$navTabsActiveLinkHoverColor};
        background-color: ${$navTabsActiveLinkHoverBg};
        border-color: ${$navTabsActiveLinkHoverBorderColor} ${$navTabsActiveLinkHoverBorderColor} transparent;
      }
      
      & .dropdown-menu {
        /* Make dropdown border overlap tab border */
        margin-top: -${$navTabBorderWidth};
        /* Remove the top rounded corners here since there is a hard edge above the menu */
        ${borderTopRadius(
          $enableRounded,
          '0'
        )};
      }
    }
    
    /*
     Pills
    */
    
    &.nav-pills {
      .nav-link {
        ${borderRadius(
          $enableRounded,
          $navPillsBorderRadius
        )};
      }

      .nav-link.active,
      .nav-item.show .nav-link {
        color: ${$navPillsActiveLinkColor};
        background-color: ${$navPillsActiveLinkBg};
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
    
    /* Hide tabbable panes to start, show them when .active */
    &.tab-content {
      > .tab-pane {
        display: none;
      }
      > .active {
        display: block;
      }
    }
  `;
}

export default {
  nav,
};
