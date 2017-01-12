import { hoverFocus, plainHoverFocus } from '../mixins/hover';
import { mediaBreakpointUp } from '../mixins/breakpoints';
import { borderRadius } from '../mixins/border-radius';
import { navbarToggleable } from '../mixins/navbar-toggleable';
import { getBackgroundUtilities } from './background';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$navbar-padding-y': '0.5rem',
  '$navbar-padding-x': '1rem',
  '$navbar-border-radius': '.25rem',
  '$zindex-navbar': '1000',
  '$zindex-navbar-fixed': '1030',
  '$zindex-navbar-sticky': '1030',
  '$navbar-brand-padding-y': '.25rem',
  '$font-size-lg': '1.25rem',
  '$navbar-divider-padding-y': '.425rem',
  '$navbar-toggler-padding-y': '.5rem',
  '$navbar-toggler-padding-x': '.75rem',
  '$navbar-toggler-font-size': '1.25rem',
  '$border-width': '1px',
  '$navbar-toggler-border-radius': '.25rem',
  '$navbar-light-active-color': 'rgba(0,0,0,.9)',
  '$navbar-light-color': 'rgba(0,0,0,.5)',
  '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
  '$navbar-light-toggler-bg': `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="'rgba(0,0,0,.5)'" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E')`, // eslint-disable-line quotes
  '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
  '$navbar-dark-active-color': 'rgba(255,255,255,1)',
  '$navbar-dark-color': 'rgba(255,255,255,.5)',
  '$navbar-dark-hover-color': 'rgba(255,255,255,.75)',
  '$navbar-dark-toggler-bg': `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="'rgba(255,255,255,.5)'" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E')`, // eslint-disable-line quotes
  '$navbar-dark-toggler-border': 'rgba(255,255,255,.1)',
};

export function navbar(
  $gridBreakpoints = defaultProps['$grid-breakpoints'],
  $enableRounded = defaultProps['$enable-rounded'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $navbarPaddingY = defaultProps['$navbar-padding-y'],
  $navbarPaddingX = defaultProps['$navbar-padding-x'],
  $zindexNavbar = defaultProps['$zindex-navbar'],
  $zindexNavbarFixed = defaultProps['$zindex-navbar-fixed'],
  $zindexNavbarSticky = defaultProps['$zindex-navbar-sticky'],
  $navbarBrandPaddingY = defaultProps['$navbar-brand-padding-y'],
  $fontSizeLg = defaultProps['$font-size-lg'],
  $navbarDividerPaddingY = defaultProps['$navbar-divider-padding-y'],
  $navbarTogglerPaddingY = defaultProps['$navbar-toggler-padding-y'],
  $navbarTogglerPaddingX = defaultProps['$navbar-toggler-padding-x'],
  $navbarTogglerFontSize = defaultProps['$navbar-toggler-font-size'],
  $borderWidth = defaultProps['$border-width'],
  $navbarTogglerBorderRadius = defaultProps['$navbar-toggler-border-radius'],
  $navbarLightActiveColor = defaultProps['$navbar-light-active-color'],
  $navbarLightColor = defaultProps['$navbar-light-color'],
  $navbarLightHoverColor = defaultProps['$navbar-light-hover-color'],
  $navbarLightTogglerBg = defaultProps['$navbar-light-toggler-bg'],
  $navbarLightTogglerBorder = defaultProps['$navbar-light-toggler-border'],
  $navbarDarkActiveColor = defaultProps['$navbar-dark-active-color'],
  $navbarDarkColor = defaultProps['$navbar-dark-color'],
  $navbarDarkHoverColor = defaultProps['$navbar-dark-hover-color'],
  $navbarDarkTogglerBg = defaultProps['$navbar-dark-toggler-bg'],
  $navbarDarkTogglerBorder = defaultProps['$navbar-dark-toggler-border'],
) {
  return `
    /* Wrapper and base class

     Provide a static navbar from which we expand to create full-width, fixed, and
     other navbar variations.
    */

    &.navbar {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: ${$navbarPaddingY} ${$navbarPaddingX};

      ${getBackgroundUtilities()}
    }
    
    /*
     Brand/project name
    */

    & .navbar-brand {
      display: inline-block;
      padding-top: ${$navbarBrandPaddingY};
      padding-bottom: ${$navbarBrandPaddingY};
      margin-right: 1rem;
      font-size: ${$fontSizeLg};
      line-height: inherit;
      white-space: nowrap;

      ${hoverFocus(
        $enableHoverMediaQuery,
        'text-decoration: none;'
      )}
    }
    
    /* Navigation

     Custom navbar navigation built on the base .nav styles.
    */

    &.navbar-nav 
    ,& .navbar-nav {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      
      & .nav-item {
        float: left;
      }

      & .nav-link {
        padding-right: 0;
        padding-left: 0;

        + .nav-link {
          margin-left: 1rem;
        }
      }

      .nav-item + .nav-item {
        margin-left: 1rem;
      }
    }
    
    /* Navbar text  */

    & .navbar-text {
      display: inline-block;
      padding-top:    .425rem;
      padding-bottom: .425rem;
    }



    /* Navbar alignment options

     Display the navbar across the entirety of the page or fixed it to the top or
     bottom of the page.
    */

    /* A static, full width modifier with no rounded corners. */
    &.navbar-full {
      z-index: ${$zindexNavbar};

      ${mediaBreakpointUp(
        'sm',
        $gridBreakpoints,
        borderRadius(
          $enableRounded,
          '0'
        )
      )}
    }

      /* Fix the top/bottom navbars when screen real estate supports it */
    &.navbar-fixed-top,
    &.navbar-fixed-bottom {
      position: fixed;
      right: 0;
      left: 0;
      z-index: ${$zindexNavbarFixed};

      /*  Undo the rounded corners*/
      ${mediaBreakpointUp(
        'sm',
        $gridBreakpoints,
        borderRadius(
          $enableRounded,
          '0'
        )
      )}
    }

    &.navbar-fixed-top {
      top: 0;
    }

    &.navbar-fixed-bottom {
      bottom: 0;
    }

    /* position sticky does not seem to be working AJT*/

    &.navbar-sticky-top {
      position: sticky;
      top: 0;
      z-index: ${$zindexNavbarSticky};
      width: 100%;

        /*  Undo the rounded corners */
      ${mediaBreakpointUp(
        'sm',
        $gridBreakpoints,
        borderRadius(
          $enableRounded,
          '0'
        )
      )}
    }

    & .navbar-divider {
      float: left;
      width: ${$borderWidth};
      padding-top: ${$navbarDividerPaddingY};
      padding-bottom: ${$navbarDividerPaddingY};
      margin-right: ${$navbarPaddingX};
      margin-left:  ${$navbarPaddingX};
      overflow: hidden;

      &::before {
        content: '\00a0';
      }
    }

    /* Navbar toggle

     Custom button for toggling the .navbar-collapse, powered by the collapse
     Bootstrap JavaScript plugin.
    */

    & .navbar-toggler {
      align-self: flex-start; 
      padding: ${$navbarTogglerPaddingY} ${$navbarTogglerPaddingX};
      font-size: ${$navbarTogglerFontSize};
      line-height: 1;
      background: transparent no-repeat center center;
      background-size: 24px 24px;
      border: ${$borderWidth} solid transparent;
      ${borderRadius($enableRounded, $navbarTogglerBorderRadius)};

      ${hoverFocus(
        $enableHoverMediaQuery,
        'text-decoration: none;'
      )}
    }
    
    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */
    & .navbar-toggler-icon {
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      vertical-align: middle;
      content: "";
      background: no-repeat center center;
      background-size: 100% 100%;
    }
    
    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */
    & .navbar-toggler-left {
      position: absolute;
      left: ${$navbarPaddingX};
    }
    & .navbar-toggler-right {
      position: absolute;
      right: ${$navbarPaddingX};
    }

    ${navbarToggleable($gridBreakpoints)}


    /* Dark links against a light background */
    &.navbar-light {
      .navbar-brand,
      .navbar-toggler {
        color: ${$navbarLightActiveColor};

        ${hoverFocus(
          $enableHoverMediaQuery,
          `color: ${$navbarLightActiveColor};`
        )}
      }

      .navbar-nav {
        .nav-link {
          color: ${$navbarLightColor};


          ${hoverFocus(
            $enableHoverMediaQuery,
            `color: ${$navbarLightHoverColor};`
          )}
        }


        .open > .nav-link,
        .active > .nav-link,
        .nav-link.open,
        .nav-link.active {
          ${plainHoverFocus(
            $enableHoverMediaQuery,
            `color: ${$navbarLightActiveColor};`
          )}
        }
      }

    .navbar-toggler {
      background-image: ${$navbarLightTogglerBg};
      border-color: ${$navbarLightTogglerBorder};
    }

    .navbar-divider {
      background-color: rgba(0,0,0,.075);
    }
    }

    /* White links against a dark background */
    &.navbar-dark {
      .navbar-brand,
      .navbar-toggler {
        color: ${$navbarDarkActiveColor};

        ${hoverFocus(
          $enableHoverMediaQuery,
          `color: ${$navbarDarkActiveColor};`
        )}
      }

      .navbar-nav {
        .nav-link {
          color: ${$navbarDarkColor};

          ${hoverFocus(
            $enableHoverMediaQuery,
            `color: ${$navbarDarkHoverColor};`
          )}
        }

        .open > .nav-link,
        .active > .nav-link,
        .nav-link.open,
        .nav-link.active {
          ${plainHoverFocus(
            $enableHoverMediaQuery,
            `color: ${$navbarDarkActiveColor};`
          )}
        }
      }

      .navbar-toggler {
        background-image: ${$navbarDarkTogglerBg};
        border-color: ${$navbarDarkTogglerBorder};
      }

      .navbar-divider {
        background-color: rgba(255,255,255,.075);
      }
    }

  `;
}

export default {
  defaultProps,
  navbar,
};
