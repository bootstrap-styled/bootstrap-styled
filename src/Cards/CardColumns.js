/**
 * Card Columns Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';
import { card } from 'bootstrap-styled-mixins/lib/cards';
import themeCards from './theme';

const defaultProps = {
  theme: themeCards,
  tag: 'div',
};

class CardColumnsUnstyled extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    theme: PropTypes.object,
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
          'card-columns'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

const CardColumns = styled(CardColumnsUnstyled)`
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
        &.card-columns {
          column-count: ${props.theme['$card-columns-count']};
          column-gap: ${props.theme['$card-columns-gap']};
      
          .card {
            display: inline-block; /* Don't let them vertically span multiple columns */
            width: 100%; /* Don't let them exceed the column width */
            margin-bottom: ${props.theme['$card-columns-margin']};
          }
        }
      `
    )}
  `}
`;

CardColumns.defaultProps = defaultProps;

export default CardColumns;
