/**
 * Figure Component
 *
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

class Figure extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <figure className={cn('figure', className)} {...rest}>
        {children}
      </figure>
    );
  }
}

// eslint-disable-next-line no-class-assign
Figure = styled(Figure)`
    
  &.figure {
    /* Ensures the captions text aligns with the image. */
    display: inline-block;
  }

  /* Reboot Scss */
  /* Normalize adds margin to figures as browsers apply it inconsistently. */
  /* We reset that to create a better flow in-page. */
  margin: 0 0 1rem;
  
`;

export default Figure;
