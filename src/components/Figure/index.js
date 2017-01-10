/**
 * Figure Component
 *
 *
 */
import theme from 'config';

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { getTextUtilities } from '../../styled/utilities/text';

const defaultProps = { theme };

class Figure extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <figure className={this.props.className}>
        {this.props.children}
      </figure>
    );
  }
}

// eslint-disable-next-line no-class-assign
Figure = styled(Figure)`
  ${(props) => `
  
    &.figure {
      // Ensures the caption's text aligns with the image.
      display: inline-block;
    }
    
    & .figure-img {
      margin-bottom: ${props.theme['$spacer-halved']};
      line-height: 1;
    }
    
    & .figure-caption {
      font-size: ${props.theme['$figure-caption-font-size']};
      color: ${props.theme['$gray-light']};
    }

    
    /* Reboot Scss */
    /* Normalize adds 'margin' to 'figure's as browsers apply it inconsistently. */
    /* We reset that to create a better flow in-page. */
    margin: 0 0 1rem;
    
    /* The next classes are not part of Bs4, added for rendering of DocBootstrapPage */
    ${getTextUtilities(props.theme['$grid-breakpoints'])}    
  `}
`;

Figure.defaultProps = defaultProps;

export default Figure;
