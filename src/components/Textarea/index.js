/* A Textarea (Box) */

/**
 * A Textarea tag
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Textarea extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { theme, children, className, ...rest } = this.props;  // eslint-disable-line
    return (
      <textarea
        className={cn('textarea', className)}
        {...rest}
      >
        {children}
      </textarea>
    );
  }
}

// eslint-disable-next-line no-class-assign
Textarea = styled(Textarea)`
  &.textarea {
    touch-action: manipulation;
    line-height: inherit;
    /* Textareas should really only resize vertically so they don't break their (horizontal) containers. */
    resize: vertical;
  }
`;

export default Textarea;
