/* A Select (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Select extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { theme, className, children, ...rest } = this.props; // eslint-disable-line

    return (
      <select
        className={cn(className, 'select')}
        {...rest}
      >
        {children}
      </select>
    );
  }
}

// eslint-disable-next-line no-class-assign
Select = styled(Select)`
  &.select {
    touch-action: manipulation;
    line-height: inherit;
  }
  
  &:disabled{
    color: graytext;
  }
`;

export default Select;
