import theme from 'theme';
import { hover, hoverFocus } from './hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from './border-radius';

export const defaultProps = theme;

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
    color: rgba(255,255,255,.65);
    & .card-header,
    & .card-footer {
      background-color: transparent;
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

export function card(
  $enableRounded,
  $enableHoverMediaQuery,
  $cardSpacerY,
  $cardSpacerX,
  $cardBg,
  $cardBorderWidth,
  $cardBorderColor,
  $cardBorderRadius,
  $cardMarginYHalved,
  $cardMarginXHalved,
  $cardCapBg,
  $cardBorderRadiusInner,
  $brandPrimary,
  $brandSuccess,
  $brandInfo,
  $brandWarning,
  $brandDanger,
  $btnPrimaryBg,
  $btnSecondaryBorder,
  $btnInfoBg,
  $btnSuccessBg,
  $btnWarningBg,
  $btnDangerBg,
  $cardLinkHoverColor,
  $cardImgOverlayPadding,
) {
  return `
    & .card {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${$cardBg};
      border: ${$cardBorderWidth} solid ${$cardBorderColor};
      ${borderRadius($enableRounded, $cardBorderRadius)}
    }
    
    & .card-block {
      flex: 1 1 auto;

      padding: ${$cardSpacerX};
    }
    
    & .card-title {
      margin-bottom: ${$cardSpacerY};
    }
    
    & .card-subtitle {
      margin-top: -${$cardMarginYHalved};
      margin-bottom: 0;
    }
    
    & .card-text:last-child {
      margin-bottom: 0;
    }
   
    & .card-link {
      ${hover(`
        text-decoration: none;
      `)}
    
      + .card-link {
        margin-left: ${$cardSpacerX};
      }
    }
    
    & .card{
      > .list-group:first-child {
        .list-group-item:first-child {
          ${borderTopRadius(
            $enableRounded,
            $cardBorderRadius
          )}
        }
      }
    
      > .list-group:last-child {
        .list-group-item:last-child {
          ${borderBottomRadius(
            $enableRounded,
            $cardBorderRadius
          )}
        }
      }
    }
    
    & .card-header {
      padding: ${$cardSpacerY} ${$cardSpacerX};
      margin-bottom: 0;
      background-color: ${$cardCapBg};
      border-bottom: ${$cardBorderWidth} solid ${$cardBorderColor};
    
      &:first-child {
        ${borderRadius(
          $enableRounded,
          $cardBorderRadiusInner,
          $cardBorderRadiusInner,
          '0',
          '0'
        )}
      }
    }
    
    & .card-footer {
      padding: ${$cardSpacerY} ${$cardSpacerX};
      background-color: ${$cardCapBg};
      border-top: ${$cardBorderWidth} solid ${$cardBorderColor};
    
      &:last-child {
        ${borderRadius(
          $enableRounded,
          '0',
          '0',
          $cardBorderRadiusInner,
          $cardBorderRadiusInner
        )}
      }
    }

    & .card-header-tabs {
      margin-right: -${$cardMarginXHalved};
      margin-bottom: -${$cardSpacerY};
      margin-left: -${$cardMarginXHalved};
      border-bottom: 0;
    }
    
    & .card-header-pills {
      margin-right: -${$cardMarginXHalved};
      margin-left: -${$cardMarginXHalved};
    }
    
    & .card-primary {
      ${cardVariant(
        $brandPrimary,
        $brandPrimary,
      )}
    }
    & .card-success {
      ${cardVariant(
        $brandSuccess,
        $brandSuccess,
      )}
    }
    & .card-info {
      ${cardVariant(
        $brandInfo,
        $brandInfo,
      )}
    }
    & .card-warning {
      ${cardVariant(
        $brandWarning,
        $brandWarning,
      )}
    }
    & .card-danger {
      ${cardVariant(
        $brandDanger,
        $brandDanger,
      )}
    }
    
    & .card-outline-primary {
      ${cardOutlineVariant(
        $btnPrimaryBg,
      )}
    }
    & .card-outline-secondary {
      ${cardOutlineVariant(
        $btnSecondaryBorder,
      )}
    }
    & .card-outline-info {
      ${cardOutlineVariant(
        $btnInfoBg,
      )}
    }
    & .card-outline-success {
      ${cardOutlineVariant(
        $btnSuccessBg,
      )}
    }
    & .card-outline-warning {
      ${cardOutlineVariant(
        $btnWarningBg,
      )}
    }
    & .card-outline-danger {
      ${cardOutlineVariant(
        $btnDangerBg,
      )}
    }
        
    & .card-inverse {
      ${cardInverse(
        $enableHoverMediaQuery,
        $cardLinkHoverColor,
      )}
    }

    & .card-blockquote {
      padding: 0;
      margin-bottom: 0;
      border-left: 0;
    }
    
    & .card-img {
      ${borderRadius(
        $enableRounded,
        $cardBorderRadiusInner,
      )}
    }
    
    & .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: ${$cardImgOverlayPadding};
    }

    & .card-img-top {
      ${borderTopRadius(
        $enableRounded,
        $cardBorderRadiusInner
      )}
    }
    
    & .card-img-bottom {
      ${borderBottomRadius(
        $enableRounded,
        $cardBorderRadiusInner
      )}
    }
  `;
}


export default {
  defaultProps,
  cardVariant,
  cardOutlineVariant,
  cardInverse,
  card,
};
