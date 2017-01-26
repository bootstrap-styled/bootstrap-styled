import { hover } from '../../styled/mixins/hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from '../../styled/mixins/border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from '../../styled/mixins/cards';

export const defaultProps = {

  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$card-spacer-y': '.75rem',
  '$card-spacer-x': '1.25rem',
  '$card-bg': '#fff',
  '$card-border-width': '1px',
  '$card-border-color': 'rgba(0,0,0,.125)',
  '$card-border-radius': '.25rem',
  '$card-margin-y-halved': 'calc(.75rem / 2)',
  '$card-margin-x-halved': 'calc(1.25rem / 2)',
  '$card-cap-bg': '#f5f5f5',
  '$card-border-radius-inner': 'calc(.25rem - 1px)',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$btn-primary-bg': '#0275d8',
  '$btn-secondary-border': '#ccc',
  '$btn-info-bg': '#5bc0de',
  '$btn-success-bg': '#5cb85c',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-danger-bg': '#d9534f',
  '$card-link-hover-color': '#fff',
  '$card-img-overlay-padding': '1.25rem',
};

export function card(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $cardSpacerY = defaultProps['$card-spacer-y'],
  $cardSpacerX = defaultProps['$card-spacer-x'],
  $cardBg = defaultProps['$card-bg'],
  $cardBorderWidth = defaultProps['$card-border-width'],
  $cardBorderColor = defaultProps['$card-border-color'],
  $cardBorderRadius = defaultProps['$card-border-radius'],
  $cardMarginYHalved = defaultProps['$card-margin-y-halved'],
  $cardMarginXHalved = defaultProps['$card-margin-x-halved'],
  $cardCapBg = defaultProps['$card-cap-bg'],
  $cardBorderRadiusInner = defaultProps['$card-border-radius-inner'],
  $brandPrimary = defaultProps['$brand-primary'],
  $brandSuccess = defaultProps['$brand-success'],
  $brandInfo = defaultProps['$brand-info'],
  $brandWarning = defaultProps['$brand-warning'],
  $brandDanger = defaultProps['$brand-danger'],
  $btnPrimaryBg = defaultProps['$btn-primary-bg'],
  $btnSecondaryBorder = defaultProps['$btn-secondary-border'],
  $btnInfoBg = defaultProps['$btn-info-bg'],
  $btnSuccessBg = defaultProps['$btn-success-bg'],
  $btnWarningBg = defaultProps['$btn-warning-bg'],
  $btnDangerBg = defaultProps['$btn-danger-bg'],
  $cardLinkHoverColor = defaultProps['$card-link-hover-color'],
  $cardImgOverlayPadding = defaultProps['$card-img-overlay-padding'],
) {
  return `
    
    /*
    Base styles
    */
    
    & .card{
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${$cardBg};
      border: ${$cardBorderWidth} solid ${$cardBorderColor};
      ${borderRadius($enableRounded, $cardBorderRadius)};
    }
    

    & .card-block{
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
        text-decoration: none;;
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
    
    
    /*
     Optional textual caps
    */
    
    & .card-header {
      padding: ${$cardSpacerY} ${$cardSpacerX};
      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */
      background-color: ${$cardCapBg};
      border-bottom: ${$cardBorderWidth} solid ${$cardBorderColor};
    
      &:first-child {
        ${borderRadius(
        $enableRounded,
        $cardBorderRadiusInner,
        $cardBorderRadiusInner,
        '0',
        '0'
      )};
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
      )};
      }
    }
    
    
    /*
     Header navs
    */
    
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
    
    
    /*
     Background variations
    */
    
    & .card-primary{
      ${cardVariant(
        $brandPrimary,
        $brandPrimary,
      )}
    }
    & .card-success{
      ${cardVariant(
        $brandSuccess,
        $brandSuccess,
      )}
    }
    & .card-info{
      ${cardVariant(
      $brandInfo,
      $brandInfo,
    )}
    }
    & .card-warning{
      ${cardVariant(
        $brandWarning,
        $brandWarning,
      )}
    }
    & .card-danger{
      ${cardVariant(
        $brandDanger,
        $brandDanger,
      )}
    }
    
    /* Remove all backgrounds */
    & .card-outline-primary{
      ${cardOutlineVariant(
        $btnPrimaryBg,
      )}
    }
    & .card-outline-secondary{
      ${cardOutlineVariant(
        $btnSecondaryBorder,
      )}
    }
    & .card-outline-info{
      ${cardOutlineVariant(
        $btnInfoBg,
      )}
    }
    & .card-outline-success{
      ${cardOutlineVariant(
        $btnSuccessBg,
      )}
    }
    & .card-outline-warning{
      ${cardOutlineVariant(
        $btnWarningBg,
      )}
    }
    & .card-outline-danger{
      ${cardOutlineVariant(
        $btnDangerBg,
      )}
    }
    
    /*
     Inverse text within a card for use with dark backgrounds
    */
    
    & .card-inverse{
      ${cardInverse(
        $enableHoverMediaQuery,
        $cardLinkHoverColor
      )}
    }
    
    /*
     Blockquote
    */
    
    & .card-blockquote {
      padding: 0;
      margin-bottom: 0;
      border-left: 0;
    }
    
    /* Card image */
    & .card-img {
      /* margin: -1.325rem; */
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
    
    
    
    /* Card image caps */
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
  card,
};
