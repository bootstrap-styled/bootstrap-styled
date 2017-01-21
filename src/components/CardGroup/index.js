/**
 * CardGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from '../../config';
import { clearfix } from '../../styled/mixins/clearfix';
import { hover } from '../../styled/mixins/hover';
import { borderRadius, borderRightRadius, borderTopRadius, borderBottomRadius, borderLeftRadius } from '../../styled/mixins/border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from '../../styled/mixins/cards';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { ifElse, ifThen } from '../../styled/mixins/conditional';

const defaultProps = { theme };

class CardGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div
        className={cn(this.props.className, 'card-group')}
      >
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
CardGroup = styled(CardGroup)`
  ${(props) => `
    /*
    AJT Placed before card-groups so that display: block does not overide display: table-cells in .card-group .card
    */
    & .card {
      position: relative;
      display: block;
      margin-bottom: ${props.theme['$card-spacer-y']};
      background-color: ${props.theme['$card-bg']};
      /* border: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']}; */
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius'])};
      border: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']};
    }
    /*
     Card groups
    */
      ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
        &.card-group {
          ${ifElse(
            props.theme['$enable-flex'],
            `
              display: flex;
              flex-flow: row wrap;
            `,
            `
              display: table;
              width: 100%;
              table-layout: fixed;
            `
          )}
        }
        
        & .card {
          ${ifElse(
            props.theme['$enable-flex'],
            `
              flex: 1 0 0;
            `,
            `
              display: table-cell;
              vertical-align: top;
            `
          )}
        
        
          + .card {
              margin-left: 0;
              border-left: 0;
          }
        
          /* Handle rounded corners */
        
          ${ifThen(
            props.theme['$enable-rounded'],
            `
              &:first-child {
                ${borderRightRadius(
                  props.theme['$enable-rounded'],
                  '0'
                )}
                .card-img-top {
                  border-top-right-radius: 0;
                }
                
                .card-img-bottom {
                  border-bottom-right-radius: 0;
                }
              }
            
              &:last-child {
                ${borderLeftRadius(
                  props.theme['$enable-rounded'],
                  '0'
                )}
                
                .card-img-top {
                  border-top-left-radius: 0;
                }
                
                .card-img-bottom {
                  border-bottom-left-radius: 0;
                }
              }
              
              &:not(:first-child):not(:last-child) {
                border-radius: 0;
      
                .card-img-top,
                .card-img-bottom {
                  border-radius: 0;
                }
              }
            `
          )}    
        }
      `
    )}
    
   
    
    & .card-block {
      ${clearfix()};
      padding: ${props.theme['$card-spacer-x']};
    }
    
    & .card-title {
      margin-bottom: ${props.theme['$card-spacer-y']};
    }
    
    & .card-subtitle {
      margin-top: -${props.theme['$card-margin-y-halved']};
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
        margin-left: ${props.theme['$card-spacer-x']};
      }
    }
    
    &.card {
      > .list-group:first-child {
        .list-group-item:first-child {
          ${borderTopRadius(
            props.theme['$enable-rounded'],
            props.theme['$card-border-radius']
          )}
        }
      }
    
      > .list-group:last-child {
        .list-group-item:last-child {
          ${borderBottomRadius(
            props.theme['$enable-rounded'],
            props.theme['$card-border-radius']
          )}
        }
      }
    }
    
    
    /*
     Optional textual caps
    */
    
    & .card-header {
      ${clearfix()};
      padding: ${props.theme['$card-spacer-y']} ${props.theme['$card-spacer-x']};
      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */
      background-color: ${props.theme['$card-cap-bg']};
      border-bottom: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']};
    
      &:first-child {
        ${borderRadius(
          props.theme['$enable-rounded'],
          props.theme['$card-border-radius-inner'],
          props.theme['$card-border-radius-inner'],
          '0',
          '0'
        )};
      }
    }
    
    & .card-footer {
      ${clearfix()};
      padding: ${props.theme['$card-spacer-y']} ${props.theme['$card-spacer-x']};
      background-color: ${props.theme['$card-cap-bg']};
      border-top: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']};
    
      &:last-child {
        ${borderRadius(
          props.theme['$enable-rounded'],
          '0',
          '0',
          props.theme['$card-border-radius-inner'],
          props.theme['$card-border-radius-inner']
        )};
      }
    }
    
    
    /*
     Header navs
    */
    
    & .card-header-tabs {
      margin-right: -${props.theme['$card-margin-x-halved']};
      margin-bottom: -${props.theme['$card-spacer-y']};
      margin-left: -${props.theme['$card-margin-x-halved']};
      border-bottom: 0;
    }
    
    & .card-header-pills {
      margin-right: -${props.theme['$card-margin-x-halved']};
      margin-left: -${props.theme['$card-margin-x-halved']};
    }
    
    
    /*
     Background variations
    */
    
    &.card-primary {
      ${cardVariant(
        props.theme['$brand-primary'],
        props.theme['$brand-primary'],
      )}
    }
    &.card-success {
      ${cardVariant(
        props.theme['$brand-success'],
        props.theme['$brand-success'],
      )}
    }
    &.card-info {
      ${cardVariant(
        props.theme['$brand-info'],
        props.theme['$brand-info'],
      )}
    }
    &.card-warning {
      ${cardVariant(
        props.theme['$brand-warning'],
        props.theme['$brand-warning'],
      )}
    }
    &.card-danger {
      ${cardVariant(
        props.theme['$brand-danger'],
        props.theme['$brand-danger'],
      )}
    }
    
    /* Remove all backgrounds */
    &.card-outline-primary {
      ${cardOutlineVariant(
        props.theme['$btn-primary-bg'],
      )}
    }
    &.card-outline-secondary {
      ${cardOutlineVariant(
        props.theme['$btn-secondary-bg'],
      )}
    }
    &.card-outline-info {
      ${cardOutlineVariant(
        props.theme['$btn-info-bg'],
      )}
    }
    &.card-outline-success {
      ${cardOutlineVariant(
        props.theme['$btn-success-bg'],
      )}
    }
    &.card-outline-warning {
      ${cardOutlineVariant(
        props.theme['$btn-warning-bg'],
      )}
    }
    &.card-outline-danger {
      ${cardOutlineVariant(
        props.theme['$btn-danger-bg'],
      )}
    }
    
    /*
     Inverse text within a card for use with dark backgrounds
    */
    
    &.card-inverse {
      ${cardInverse(
        props.theme['$enable-hover-media-query'],
        props.theme['$card-link-hover-color']
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
        props.theme['$enable-rounded'],
        props.theme['$card-border-radius-inner'],
      )}
    }
    
    & .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: ${props.theme['$card-img-overlay-padding']};
    }
    
    
    
    /* Card image caps */
    & .card-img-top {
      ${borderTopRadius(
        props.theme['$enable-rounded'],
        props.theme['$card-border-radius-inner']
      )}
    }
    
    & .card-img-bottom {
      ${borderBottomRadius(
        props.theme['$enable-rounded'],
        props.theme['$card-border-radius-inner']
      )}
    }
    
    
    /* Card set
    
     Heads up! We do some funky style resetting here for margins across our two
     variations (one flex, one table). Individual cards have margin-bottom by
     default, but they're ignored due to table styles. For a consistent design,
     we've done the same to the flex variation.
    
     Those changes are noted by '// Margin balancing'.
     */
    ${ifElse(
      props.theme['$enable-flex'],
      mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          & .card-deck {
            display: flex;
            flex-flow: row wrap;
            margin-right: -${props.theme['$card-deck-margin']};
            margin-bottom: ${props.theme['$card-spacer-y']}; /* Margin balancing */
            margin-left: -${props.theme['$card-deck-margin']};
          
            .card {
              flex: 1 0 0;
              margin-right: ${props.theme['$card-deck-margin']};
              margin-bottom: 0; /* Margin balancing */
              margin-left: ${props.theme['$card-deck-margin']};
            }
          }
        `
      ),
      mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          & .card-deck {
            display: table;
            width: 100%;
            margin-bottom: ${props.theme['$card-spacer-y']}; /* Margin balancing */
            table-layout: fixed;
            border-spacing: ${props.theme['$space-between-cards']} 0;
            
            .card {
              display: table-cell;
              margin-bottom: 0; /* Margin balancing */
              vertical-align: top;
            }
          }
        
          &.card-deck-wrapper {
            margin-right: -${props.theme['$space-between-cards']};
            margin-left: -${props.theme['$space-between-cards']};
          }
        `
      )
    )}
  `}
`;

CardGroup.defaultProps = defaultProps;

export default CardGroup;
