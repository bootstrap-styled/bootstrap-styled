/**
 * Figure Component
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';

class Figure extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = omit(this.props, ['theme']);

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
