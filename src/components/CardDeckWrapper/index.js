/**
 * Card Deck Wrapper
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

const defaultProps = { theme };

class CardDeckWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
CardDeckWrapper = styled(CardDeckWrapper)` 
  ${(props) => `
    &.card-deck-wrapper {
      margin-right: -${props.theme['$space-between-cards']};
      margin-left: -${props.theme['$space-between-cards']};
    }
  `}
`;

CardDeckWrapper.defaultProps = defaultProps;

export default CardDeckWrapper;
