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
import themeCards from './theme';

const defaultProps = {
  theme: themeCards,
  tag: 'div',
};

class CardDeckUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    theme: PropTypes.object,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

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

export default CardDeck;
