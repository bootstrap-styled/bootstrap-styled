/**
 * Card Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { hover } from '../../styled/mixins/hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from '../../styled/mixins/border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from '../../styled/mixins/cards';
import { ifThen } from '../../styled/mixins/conditional';

const defaultProps = {
  theme: bsTheme,
};
class Card extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
  }

  render() {
    const { className, children, theme, ...rest } = this.props;// eslint-disable-line no-unused-vars
    return (
      <div
        className={cn(className, 'card')}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Card = styled(Card)`
  ${(props) => `
    
    /*
    Base styles
    */
    &.card {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${props.theme['$card-bg']};
      border: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius'])};
      border: ${props.theme['$card-border-width']} solid ${props.theme['$card-border-color']};
      ${ifThen(
        props.width,
        `width: ${props.width};`
      )}
      ${ifThen(
        props.backgroundColor,
        `background-color: ${props.backgroundColor};`
      )}
      ${ifThen(
        props.borderColor,
        `border-color: ${props.borderColor};`
      )}
    }
    
    & .card-block {
      flex: 1 1 auto;
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
        text-decoration: none;
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
        props.theme['$btn-secondary-border'],
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
        props.theme['$card-link-hover-color'],
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
  `}
`;

Card.defaultProps = defaultProps;

export default Card;
