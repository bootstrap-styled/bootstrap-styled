import { hoverFocus } from './hover';

export const defaultProps = {
  '$card-link-hover-color': '#fff',
  '$enable-hover-media-query': false,
};

export function cardVariant(cardBackground, cardBorder) {
  return `
    background-color: ${cardBackground};
    border-color: ${cardBorder};
  
    & .card-header,
    & .card-footer {
      background-color: transparent;
    }
  `;
}

export function cardOutlineVariant(cardColor) {
  return `
    background-color: transparent;
    border-color: ${cardColor};
  `;
}

export function cardInverse(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], cardLinkHoverColor = defaultProps['$card-link-hover-color']) {
  return `
    & .card-header,
    & .card-footer {
      border-color: rgba(255,255,255,.2);
    }
    & .card-header,
    & .card-footer,
    & .card-title,
    & .card-blockquote {
      color: #fff;
    }
    & .card-link,
    & .card-text,
    & .card-subtitle,
    & .card-blockquote .blockquote-footer {
      color: rgba(255,255,255,.65);
    }
    & .card-link {
      ${hoverFocus(
        enableHoverMediaQuery,
        `color: ${cardLinkHoverColor};`
      )}
    }
  `;
}

export default {
  defaultProps,
  cardVariant,
  cardOutlineVariant,
  cardInverse,
};
