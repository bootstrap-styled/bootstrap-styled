import { paginationSize } from '../../styled/mixins/paginations';
import { borderRadius, borderLeftRadius, borderRightRadius } from './border-radius';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$border-radius': '.25rem',
  '$pagination-active-color': '#fff',
  '$pagination-active-bg': '#0275d8',
  '$pagination-active-border': '#0275d8',
  '$pagination-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$pagination-disabled-bg': '#fff',
  '$pagination-disabled-border': '#ddd',
  '$pagination-padding-y': '.75rem',
  '$pagination-padding-x': '.5rem',
  '$pagination-line-height': '1.25',
  '$pagination-color': '#0275d8',
  '$pagination-bg': '#fff',
  '$pagination-border-width': '1px',
  '$pagination-border-color': '#ddd',
  '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$pagination-hover-bg': '#eceeef',
  '$pagination-hover-border': '#ddd',
  '$pagination-padding-y-lg': '.75rem',
  '$pagination-padding-x-lg': '1.5rem',
  '$font-size-lg': '1.25rem',
  '$line-height-lg': '1.3',
  '$border-radius-lg': '.3rem',
  '$pagination-padding-y-sm': '.25rem',
  '$pagination-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$line-height-sm': '1.5',
  '$border-radius-sm': '.2rem',
};

export function pagination(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $borderRadius = defaultProps['$border-radius'],
  $paginationActiveColor = defaultProps['$pagination-active-color'],
  $paginationActiveBg = defaultProps['$pagination-active-bg'],
  $paginationActiveBorder = defaultProps['$pagination-active-border'],
  $paginationDisabledColor = defaultProps['$pagination-disabled-color'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
  $paginationDisabledBg = defaultProps['$pagination-disabled-bg'],
  $paginationDisabledBorder = defaultProps['$pagination-disabled-border'],
  $paginationPaddingY = defaultProps['$pagination-padding-y'],
  $paginationPaddingX = defaultProps['$pagination-padding-x'],
  $paginationLineHeight = defaultProps['$pagination-line-height'],
  $paginationColor = defaultProps['$pagination-color'],
  $paginationBg = defaultProps['$pagination-bg'],
  $paginationBorderWidth = defaultProps['$pagination-border-width'],
  $paginationBorderColor = defaultProps['$pagination-border-color'],
  $paginationHoverColor = defaultProps['$pagination-hover-color'],
  $paginationHoverBg = defaultProps['$pagination-hover-bg'],
  $paginationHoverBorder = defaultProps['$pagination-hover-border'],
  $paginationPaddingYLg = defaultProps['$pagination-padding-y-lg'],
  $paginationPaddingXLg = defaultProps['$pagination-padding-x-lg'],
  $fontSizeLg = defaultProps['$font-size-lg'],
  $lineHeightLg = defaultProps['$line-height-lg'],
  $borderRadiusLg = defaultProps['$border-radius-lg'],
  $paginationPaddingYSm = defaultProps['$pagination-padding-y-sm'],
  $paginationPaddingXSm = defaultProps['$pagination-padding-x-sm'],
  $fontSizeSm = defaultProps['$font-size-sm'],
  $lineHeightSm = defaultProps['$line-height-sm'],
  $borderRadiusSm = defaultProps['$border-radius-sm'],
) {
  return `
  &.pagination {
    display: flex;
    padding-left: 0;
    list-style: none; 
    ${borderRadius(
      $enableRounded
    )}
  }
  
  & .page-item {
    &:first-child {
      .page-link {
        margin-left: 0;
        ${borderLeftRadius(
          $enableRounded,
          $borderRadius
        )}
      }
    }
    &:last-child {
      .page-link {
      ${borderRightRadius(
        $enableRounded,
        $borderRadius
      )}
      }
    }
  
    &.active .page-link {
      z-index: 2;
      color: ${$paginationActiveColor};
      background-color: ${$paginationActiveBg};
      border-color: ${$paginationActiveBorder};
    }
  
    &.disabled .page-link {
      color: ${$paginationDisabledColor};
      pointer-events: none;
      cursor: ${$cursorDisabled};
      background-color: ${$paginationDisabledBg};
      border-color: ${$paginationDisabledBorder};
    }
  }
  
  & .page-link {
    position: relative;
    display: block;
    padding: ${$paginationPaddingY} ${$paginationPaddingX};
    margin-left: -1px;
    line-height: ${$paginationLineHeight};
    color: ${$paginationColor};
    background-color: ${$paginationBg};
    border: ${$paginationBorderWidth} solid ${$paginationBorderColor};
    
    ${hoverFocus(
      $enableHoverMediaQuery,
      `
        color: ${$paginationHoverColor};
        text-decoration: none;
        background-color: ${$paginationHoverBg};
        border-color: ${$paginationHoverBorder};
      `
    )}
  }
  
  /* Sizing */
  &.pagination-lg {
    ${paginationSize(
      $enableRounded,
      $paginationPaddingYLg,
      $paginationPaddingXLg,
      $fontSizeLg,
      $lineHeightLg,
      $borderRadiusLg
    )}
  }
  
  &.pagination-sm {
    ${paginationSize(
      $enableRounded,
      $paginationPaddingYSm,
      $paginationPaddingXSm,
      $fontSizeSm,
      $lineHeightSm,
      $borderRadiusSm
    )}
  }
  `;
}

export default {
  pagination,
};
