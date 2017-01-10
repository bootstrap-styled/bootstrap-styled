/* A Select (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Select extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.string,
  }

  render() {
    const { autoFocus, disabled, form, multiple, name, required, size } = this.props;

    return (
      <select
        autoFocus={autoFocus}
        disabled={disabled}
        form={form}
        multiple={multiple}
        name={name}
        required={required}
        size={size}
        className={cn(this.props.className, 'select')}
      >
        {this.props.children}
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
