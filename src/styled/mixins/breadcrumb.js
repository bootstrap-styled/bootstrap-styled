import { borderRadius } from './border-radius';
import { clearfix } from './clearfix';

export const defaultProps = {
  '$enable-rounded': true,
  '$border-radius': '.25rem',
  '$breadcrumb-padding-y': '.75rem',
  '$breadcrumb-padding-x': '.75rem',
  '$spacer-y': '1rem',
  '$breadcrumb-bg': '#eceeef',
  '$breadcrumb-item-padding': '.5rem',
  '$breadcrumb-divider-color': '#636c72',
  '$breadcrumb-divider': '"/"',
  '$breadcrumb-active-color': '#636c72',
};

export function breadcrumb(
  $enableRounded = defaultProps['$enable-rounded'],
  $borderRadius = defaultProps['$border-radius'],
  $breadcrumbPaddingY = defaultProps['$breadcrumb-padding-y'],
  $breadcrumbPaddingX = defaultProps['$breadcrumb-padding-x'],
  $spacerY = defaultProps['$spacer-y'],
  $breadcrumbBg = defaultProps['$breadcrumb-bg'],
  $breadcrumbItemPadding = defaultProps['$breadcrumb-item-padding'],
  $breadcrumbDividerColor = defaultProps['$breadcrumb-divider-color'],
  $breadcrumbDivider = defaultProps['$breadcrumb-divider'],
  $breadcrumbActiveColor = defaultProps['$breadcrumb-active-color'],
) {
  return `
    &.breadcrumb {
      padding: ${$breadcrumbPaddingY} ${$breadcrumbPaddingX};
      margin-bottom: ${$spacerY};
      list-style: none;
      background-color: ${$breadcrumbBg};
 
      ${borderRadius(
        $enableRounded,
        $borderRadius
      )}
      
      ${clearfix()}
    }

    & .breadcrumb-item {
      float: left;
    
      /* The separator between breadcrumbs (by default, a forward-slash: "/") */
      + .breadcrumb-item::before {
        display: inline-block; /* Suppress underlining of the separator in modern browsers */
        padding-right: ${$breadcrumbItemPadding};
        padding-left: ${$breadcrumbItemPadding};
        color: ${$breadcrumbDividerColor};
        content: ${$breadcrumbDivider};
      }
  
      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built
       without 'ul's. The '::before' pseudo-element generates an element
       *within* the .breadcrumb-item and thereby inherits the 'text-decoration'.
      
       To trick IE into suppressing the underline, we give the pseudo-element an
       underline and then immediately remove it.
      */
      
      + .breadcrumb-item:hover::before {
        text-decoration: underline;
      }
      + .breadcrumb-item:hover::before {
        text-decoration: none;
      }
    
      &.active {
        color: ${$breadcrumbActiveColor};
      }
    }
  `;
}

export default {
  defaultProps,
  breadcrumb,
};
