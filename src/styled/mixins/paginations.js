import { borderLeftRadius, borderRightRadius } from './border-radius';

export const defaultProps = {
  '$enable-rounded': true,
};
// Pagination
/**
 * Wrapper for paginationSizeBootstrap
 * @param paddingY
 * @param paddingX
 * @param fontSize
 * @param lineHeight
 * @param borderRadius
 * @returns {string}
 */
export function paginationSize(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, borderRadius) {
  return paginationSizeBootstrap(enableRounded, paddingY, paddingX, fontSize, null, borderRadius);
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
export function paginationSizeBootstrap(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, lineHeight, borderRadius) {
  return `
    .page-link {
      padding: ${paddingY} ${paddingX};
      font-size: ${fontSize};
    }
  
    .page-item {
      &:first-child {
        .page-link {
          ${borderLeftRadius(enableRounded, borderRadius)}
        }
      }
      &:last-child {
        .page-link {
          ${borderRightRadius(enableRounded, borderRadius)}
        }
      }
    }
  `;
}

export default {
  defaultProps,
  paginationSize,
  paginationSizeBootstrap,
};
