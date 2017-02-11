/**
 * Figure Component
 *
 *
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

class Figure extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <figure className={className} {...rest}>
        {children}
      </figure>
    );
  }
}

// eslint-disable-next-line no-class-assign
Figure = styled(Figure)`
  ${(props) => `
    margin: 0 0 1rem;  /* Apply a consistent margin strategy (matches our type styles). */
    
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
    
  `}
`;

Figure.defaultProps = defaultProps;

export default Figure;
