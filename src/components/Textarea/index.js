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
    wrap: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  render() {
    const { children, value, wrap, onChange } = this.props;
    return (
      <textarea
        value={value}
        wrap={wrap}
        onChange={onChange}
        className={cn('textarea', this.props.className)}
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
