import { hoverFocus, plainHoverFocus } from '../mixins/hover';
import { mediaBreakpointUp } from '../mixins/breakpoints';
import { borderRadius } from '../mixins/border-radius';
import { navbarToggleable } from '../mixins/navbar-toggleable';
import { getBackgroundUtilities } from './background';

export var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$navbar-padding-y': '0.5rem',
  '$navbar-padding-x': '1rem',
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
  '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="\'rgba(0,0,0,.5)\'" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E\')', // eslint-disable-line quotes
  '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
  '$navbar-dark-active-color': 'rgba(255,255,255,1)',
  '$navbar-dark-color': 'rgba(255,255,255,.5)',
  '$navbar-dark-hover-color': 'rgba(255,255,255,.75)',
  '$navbar-dark-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="\'rgba(255,255,255,.5)\'" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h24M4 16h24M4 24h24"/%3E%3C/svg%3E\')', // eslint-disable-line quotes
  '$navbar-dark-toggler-border': 'rgba(255,255,255,.1)'
};

export function navbar() {
  var $gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-hover-media-query'];
  var $navbarPaddingY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$navbar-padding-y'];
  var $navbarPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$navbar-padding-x'];
  var $zindexNavbar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$zindex-navbar'];
  var $zindexNavbarFixed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$zindex-navbar-fixed'];
  var $zindexNavbarSticky = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$zindex-navbar-sticky'];
  var $navbarBrandPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$navbar-brand-padding-y'];
  var $fontSizeLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$font-size-lg'];
  var $navbarDividerPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$navbar-divider-padding-y'];
  var $navbarTogglerPaddingY = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$navbar-toggler-padding-y'];
  var $navbarTogglerPaddingX = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$navbar-toggler-padding-x'];
  var $navbarTogglerFontSize = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$navbar-toggler-font-size'];
  var $borderWidth = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$border-width'];
  var $navbarTogglerBorderRadius = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$navbar-toggler-border-radius'];
  var $navbarLightActiveColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$navbar-light-active-color'];
  var $navbarLightColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$navbar-light-color'];
  var $navbarLightHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$navbar-light-hover-color'];
  var $navbarLightTogglerBg = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$navbar-light-toggler-bg'];
  var $navbarLightTogglerBorder = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$navbar-light-toggler-border'];
  var $navbarDarkActiveColor = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$navbar-dark-active-color'];
  var $navbarDarkColor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$navbar-dark-color'];
  var $navbarDarkHoverColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$navbar-dark-hover-color'];
  var $navbarDarkTogglerBg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$navbar-dark-toggler-bg'];
  var $navbarDarkTogglerBorder = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$navbar-dark-toggler-border'];

  return '\n    /* Wrapper and base class\n\n     Provide a static navbar from which we expand to create full-width, fixed, and\n     other navbar variations.\n    */\n\n    &.navbar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      padding: ' + $navbarPaddingY + ' ' + $navbarPaddingX + ';\n\n      ' + getBackgroundUtilities() + '\n    }\n    \n    /*\n     Brand/project name\n    */\n\n    & .navbar-brand {\n      display: inline-block;\n      padding-top: ' + $navbarBrandPaddingY + ';\n      padding-bottom: ' + $navbarBrandPaddingY + ';\n      margin-right: 1rem;\n      font-size: ' + $fontSizeLg + ';\n      line-height: inherit;\n      white-space: nowrap;\n\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Navigation\n\n     Custom navbar navigation built on the base .nav styles.\n    */\n\n    &.navbar-nav \n    ,& .navbar-nav {\n      display: flex;\n      flex-direction: column;\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n      \n      & .nav-item {\n        float: left;\n      }\n\n      & .nav-link {\n        padding-right: 0;\n        padding-left: 0;\n\n        + .nav-link {\n          margin-left: 1rem;\n        }\n      }\n\n      .nav-item + .nav-item {\n        margin-left: 1rem;\n      }\n    }\n    \n    /* Navbar text  */\n\n    & .navbar-text {\n      display: inline-block;\n      padding-top:    .425rem;\n      padding-bottom: .425rem;\n    }\n\n\n\n    /* Navbar alignment options\n\n     Display the navbar across the entirety of the page or fixed it to the top or\n     bottom of the page.\n    */\n\n    /* A static, full width modifier with no rounded corners. */\n    &.navbar-full {\n      z-index: ' + $zindexNavbar + ';\n\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n      /* Fix the top/bottom navbars when screen real estate supports it */\n    &.navbar-fixed-top,\n    &.navbar-fixed-bottom {\n      position: fixed;\n      right: 0;\n      left: 0;\n      z-index: ' + $zindexNavbarFixed + ';\n\n      /*  Undo the rounded corners*/\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    &.navbar-fixed-top {\n      top: 0;\n    }\n\n    &.navbar-fixed-bottom {\n      bottom: 0;\n    }\n\n    /* position sticky does not seem to be working AJT*/\n\n    &.navbar-sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + $zindexNavbarSticky + ';\n      width: 100%;\n\n        /*  Undo the rounded corners */\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    & .navbar-divider {\n      float: left;\n      width: ' + $borderWidth + ';\n      padding-top: ' + $navbarDividerPaddingY + ';\n      padding-bottom: ' + $navbarDividerPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      margin-left:  ' + $navbarPaddingX + ';\n      overflow: hidden;\n\n      &::before {\n        content: \'\0a0\';\n      }\n    }\n\n    /* Navbar toggle\n\n     Custom button for toggling the .navbar-collapse, powered by the collapse\n     Bootstrap JavaScript plugin.\n    */\n\n    & .navbar-toggler {\n      align-self: flex-start; \n      padding: ' + $navbarTogglerPaddingY + ' ' + $navbarTogglerPaddingX + ';\n      font-size: ' + $navbarTogglerFontSize + ';\n      line-height: 1;\n      background: transparent no-repeat center center;\n      background-size: 24px 24px;\n      border: ' + $borderWidth + ' solid transparent;\n      ' + borderRadius($enableRounded, $navbarTogglerBorderRadius) + ';\n\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */\n    & .navbar-toggler-icon {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      vertical-align: middle;\n      content: "";\n      background: no-repeat center center;\n      background-size: 100% 100%;\n    }\n    \n    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */\n    & .navbar-toggler-left {\n      position: absolute;\n      left: ' + $navbarPaddingX + ';\n    }\n    & .navbar-toggler-right {\n      position: absolute;\n      right: ' + $navbarPaddingX + ';\n    }\n\n    /* Dark links against a light background */\n    &.navbar-light {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarLightActiveColor + ';\n\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarLightColor + ';\n\n\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightHoverColor + ';') + '\n        }\n\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          ' + plainHoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n        }\n      }\n\n    .navbar-toggler {\n      background-image: ' + $navbarLightTogglerBg + ';\n      border-color: ' + $navbarLightTogglerBorder + ';\n    }\n\n    .navbar-divider {\n      background-color: rgba(0,0,0,.075);\n    }\n    }\n\n    /* White links against a dark background */\n    &.navbar-dark {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarDarkActiveColor + ';\n\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarDarkActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarDarkColor + ';\n\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarDarkHoverColor + ';') + '\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          ' + plainHoverFocus($enableHoverMediaQuery, 'color: ' + $navbarDarkActiveColor + ';') + '\n        }\n      }\n\n      .navbar-toggler {\n        background-image: ' + $navbarDarkTogglerBg + ';\n        border-color: ' + $navbarDarkTogglerBorder + ';\n      }\n\n      .navbar-divider {\n        background-color: rgba(255,255,255,.075);\n      }\n    }\n\n    ' + navbarToggleable($gridBreakpoints) + '\n  ';
}

export default {
  defaultProps: defaultProps,
  navbar: navbar
};