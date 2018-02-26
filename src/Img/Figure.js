/**
 * Figure Component
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

class FigureUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;

    return (
      <figure className={cn('figure', className)} {...rest}>
        {children}
      </figure>
    );
  }
}

const Figure = styled(FigureUnstyled)`
    
  &.figure {
    /* Ensures the captions text aligns with the image. */
    display: inline-block;
  }

  /* Reboot Scss */
  /* Normalize adds margin to figures as browsers apply it inconsistently. */
  /* We reset that to create a better flow in-page. */
  margin: 0 0 1rem;
  
`;

/** @component */
export default Figure;
