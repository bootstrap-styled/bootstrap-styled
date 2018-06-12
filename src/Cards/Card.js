/**
 * Card Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { hover } from 'bootstrap-styled-mixins/lib/hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { cardVariant, cardOutlineVariant, cardInverse } from 'bootstrap-styled-mixins/lib/cards';
import { ifThen } from 'bootstrap-styled-mixins/lib/conditional';

export const defaultProps = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': '',
    '$card-cap-bg': '$gray-lightest',
    '$card-bg': '$white',
    '$card-link-hover-color': '$white',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-margin-x-halved': '((rmUnit(], UNIT.REM) / 2) + UNIT.REM',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '$card-spacer-y',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '$card-spacer-y',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '$card-spacer-y',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '$card-spacer-y',
    '$card-deck-margin': '(r, detectedUnit) / 2) + detectedUni',
    '$btn-primary-bg': '$brand-primary',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '$brand-info',
    '$btn-success-bg': '$brand-success',
    '$btn-warning-bg': '$brand-warning',
    '$btn-danger-bg': '$brand-danger',
    '$enable-rounded': false,
    '$enable-hover-media-query': false,
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$brand-primary': PropTypes.string,
    '$brand-success': PropTypes.string,
    '$brand-info': PropTypes.string,
    '$brand-warning': PropTypes.string,
    '$brand-danger': PropTypes.string,
    '$brand-inverse': PropTypes.string,
    '$card-spacer-x': PropTypes.string,
    '$card-spacer-y': PropTypes.string,
    '$card-border-width': PropTypes.string,
    '$card-border-radius': PropTypes.string,
    '$card-border-color': PropTypes.string,
    '$card-border-radius-inner': PropTypes.string,
    '$card-cap-bg': PropTypes.string,
    '$card-bg': PropTypes.string,
    '$card-link-hover-color': PropTypes.string,
    '$card-img-overlay-padding': PropTypes.string,
    '$card-margin-y-halved': PropTypes.string,
    '$card-margin-x-halved': PropTypes.string,
    '$card-columns-count-md': PropTypes.string,
    '$card-columns-gap-md': PropTypes.string,
    '$card-columns-margin-md': PropTypes.string,
    '$card-columns-count-lg': PropTypes.string,
    '$card-columns-gap-lg': PropTypes.string,
    '$card-columns-margin-lg': PropTypes.string,
    '$card-columns-count-xl': PropTypes.string,
    '$card-columns-gap-xl': PropTypes.string,
    '$card-columns-margin-xl': PropTypes.string,
    '$card-columns-count-xxl': PropTypes.string,
    '$card-columns-gap-xxl': PropTypes.string,
    '$card-columns-margin-xxl': PropTypes.string,
    '$card-deck-margin': PropTypes.string,
    '$btn-primary-bg': PropTypes.string,
    '$btn-secondary-border': PropTypes.string,
    '$btn-info-bg': PropTypes.string,
    '$btn-success-bg': PropTypes.string,
    '$btn-warning-bg': PropTypes.string,
    '$btn-danger-bg': PropTypes.string,
    '$link-color': PropTypes.string,
    '$link-decoration': PropTypes.string,
    '$link-hover-color': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
  }),
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'white',
  ]),
  /** Toggles inverse CSS color. */
  inverse: PropTypes.bool,
  /** Toggles block CSS display. */
  block: PropTypes.bool,
  /** Toggles outline CSS styles. */
  outline: PropTypes.bool,
  /** Width size in percent. */
  width: PropTypes.string,
  /** Use different background color with valid CSS. */
  backgroundColor: PropTypes.string,
  /** Use different border color with valid CSS. */
  borderColor: PropTypes.string,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class CardUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      color,
      block,
      inverse,
      outline,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme', 'backgroundColor', 'borderColor', 'width']);

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card',
          {
            inverse,
            'card-block': block,
            [`card-${color}`]: color,
            [`card-${outline ? '-outline' : ''}-${color}`]: outline,
          }
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

/**
 * Use our `<Card />` blocks with `<CardImg />`, `<CardBlock />`, `<CardTitle />`, `<CardSubtitle />` and `<CardText />` components  to emphasize part of your page.
 * You can also use `width` attribute.
 */
const Card = styled(CardUnstyled)`
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
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius'])}
      
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
    
    &.card-block,
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
        )}
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
        )}
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
Card.propTypes = propTypes;

/** @component */
export default Card;
