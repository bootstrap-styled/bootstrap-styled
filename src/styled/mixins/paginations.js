import theme from '../../theme';

import { hoverFocus } from './hover';
import { borderLeftRadius, borderRightRadius, borderRadius } from './border-radius';

export const defaultProps = theme;

/**
 * Wrapper for paginationSizeBootstrap
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
export function paginationSize(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, borderRadiusPagination) {
  return paginationSizeBootstrap(enableRounded, paddingY, paddingX, fontSize, null, borderRadiusPagination);
}

/**
 * This is the original function, however, lineHeight is never used (only with null values)
 * we wrap and keep it for history
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
export function paginationSizeBootstrap(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, lineHeight, borderRadiusPagination) {
  return `
    .page-link {
      padding: ${paddingY} ${paddingX};
      font-size: ${fontSize};
    }
  
    .page-item {
      &:first-child {
        .page-link {
          ${borderLeftRadius(enableRounded, borderRadiusPagination)}
        }
      }
      &:last-child {
        .page-link {
          ${borderRightRadius(enableRounded, borderRadiusPagination)}
        }
      }
    }
  `;
}

export function pagination(
  $enableRounded,
  $enableHoverMediaQuery,
  $borderRadius,
  $paginationActiveColor,
  $paginationActiveBg,
  $paginationActiveBorder,
  $paginationDisabledColor,
  $cursorDisabled,
  $paginationDisabledBg,
  $paginationDisabledBorder,
  $paginationPaddingY,
  $paginationPaddingX,
  $paginationLineHeight,
  $paginationColor,
  $paginationBg,
  $paginationBorderWidth,
  $paginationBorderColor,
  $paginationHoverColor,
  $paginationHoverBg,
  $paginationHoverBorder,
  $paginationPaddingYLg,
  $paginationPaddingXLg,
  $fontSizeLg,
  $lineHeightLg,
  $borderRadiusLg,
  $paginationPaddingYSm,
  $paginationPaddingXSm,
  $fontSizeSm,
  $lineHeightSm,
  $borderRadiusSm,
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
  defaultProps,
  paginationSize,
  paginationSizeBootstrap,
  pagination,
};
