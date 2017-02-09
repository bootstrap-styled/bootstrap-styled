/**
 * Card Columns Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { card } from '../../styled/utilities/card';

const defaultProps = { theme };

class CardColumns extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div
        className={cn(this.props.className, 'card-columns')}
      >
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
CardColumns = styled(CardColumns)`
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
    )}
    /*
     Card Column
    */
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
