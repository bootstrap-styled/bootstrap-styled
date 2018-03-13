/**
 * CardDeck Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';
import mapToCssModules from 'map-to-css-modules';
import { card } from 'bootstrap-styled-mixins/lib/cards';

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
    PropTypes.func,
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
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class CardDeckUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-deck'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

const CardDeck = styled(CardDeckUnstyled)`
  ${(props) => `
    ${card(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$card-spacer-y'],
      props.theme['$card-spacer-x'],
      props.theme['$card-bg'],
      props.theme['$card-border-width'],
      props.theme['$card-border-color'],
      props.theme['$card-border-radius'],
      props.theme['$card-margin-y-halved'],
      props.theme['$card-margin-x-halved'],
      props.theme['$card-cap-bg'],
      props.theme['$card-border-radius-inner'],
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-danger-bg'],
      props.theme['$card-link-hover-color'],
      props.theme['$card-img-overlay-padding'],
      props.theme['$card-inverse-bg-color'],
      props.theme['$card-inverse-border-color'],
    )}
    ${mediaBreakpointUp(
      'sm',
      props.theme['$grid-breakpoints'],
      `
        &.card-deck {
          display: flex;
          flex-flow: row wrap;
        
          .card {
            display: flex;
            flex: 1 0 0;
            flex-direction: column;  
            &:not(:first-child) { margin-left: ${props.theme['$card-deck-margin']}; }
            &:not(:last-child) { margin-right: ${props.theme['$card-deck-margin']}; }
          }
        }
      `
    )}
  `}
`;

CardDeck.defaultProps = defaultProps;
CardDeck.propTypes = propTypes;

/** @component */
export default CardDeck;
